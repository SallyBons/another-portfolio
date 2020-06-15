import axios from "axios";

export class ApiBackendManager {
  instance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_PATH_BACK, //url from .env
    });
  }

  getData = async (param) => {
    const response = await this.instance.get(param);
    const data = await response.data;
    return { data };
  };
}

export default new ApiBackendManager();
