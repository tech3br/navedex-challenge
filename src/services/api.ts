import axios from "axios"

export const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/"
})