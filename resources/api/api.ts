import axios from "axios";

const PINATA_URL = process.env.PINATA_URL;
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET;

export const pinataAPI = {
  axios: axios.create({
    baseURL: PINATA_URL,
    headers: {
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_API_SECRET,
    },
  }),
  url: PINATA_URL,
};
