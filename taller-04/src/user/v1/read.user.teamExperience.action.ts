import { users } from "./user.model";

function readUserTeamExperience(team: string): number {
    const result : number = users.filter(user => user.team === team).map(user => user.years).reduce((a, b) => a + b);
    return result;
}

export default readUserTeamExperience;