import makeRequest from "../index";

const allUsersUrl = '/users';

export default async function getAllUsers() {
  const result = await makeRequest.get(allUsersUrl);
  return result.data;
}
