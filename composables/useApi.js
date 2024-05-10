import axios from 'axios'
import ls from "localstorage-slim";


export const api = () => {
  const baseURL = useRuntimeConfig().public.API_BASE_URL;
//   const storeUser = useStoreUser()

  const isAuth = ls.get("user-info", { decrypt: true });
  return axios.create({
    baseURL,
    headers: {
      Authorization: isAuth && isAuth.token ? "Bearer " + isAuth.token : ""
    }
  })
}