import { ApiClient } from "./api";

export async function getUsers() {
  try {
    const data = await ApiClient("/users");
    return data.users;
  } catch (error) {
    console.error("error fetching users", error);
    return null;
  }
}
