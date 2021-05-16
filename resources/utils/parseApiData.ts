import { PinProjectInfo } from "../types/interfaces";

export const getDataFromName = (name: string): PinProjectInfo | undefined => {
  const split = name.split("@");
  try {
    return {
      project: split[0],
      branch: split[1],
      commit: split[2],
    };
  } catch (error) {
    return undefined;
  }
};
