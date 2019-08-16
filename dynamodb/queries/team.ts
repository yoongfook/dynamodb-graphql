import uuidv4 from "uuid/v4";
import moment from "moment";
import {
  makeUpdateExpression,
  makeKeyConditionExpression,
  TableName,
  client as DocumentClient
} from "../helpers";
import { userObject } from "./user";
import {
  Input,
  UpdateTeamInput,
  User,
  Team,
  AddUserToTeamInput
} from "../types";

export const fetchTeamById = async (teamId: string) => {
  const params = {
    TableName,
    Key: {
      PK: teamId,
      SK: "team"
    }
  };
  const { Item: object } = await DocumentClient.get(params).promise();
  return object as Team;
};
export const createTeam = async (data: Input) => {
  const uuid = uuidv4();
  const params = {
    TableName,
    Item: {
      PK: uuid,
      SK: "team",
      id: uuid,
      ...data
    }
  };

  await DocumentClient.put(params).promise();
  return fetchTeamById(uuid);
};
export const updateTeam = async (data: UpdateTeamInput) => {
  const { id: teamId, ...input } = data;
  const params = {
    TableName,
    Key: {
      PK: teamId,
      SK: "team"
    },
    ...makeUpdateExpression(input),
    ReturnValues: "ALL_NEW"
  };

  const { Attributes: object } = await DocumentClient.update(params).promise();
  return object as Team;
};
export const deleteTeam = async ({ id: teamId }: { id: string }) => {
  const params = {
    TableName,
    Key: {
      PK: teamId,
      SK: "team"
    }
  };

  const { Attributes: object } = await DocumentClient.delete(params).promise();
  return object as Team;
};
export const fetchTeamUsers = async ({ teamId }: { teamId: string }) => {
  const params = {
    TableName,
    IndexName: "GSI2",
    ...makeKeyConditionExpression({
      GSI2PK: teamId
    })
  };

  const { Items } = await DocumentClient.query(params).promise();
  return Items as User[];
};
export const addUserToTeam = async ({ user, team }: AddUserToTeamInput) => {
  const params = {
    TableName,
    Key: {
      PK: user.id,
      SK: "user"
    },
    ...makeUpdateExpression({
      GSI2PK: team.id,
      GSI2SK: moment().toISOString()
    }),
    ReturnValues: "ALL_NEW"
  };
  const { Attributes } = await DocumentClient.update(params).promise();
  user.teamId = team.id;
  user.team = team;
  return Attributes as User;
};
export const removeUserFromTeam = async ({ userId }: { userId: string }) => {
  const params = {
    TableName,
    Key: {
      PK: userId,
      SK: "user"
    },
    UpdateExpression: "remove GSI2PK, GSI2SK",
    ReturnValues: "ALL_NEW"
  };
  const { Attributes } = await DocumentClient.update(params).promise();
  return userObject(Attributes);
};
