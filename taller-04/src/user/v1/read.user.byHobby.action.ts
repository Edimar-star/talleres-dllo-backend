import { users, UserType } from "./user.model";

function readUserByHobbyAction(hobby: string): UserType[] {
  const results : UserType[] = users.filter(user => user.hobbies.includes(hobby));
  return results;
}

export default readUserByHobbyAction;