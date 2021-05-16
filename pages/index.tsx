import { AxiosResponse } from "axios";
import { GetServerSideProps, NextPage } from "next";
import PinList from "../Components/PinList";
import { pinataAPI } from "../resources/api/api";
import { PinListResponse } from "../resources/api/pinList/mocks/types";
import { Pin } from "../resources/types/interfaces";
import ErrorPage from "next/error";
import React from "react";
import Header from "../Components/Header";
import routes from "../resources/routes/routes";
import { getDataFromName } from "../resources/utils/parseApiData";

interface Props {
  pins?: Pin[];
}

const Home: NextPage<Props> = ({ pins }) => {
  if (!pins) return <ErrorPage statusCode={500} />;
  return (
    <>
      <Header />
      <PinList pins={pins} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response: AxiosResponse<PinListResponse.RootObject> =
      await pinataAPI.axios.get("/data/pinList?status=pinned");

    const pins: Pin[] =
      response.data.rows.map((pin) => ({
        id: pin.id,
        name: pin.metadata.name,
        hash: pin.ipfs_pin_hash,
        date: pin.date_pinned,
        size: pin.size,
        url: routes.pin(pin),
        ...getDataFromName(pin.metadata.name),
      })) ?? [];

    return {
      props: {
        pins,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
