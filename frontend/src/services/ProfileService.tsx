import axios from "./HttpService";

export const Profiles = {
  async create(profiles) {
    return axios.post("/profiles", { name: profiles.name, url: profiles.url })
  }
}