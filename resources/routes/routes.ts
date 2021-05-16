const PINATA_GATEWAY_URL = process.env.PINATA_GATEWAY_URL;
import { PinListResponse } from "../api/pinList/mocks/types";

export default {
  pin: (pin: PinListResponse.Row) =>
    `${PINATA_GATEWAY_URL}/${pin.ipfs_pin_hash}`,
};
