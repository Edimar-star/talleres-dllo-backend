import { Router, Request, Response } from "express";
import { usersByHobby, userExists, usersTeamExperience, usersByFaction, createUser } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
function GetUsersByHobby(request: Request, response: Response) {
    const hobby = request.query.hobby
    const users = usersByHobby(hobby?.toString())

    if (!users.length) {
        return response.status(404).json({ message: `No users were found with the hobby hobby ${hobby}` });
    }
    
    response.status(200).json({ message: "Success.", users: users });
}

function GetUserExists(request: Request, response: Response) {
    const id = Number(request.query.id)

    if (isNaN(id)) {
        return response.status(400).json({ message: 'The ID must be a valid number' });
    }

    const exists = userExists(id)
    if (!exists) {
        return response.status(404).json({ message: `User with id ${id} does not exist` });
    }

    response.status(200).json({ message: `User with id ${id} exists` });
}

function GetUsersTeamExperience(request: Request, response: Response) {
    const team = request.query.team
    const experience = usersTeamExperience(team?.toString())

    if (!experience) {
        return response.status(404).json({ message: `No users were found with the hobby team ${team}` });
    }
    
    response.status(200).json({ message: "Success.", experience: experience });
}

function GetUsersByFaction(request: Request, response: Response) {
    const faction = request.query.faction
    const users = usersByFaction(faction?.toString())

    if (!users.length) {
        return response.status(404).json({ message: `No users were found with the hobby faction ${faction}` });
    }
    
    response.status(200).json({ message: "Success.", users: users });
}

function createNewUser(request: Request, response: Response) {
    const user = request.body.user
    if (user === undefined || Object.keys(user).length === 0 || isNaN(Number(user?.id))) {
        return response.status(400).json({ message: 'Invalid data' });
    }

    const isUserCreated = createUser(user)

    if (!isUserCreated) {
        return response.status(409).json({ message: 'User already exists.' });
    }

    response.status(201).json({ message: 'Success.' });
}

// DECLARE ENDPOINTS
userRoutes.get("/hobby", GetUsersByHobby);
userRoutes.get("/exists", GetUserExists);
userRoutes.get("/team-experience", GetUsersTeamExperience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("", createNewUser);

// EXPORT ROUTES
export default userRoutes;