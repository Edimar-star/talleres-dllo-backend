import readUserbyHobbyAction from "./read.user.byHobby.action";
import readUserExistsAction from "./read.user.exists.action";
import readUserTeamExperienceAction from "./read.user.teamExperience.action";
import readUserByFactionAction from "./read.user.byFaction.action";
import createUserAction from "./create.user.action";
import { users, UserType } from "./user.model";

function readUsersByHobby(hobby: string | undefined): UserType[] {
    if (hobby === undefined) return [];
    const users = readUserbyHobbyAction(hobby);
    return users;
}

function readUserExists(id: number | undefined): boolean {
    if (id === undefined) return false;
    const exists = readUserExistsAction(id);
    return exists;
}

function readUsersTeamExperience(team: string | undefined): number {
    if (team === undefined) return 0;
    const experience = readUserTeamExperienceAction(team);
    return experience;
}

function readUsersByFaction(faction: string | undefined): UserType[] {
    if (faction === undefined) return [];
    const users = readUserByFactionAction(faction);
    return users;
}

function createUser(user: UserType): boolean {
    return users.length < createUserAction(user);
}

export { readUsersByHobby, readUserExists, readUsersTeamExperience, readUsersByFaction, createUser };
