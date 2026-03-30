import { apiClient } from "./api";

export async function getUsers() {
  const data = await apiClient("/users");
  return data.users;
}

export async function getUsersById(id: number) {
  const data = await apiClient(`/users/${id}`);
  return data;
}
