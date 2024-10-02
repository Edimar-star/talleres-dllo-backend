import { users } from "./user.model";

function readUserExists(id: number): boolean {
    const result : boolean = users.some(user => user.id === id);
    return result;
}

export default readUserExists;