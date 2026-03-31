import { ApiClient } from "./api";

export async function getCarts() {
  try {
    const data = await ApiClient("/carts");
    return data.carts;
  } catch (error) {
    console.error("error fetching carts", error);
    return null;
  }
}
