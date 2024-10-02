import { users, UserType } from "./user.model";

function createUserAction(user: UserType): number {
    if (users.some(u => u.id === user.id)) return 0;
    return users.push(user)
}

export default createUserAction;