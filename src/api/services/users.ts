import makeRequest from "../index";

const usersUrl = '/users';

export async function getAllUsers(): Promise<any> {
  const result = await makeRequest.get(usersUrl);
  return result.data;
}

export async function getUserById(userId: number): Promise<any> {
  console.log(`Api user by id ${userId}`);
  const result = await makeRequest.get(usersUrl + userId);
  return result.data;
}
