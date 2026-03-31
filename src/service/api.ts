import axios from "axios";
const BASE_URL = "https://dummyjson.com";

export async function ApiClient(endpoint: string) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);

    if (response.status !== 200) {
      throw new Error(`Api request failed with status code ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("error fetching data from api", error);
    return null;
  }
}
