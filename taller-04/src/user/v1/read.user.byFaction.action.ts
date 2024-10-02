import { users, UserType } from "./user.model";

function readUserActionByFaction(faction: string): UserType[] {
    const result : UserType[] = users.filter(user => user.faction === faction);
    return result;
}

export default readUserActionByFaction;