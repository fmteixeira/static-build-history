import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { Pin, TreeNode } from "../types/interfaces";
import { PinTreeView } from "../types/types";

export default (pins: Pin[]): PinTreeView => {
  const projects: string[] = Array.from(
    new Set(pins.map((pin) => pin.project))
  );

  const pinTreeView: PinTreeView = projects.reduce(
    (acc: PinTreeView, project: string): PinTreeView => {
      const branches: { id: string; text: string }[] = Array.from(
        new Set(
          pins.filter((pin) => pin.project === project).map((pin) => pin.branch)
        )
      ).map((branch) => ({ id: uuidv4(), text: branch }));
      return [
        ...acc,
        {
          key: project,
          label: project,
          nodes: branches.map(
            (branch): TreeNode => ({
              key: branch.id,
              label: branch.text,
              nodes: pins
                .filter(
                  (pin) => pin.project === project && pin.branch === branch.text
                )
                .map(
                  (pin): TreeNode => ({
                    key: pin.id,
                    label: `${moment(pin.date).format(
                      "DD/MM/YYYY h:mm:ss a"
                    )}, ${moment(pin.date).fromNow()}`,
                    url: pin.url,
                  })
                ),
            })
          ),
        },
      ];
    },
    []
  );
  return pinTreeView;
};
