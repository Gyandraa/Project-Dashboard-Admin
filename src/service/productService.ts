import { ApiClient } from "./api";

export async function getProducts() {
  try {
    const data = await ApiClient("/products");
    return data.products;
  } catch (error) {
    console.log("error fetching products", error);
    return null;
  }
}
