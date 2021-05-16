import { Pipeline } from "../../Api/mocks/types";

export default (build: Pipeline.Build): string => {
  return `${build.id}`;
};
