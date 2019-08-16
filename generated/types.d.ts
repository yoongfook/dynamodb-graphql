/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as t from "../dynamodb/types"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddTeamUserInput: { // input type
    email: string; // String!
    name: string; // String!
  }
  DeleteUserInput: { // input type
    id: string; // String!
  }
  LoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
  ResponsesFilterInput: { // input type
    from: string; // String!
    to: string; // String!
  }
  SignupInput: { // input type
    email: string; // String!
    name: string; // String!
    password: string; // String!
    teamName: string; // String!
  }
  UpdateResponseInput: { // input type
    feeling?: string | null; // String
    id: string; // String!
  }
  UpdateTeamInput: { // input type
    cultureValueIds?: string[] | null; // [String!]
    emoji?: string | null; // String
    id: string; // String!
    moods?: boolean | null; // Boolean
    name?: string | null; // String
    recognition?: boolean | null; // Boolean
  }
  UpdateTeamUserInput: { // input type
    id: string; // String!
    tz: string; // String!
  }
  UpdateUserInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    jwt: string; // String!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  CultureValue: t.CultureValue;
  DeletePayload: { // root type
    id: string; // ID!
  }
  Mutation: {};
  Query: {};
  Response: t.Response;
  Team: t.Team;
  UpdateResponsePayload: { // root type
    jwt: string; // String!
    response: NexusGenRootTypes['Response']; // Response!
  }
  User: t.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: DateTime;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AddTeamUserInput: NexusGenInputs['AddTeamUserInput'];
  DeleteUserInput: NexusGenInputs['DeleteUserInput'];
  LoginInput: NexusGenInputs['LoginInput'];
  ResponsesFilterInput: NexusGenInputs['ResponsesFilterInput'];
  SignupInput: NexusGenInputs['SignupInput'];
  UpdateResponseInput: NexusGenInputs['UpdateResponseInput'];
  UpdateTeamInput: NexusGenInputs['UpdateTeamInput'];
  UpdateTeamUserInput: NexusGenInputs['UpdateTeamUserInput'];
  UpdateUserInput: NexusGenInputs['UpdateUserInput'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    jwt: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
  }
  CultureValue: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  DeletePayload: { // field return type
    id: string; // ID!
  }
  Mutation: { // field return type
    addTeamUser: NexusGenRootTypes['Team'] | null; // Team
    deleteUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    removeTeamUser: NexusGenRootTypes['Team'] | null; // Team
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateResponse: NexusGenRootTypes['UpdateResponsePayload'] | null; // UpdateResponsePayload
    updateTeam: NexusGenRootTypes['Team']; // Team!
    updateTeamUser: NexusGenRootTypes['User'] | null; // User
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    cultureValues: NexusGenRootTypes['CultureValue'][]; // [CultureValue!]!
    me: NexusGenRootTypes['User']; // User!
    responses: NexusGenRootTypes['Response'][]; // [Response!]!
    team: NexusGenRootTypes['Team'] | null; // Team
  }
  Response: { // field return type
    feeling: string | null; // String
    id: string | null; // String
    sentAt: string | null; // String
    submittedAt: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
    userId: string; // String!
  }
  Team: { // field return type
    cultureValues: NexusGenRootTypes['CultureValue'][] | null; // [CultureValue!]
    emoji: string; // String!
    id: string; // ID!
    moods: boolean; // Boolean!
    name: string; // String!
    recognition: boolean; // Boolean!
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  UpdateResponsePayload: { // field return type
    jwt: string; // String!
    response: NexusGenRootTypes['Response']; // Response!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    team: NexusGenRootTypes['Team'] | null; // Team
    teamId: string; // String!
    tz: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addTeamUser: { // args
      input: NexusGenInputs['AddTeamUserInput']; // AddTeamUserInput!
    }
    deleteUser: { // args
      input: NexusGenInputs['DeleteUserInput']; // DeleteUserInput!
    }
    login: { // args
      input: NexusGenInputs['LoginInput']; // LoginInput!
    }
    removeTeamUser: { // args
      id: string; // String!
    }
    signup: { // args
      input: NexusGenInputs['SignupInput']; // SignupInput!
    }
    updateResponse: { // args
      input: NexusGenInputs['UpdateResponseInput']; // UpdateResponseInput!
    }
    updateTeam: { // args
      input: NexusGenInputs['UpdateTeamInput']; // UpdateTeamInput!
    }
    updateTeamUser: { // args
      input: NexusGenInputs['UpdateTeamUserInput']; // UpdateTeamUserInput!
    }
    updateUser: { // args
      input: NexusGenInputs['UpdateUserInput']; // UpdateUserInput!
    }
  }
  Query: {
    responses: { // args
      input: NexusGenInputs['ResponsesFilterInput']; // ResponsesFilterInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "CultureValue" | "DeletePayload" | "Mutation" | "Query" | "Response" | "Team" | "UpdateResponsePayload" | "User";

export type NexusGenInputNames = "AddTeamUserInput" | "DeleteUserInput" | "LoginInput" | "ResponsesFilterInput" | "SignupInput" | "UpdateResponseInput" | "UpdateTeamInput" | "UpdateTeamUserInput" | "UpdateUserInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: t.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}