import { users, UserType } from "./user.model";

function readUserByFaction(faction: string): UserType[] {
    const result : UserType[] = users.filter(user => user.faction === faction);
    return result;
}

export default readUserByFaction;