import readUserbyHobby from "./read.user.byHobby";
import readUserExists from "./read.user.exists";
import readUserTeamExperience from "./read.user.teamExperience";
import readUserByFaction from "./read.user.byFaction";
import createUserAction from "./create.user.action";
import { users, UserType } from "./user.model";

function usersByHobby(hobby: string | undefined): UserType[] {
    if (hobby === undefined) return [];
    const users = readUserbyHobby(hobby);
    return users;
}

function userExists(id: number | undefined): boolean {
    if (id === undefined) return false;
    const exists = readUserExists(id);
    return exists;
}

function usersTeamExperience(team: string | undefined): number {
    if (team === undefined) return 0;
    const experience = readUserTeamExperience(team);
    return experience;
}

function usersByFaction(faction: string | undefined): UserType[] {
    if (faction === undefined) return [];
    const users = readUserByFaction(faction);
    return users;
}

function createUser(user: UserType): boolean {
    return users.length < createUserAction(user);
}

export { usersByHobby, userExists, usersTeamExperience, usersByFaction, createUser };
