export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server.herokuapp.com"
    : "http://13.209.19.172:8088";
