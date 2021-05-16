export declare module PinListResponse {
  export interface Keyvalues {
    customKey: number;
  }

  export interface Metadata {
    name: string;
    keyvalues: Keyvalues;
  }

  export interface Region {
    regionId: string;
    currentReplicationCount: number;
    desiredReplicationCount: number;
  }

  export interface Row {
    id: string;
    ipfs_pin_hash: string;
    size: number;
    user_id: string;
    date_pinned: string;
    date_unpinned?: any;
    metadata: Metadata;
    regions: Region[];
  }

  export interface RootObject {
    count: number;
    rows: Row[];
  }
}
