import makeRequest from "../index";

const allUsersUrl = '/users';

export default async function getAllUsers() {
  const result = await makeRequest.get(allUsersUrl);
  const users = result.data;
  console.log(`Api   users: ${users}`);
  return result;
}
