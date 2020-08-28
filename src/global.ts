import { erro } from './config/msgs';

export const userKey = '606966ce-1838-42d7-99ec-30c6a0852f5a' || null;
export const baseApiUrl = 'https://navedex-api.herokuapp.com/v1' || null;

export function showError(e: { response: { data: any } }) {
  if (e && e.response && e.response.data) {
    erro(e.response.data.message);
    console.log(e.response.data.message);
  } else if (typeof e === 'string') {
    erro(e);
  } else {
    erro();
  }
  return;
}

export default { baseApiUrl, userKey, showError };
