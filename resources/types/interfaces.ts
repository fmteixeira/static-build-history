import { PinCrawl } from "../../Api/types";

export interface Pin extends PinProjectInfo {
  id: string;
  name: string;
  hash: string;
  size: number;
  date: string;
  url: string;
}

export interface PinProjectInfo {
  project: string;
  branch: string;
  commit: string;
}
