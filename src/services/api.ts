import axios from "axios"

const token = localStorage.getItem('userKey');

export const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`
  }
})