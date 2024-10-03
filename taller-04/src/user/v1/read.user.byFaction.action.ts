import { users, UserType } from "./user.model";

function readUserByFactionAction(faction: string): UserType[] {
    const result : UserType[] = users.filter(user => user.faction === faction);
    return result;
}

export default readUserByFactionAction;