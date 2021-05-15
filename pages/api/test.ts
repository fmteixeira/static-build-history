import { NextApiRequest, NextApiResponse } from "next";
import { Pipeline } from "../../mocks/types";
import { resolve } from "path";
const AdmZip = require("adm-zip");
const rimraf = require("rimraf");
const fs = require("fs-extra");
const fetch = require("node-fetch");
const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);
import pipeleMock from "../../mocks/pipeline.json";

const dir = process.env.BUILD_FOLDER;

interface Request extends NextApiRequest {
  body: Pipeline.RootObject;
}

export default async (req: Request, res: NextApiResponse) => {
  if (req.method === "GET") {
    // if (req.method === "POST") {
    // const path: string = req.body.project.path_with_namespace;
    // const branch: string = req.body.object_attributes.ref;
    // const builds: Pipeline.Build[] = req.body.builds;

    const path: string = pipeleMock.project.path_with_namespace;
    const branch: string = pipeleMock.object_attributes.ref;
    const builds: Pipeline.Build[] = pipeleMock.builds;

    res.status(200).json("Initialized");
    builds.forEach(async (build) => {
      const srcPath = `${dir}/${build.id}`;
      try {
        // Get artefact zip file
        const response = await fetch(
          `https://gitlab.com/${path}/-/jobs/artifacts/${branch}/download?job=${build.name}`
        );
        const buffer = await response.buffer();

        const zip = new AdmZip(buffer);
        const zipEntries = zip.getEntries();
        // Extract zip's files to srcPath
        zip.extractAllToAsync(srcPath, true, () => {
          pinata.testAuthentication();
          const options = {
            pinataMetadata: {
              name: `${build.name}-${build.id}`,
              keyvalues: {
                customKey: build.id,
              },
            },
            pinataOptions: {
              cidVersion: 0,
            },
          };
          // Save srcPath files to Pinata Cloud
          const pinataPath = resolve(`${dir.replace(".", "")}/${build.id}/`);
          pinata
            .pinFromFS(pinataPath, options)
            .then((result) => {
              console.log("Upload to Pinata success");
              console.log(result);
            })
            .catch((err) => {
              console.log("Upload to Pinata error");
              console.log(err);
            })
            .finally(() =>
              // Clean builds folder
              rimraf(srcPath, () => console.log("Build cleaned up"))
            );
        });
      } catch (error) {
        console.log("Error: ", error);
        // Clean builds folder
        rimraf(srcPath, () => console.log("Build cleaned up"));
        res.status(500).json(error);
      }
    });
  }
};
