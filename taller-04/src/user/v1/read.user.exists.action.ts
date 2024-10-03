import { users } from "./user.model";

function readUserExistsAction(id: number): boolean {
    const result : boolean = users.some(user => user.id === id);
    return result;
}

export default readUserExistsAction;