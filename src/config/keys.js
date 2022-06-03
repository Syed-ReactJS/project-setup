import config from "./config.json";

const envData = config[process.env.REACT_APP_MODE];

export const { serverPath, clientPath } = envData;
