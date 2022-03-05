import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  __typename?: 'Animal';
  agencyEmail: Scalars['String'];
  breed: Scalars['String'];
  cost: Scalars['Float'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  goodToKnow: Scalars['String'];
  id: Scalars['String'];
  imageURL: Scalars['String'];
  name: Scalars['String'];
  orgId: Scalars['String'];
  size: Scalars['String'];
  totalLikes: Scalars['Float'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
  vaccines: Scalars['String'];
};

export type AnimalFieldError = {
  __typename?: 'AnimalFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AnimalResponse = {
  __typename?: 'AnimalResponse';
  animal?: Maybe<Animal>;
  errors?: Maybe<Array<AnimalFieldError>>;
};

export type Application = {
  __typename?: 'Application';
  animalId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type ApplicationFieldError = {
  __typename?: 'ApplicationFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ApplicationResponse = {
  __typename?: 'ApplicationResponse';
  application?: Maybe<Application>;
  errors?: Maybe<Array<ApplicationFieldError>>;
};

export type CreateAnimalInput = {
  agencyEmail: Scalars['String'];
  breed: Scalars['String'];
  cost: Scalars['Float'];
  description: Scalars['String'];
  goodToKnow: Scalars['String'];
  imageURL: Scalars['String'];
  name: Scalars['String'];
  orgId: Scalars['String'];
  size: Scalars['String'];
  type: Scalars['String'];
  vaccines: Scalars['String'];
};

export type CreateApplicationInput = {
  animalId: Scalars['String'];
  status: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Match = {
  __typename?: 'Match';
  animalId: Scalars['String'];
  createdAt: Scalars['String'];
  matchId: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type MatchFieldError = {
  __typename?: 'MatchFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type MatchResponse = {
  __typename?: 'MatchResponse';
  errors?: Maybe<Array<MatchFieldError>>;
  match?: Maybe<Match>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeOrgPassword: OrgResponse;
  changeUserPassword: UserResponse;
  createAnimal: AnimalResponse;
  createApplication: ApplicationResponse;
  createMatch: MatchResponse;
  forgotOrgPassword: Scalars['Boolean'];
  forgotUserPassword: Scalars['Boolean'];
  loginOrg: OrgResponse;
  loginUser: UserResponse;
  logout: Scalars['Boolean'];
  registerOrg: OrgResponse;
  registerUser: UserResponse;
  updateOrgInfo: OrgResponse;
  updateUserInfo: UserResponse;
};


export type MutationChangeOrgPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationChangeUserPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateAnimalArgs = {
  options: CreateAnimalInput;
};


export type MutationCreateApplicationArgs = {
  options: CreateApplicationInput;
};


export type MutationCreateMatchArgs = {
  animalId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationForgotOrgPasswordArgs = {
  email: Scalars['String'];
};


export type MutationForgotUserPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginOrgArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterOrgArgs = {
  options: OrgUsernamePasswordInput;
};


export type MutationRegisterUserArgs = {
  options: UsernamePasswordInput;
};


export type MutationUpdateOrgInfoArgs = {
  options: Scalars['String'];
};


export type MutationUpdateUserInfoArgs = {
  options: Scalars['String'];
};

export type Org = {
  __typename?: 'Org';
  address: Scalars['String'];
  attributes: Scalars['String'];
  avatarUrl: Scalars['String'];
  contactFirstname: Scalars['String'];
  contactLastname: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  orgName: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type OrgFieldError = {
  __typename?: 'OrgFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type OrgResponse = {
  __typename?: 'OrgResponse';
  errors?: Maybe<Array<OrgFieldError>>;
  org?: Maybe<Org>;
};

export type OrgUsernamePasswordInput = {
  address: Scalars['String'];
  contactFirstname: Scalars['String'];
  contactLastname: Scalars['String'];
  email: Scalars['String'];
  orgName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  verifypassword: Scalars['String'];
};

export type PaginatedAnimals = {
  __typename?: 'PaginatedAnimals';
  animals: Array<Animal>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedApplication = {
  __typename?: 'PaginatedApplication';
  applications: Array<Application>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedMatch = {
  __typename?: 'PaginatedMatch';
  hasMore: Scalars['Boolean'];
  matches: Array<Match>;
};

export type Query = {
  __typename?: 'Query';
  adopterByID: User;
  animalByID: Animal;
  animals: PaginatedAnimals;
  animalsPerShelter: PaginatedAnimals;
  applicationPerShelter: PaginatedApplication;
  applications: PaginatedApplication;
  hello: Scalars['String'];
  helloAnimal: Scalars['String'];
  helloApplication: Scalars['String'];
  helloMatch: Scalars['String'];
  matches: PaginatedMatch;
  meOrg?: Maybe<Org>;
  meUser?: Maybe<User>;
  orgByID: Org;
};


export type QueryAdopterByIdArgs = {
  id: Scalars['String'];
};


export type QueryAnimalByIdArgs = {
  id: Scalars['String'];
};


export type QueryAnimalsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryAnimalsPerShelterArgs = {
  orgId: Scalars['String'];
};


export type QueryApplicationPerShelterArgs = {
  animalIds: Array<Scalars['String']>;
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryApplicationsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  userId: Scalars['String'];
};


export type QueryMatchesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  userId: Scalars['String'];
};


export type QueryOrgByIdArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  attributes: Scalars['String'];
  avatarUrl: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  zip: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
  verifypassword: Scalars['String'];
  zip: Scalars['String'];
};

export type AnimalErrorFragment = { __typename?: 'AnimalFieldError', field: string, message: string };

export type RegularAnimalFragment = { __typename?: 'Animal', id: string, orgId: string, type: string, name: string, description: string, imageURL: string, breed: string, cost: number, totalLikes: number, createdAt: string, updatedAt: string, size: string, vaccines: string, goodToKnow: string, agencyEmail: string };

export type RegularAnimalResponseFragment = { __typename?: 'AnimalResponse', errors?: Array<{ __typename?: 'AnimalFieldError', field: string, message: string }> | null | undefined, animal?: { __typename?: 'Animal', id: string, orgId: string, type: string, name: string, description: string, imageURL: string, breed: string, cost: number, totalLikes: number, createdAt: string, updatedAt: string, size: string, vaccines: string, goodToKnow: string, agencyEmail: string } | null | undefined };

export type RegularApplicationFragment = { __typename?: 'Application', id: string, animalId: string, userId: string, status: string, createdAt: string, updatedAt: string };

export type RegularApplicationErrorFragment = { __typename?: 'ApplicationFieldError', field: string, message: string };

export type RegularApplicationResponseFragment = { __typename?: 'ApplicationResponse', errors?: Array<{ __typename?: 'ApplicationFieldError', field: string, message: string }> | null | undefined, application?: { __typename?: 'Application', id: string, animalId: string, userId: string, status: string, createdAt: string, updatedAt: string } | null | undefined };

export type RegularMatchFragment = { __typename?: 'Match', matchId: string, animalId: string, userId: string };

export type RegularMatchErrorFragment = { __typename?: 'MatchFieldError', field: string, message: string };

export type RegularMatchResponseFragment = { __typename?: 'MatchResponse', errors?: Array<{ __typename?: 'MatchFieldError', field: string, message: string }> | null | undefined, match?: { __typename?: 'Match', matchId: string, animalId: string, userId: string } | null | undefined };

export type RegularOrgFragment = { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string };

export type RegularOrgErrorFragment = { __typename?: 'OrgFieldError', field: string, message: string };

export type RegularOrgResponseFragment = { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } | null | undefined };

export type RegularUserFragment = { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string };

export type RegularUserErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } | null | undefined };

export type ChangeOrgPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeOrgPasswordMutation = { __typename?: 'Mutation', changeOrgPassword: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } | null | undefined } };

export type ChangeUserPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeUserPasswordMutation = { __typename?: 'Mutation', changeUserPassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } | null | undefined } };

export type CreateAnimalMutationVariables = Exact<{
  options: CreateAnimalInput;
}>;


export type CreateAnimalMutation = { __typename?: 'Mutation', createAnimal: { __typename?: 'AnimalResponse', errors?: Array<{ __typename?: 'AnimalFieldError', field: string, message: string }> | null | undefined, animal?: { __typename?: 'Animal', id: string, orgId: string, type: string, name: string, description: string, imageURL: string, breed: string, cost: number, totalLikes: number, createdAt: string, updatedAt: string, size: string, vaccines: string, goodToKnow: string, agencyEmail: string } | null | undefined } };

export type CreateApplicationMutationVariables = Exact<{
  options: CreateApplicationInput;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', createApplication: { __typename?: 'ApplicationResponse', errors?: Array<{ __typename?: 'ApplicationFieldError', field: string, message: string }> | null | undefined, application?: { __typename?: 'Application', id: string, animalId: string, userId: string, status: string, createdAt: string, updatedAt: string } | null | undefined } };

export type CreateMatchMutationVariables = Exact<{
  userId: Scalars['String'];
  animalId: Scalars['String'];
}>;


export type CreateMatchMutation = { __typename?: 'Mutation', createMatch: { __typename?: 'MatchResponse', errors?: Array<{ __typename?: 'MatchFieldError', field: string, message: string }> | null | undefined, match?: { __typename?: 'Match', matchId: string, animalId: string, userId: string } | null | undefined } };

export type ForgotOrgPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotOrgPasswordMutation = { __typename?: 'Mutation', forgotOrgPassword: boolean };

export type ForgotUserPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotUserPasswordMutation = { __typename?: 'Mutation', forgotUserPassword: boolean };

export type LoginOrgMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginOrgMutation = { __typename?: 'Mutation', loginOrg: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } | null | undefined } };

export type LoginUserMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } | null | undefined } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterOrgMutationVariables = Exact<{
  options: OrgUsernamePasswordInput;
}>;


export type RegisterOrgMutation = { __typename?: 'Mutation', registerOrg: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } | null | undefined } };

export type RegisterUserMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } | null | undefined } };

export type UpdateOrgInfoMutationVariables = Exact<{
  options: Scalars['String'];
}>;


export type UpdateOrgInfoMutation = { __typename?: 'Mutation', updateOrgInfo: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } | null | undefined } };

export type UpdateUserInfoMutationVariables = Exact<{
  options: Scalars['String'];
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } | null | undefined } };

export type AdopterByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AdopterByIdQuery = { __typename?: 'Query', adopterByID: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } };

export type AnimalByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AnimalByIdQuery = { __typename?: 'Query', animalByID: { __typename?: 'Animal', id: string, orgId: string, type: string, name: string, description: string, imageURL: string, breed: string, cost: number, totalLikes: number, createdAt: string, updatedAt: string, size: string, vaccines: string, goodToKnow: string, agencyEmail: string } };

export type AnimalsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type AnimalsQuery = { __typename?: 'Query', animals: { __typename?: 'PaginatedAnimals', hasMore: boolean, animals: Array<{ __typename?: 'Animal', id: string, orgId: string, type: string, name: string, description: string, imageURL: string, breed: string, cost: number, totalLikes: number, createdAt: string, updatedAt: string, size: string, vaccines: string, goodToKnow: string, agencyEmail: string }> } };

export type AnimalsPerShelterQueryVariables = Exact<{
  orgId: Scalars['String'];
}>;


export type AnimalsPerShelterQuery = { __typename?: 'Query', animalsPerShelter: { __typename?: 'PaginatedAnimals', hasMore: boolean, animals: Array<{ __typename?: 'Animal', id: string, orgId: string, type: string, name: string, description: string, imageURL: string, breed: string, cost: number, totalLikes: number, createdAt: string, updatedAt: string, size: string, vaccines: string, goodToKnow: string, agencyEmail: string }> } };

export type ApplicationPerShelterQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
  animalIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type ApplicationPerShelterQuery = { __typename?: 'Query', applicationPerShelter: { __typename?: 'PaginatedApplication', hasMore: boolean, applications: Array<{ __typename?: 'Application', id: string, animalId: string, userId: string, status: string, createdAt: string, updatedAt: string }> } };

export type ApplicationsQueryVariables = Exact<{
  userId: Scalars['String'];
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type ApplicationsQuery = { __typename?: 'Query', applications: { __typename?: 'PaginatedApplication', hasMore: boolean, applications: Array<{ __typename?: 'Application', id: string, animalId: string, userId: string, status: string, createdAt: string, updatedAt: string }> } };

export type MatchesQueryVariables = Exact<{
  userId: Scalars['String'];
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type MatchesQuery = { __typename?: 'Query', matches: { __typename?: 'PaginatedMatch', hasMore: boolean, matches: Array<{ __typename?: 'Match', matchId: string, animalId: string, userId: string }> } };

export type MeOrgQueryVariables = Exact<{ [key: string]: never; }>;


export type MeOrgQuery = { __typename?: 'Query', meOrg?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } | null | undefined };

export type MeUserQueryVariables = Exact<{ [key: string]: never; }>;


export type MeUserQuery = { __typename?: 'Query', meUser?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, phone: string, zip: string, attributes: string } | null | undefined };

export type OrgByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OrgByIdQuery = { __typename?: 'Query', orgByID: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, attributes: string } };

export const AnimalErrorFragmentDoc = gql`
    fragment AnimalError on AnimalFieldError {
  field
  message
}
    `;
export const RegularAnimalFragmentDoc = gql`
    fragment RegularAnimal on Animal {
  id
  orgId
  type
  name
  description
  imageURL
  breed
  cost
  totalLikes
  createdAt
  updatedAt
  size
  vaccines
  goodToKnow
  agencyEmail
}
    `;
export const RegularAnimalResponseFragmentDoc = gql`
    fragment RegularAnimalResponse on AnimalResponse {
  errors {
    ...AnimalError
  }
  animal {
    ...RegularAnimal
  }
}
    ${AnimalErrorFragmentDoc}
${RegularAnimalFragmentDoc}`;
export const RegularApplicationErrorFragmentDoc = gql`
    fragment RegularApplicationError on ApplicationFieldError {
  field
  message
}
    `;
export const RegularApplicationFragmentDoc = gql`
    fragment RegularApplication on Application {
  id
  animalId
  userId
  status
  createdAt
  updatedAt
}
    `;
export const RegularApplicationResponseFragmentDoc = gql`
    fragment RegularApplicationResponse on ApplicationResponse {
  errors {
    ...RegularApplicationError
  }
  application {
    ...RegularApplication
  }
}
    ${RegularApplicationErrorFragmentDoc}
${RegularApplicationFragmentDoc}`;
export const RegularMatchErrorFragmentDoc = gql`
    fragment RegularMatchError on MatchFieldError {
  field
  message
}
    `;
export const RegularMatchFragmentDoc = gql`
    fragment RegularMatch on Match {
  matchId
  animalId
  userId
}
    `;
export const RegularMatchResponseFragmentDoc = gql`
    fragment RegularMatchResponse on MatchResponse {
  errors {
    ...RegularMatchError
  }
  match {
    ...RegularMatch
  }
}
    ${RegularMatchErrorFragmentDoc}
${RegularMatchFragmentDoc}`;
export const RegularOrgErrorFragmentDoc = gql`
    fragment RegularOrgError on OrgFieldError {
  field
  message
}
    `;
export const RegularOrgFragmentDoc = gql`
    fragment RegularOrg on Org {
  id
  username
  contactFirstname
  contactLastname
  orgName
  address
  avatarUrl
  email
  attributes
}
    `;
export const RegularOrgResponseFragmentDoc = gql`
    fragment RegularOrgResponse on OrgResponse {
  errors {
    ...RegularOrgError
  }
  org {
    ...RegularOrg
  }
}
    ${RegularOrgErrorFragmentDoc}
${RegularOrgFragmentDoc}`;
export const RegularUserErrorFragmentDoc = gql`
    fragment RegularUserError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  firstname
  lastname
  avatarUrl
  email
  phone
  zip
  attributes
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularUserError
  }
  user {
    ...RegularUser
  }
}
    ${RegularUserErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangeOrgPasswordDocument = gql`
    mutation ChangeOrgPassword($token: String!, $newPassword: String!) {
  changeOrgPassword(token: $token, newPassword: $newPassword) {
    ...RegularOrgResponse
  }
}
    ${RegularOrgResponseFragmentDoc}`;
export type ChangeOrgPasswordMutationFn = Apollo.MutationFunction<ChangeOrgPasswordMutation, ChangeOrgPasswordMutationVariables>;

/**
 * __useChangeOrgPasswordMutation__
 *
 * To run a mutation, you first call `useChangeOrgPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeOrgPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeOrgPasswordMutation, { data, loading, error }] = useChangeOrgPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeOrgPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeOrgPasswordMutation, ChangeOrgPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeOrgPasswordMutation, ChangeOrgPasswordMutationVariables>(ChangeOrgPasswordDocument, options);
      }
export type ChangeOrgPasswordMutationHookResult = ReturnType<typeof useChangeOrgPasswordMutation>;
export type ChangeOrgPasswordMutationResult = Apollo.MutationResult<ChangeOrgPasswordMutation>;
export type ChangeOrgPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeOrgPasswordMutation, ChangeOrgPasswordMutationVariables>;
export const ChangeUserPasswordDocument = gql`
    mutation ChangeUserPassword($token: String!, $newPassword: String!) {
  changeUserPassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangeUserPasswordMutationFn = Apollo.MutationFunction<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;

/**
 * __useChangeUserPasswordMutation__
 *
 * To run a mutation, you first call `useChangeUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserPasswordMutation, { data, loading, error }] = useChangeUserPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>(ChangeUserPasswordDocument, options);
      }
export type ChangeUserPasswordMutationHookResult = ReturnType<typeof useChangeUserPasswordMutation>;
export type ChangeUserPasswordMutationResult = Apollo.MutationResult<ChangeUserPasswordMutation>;
export type ChangeUserPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;
export const CreateAnimalDocument = gql`
    mutation CreateAnimal($options: CreateAnimalInput!) {
  createAnimal(options: $options) {
    ...RegularAnimalResponse
  }
}
    ${RegularAnimalResponseFragmentDoc}`;
export type CreateAnimalMutationFn = Apollo.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>;

/**
 * __useCreateAnimalMutation__
 *
 * To run a mutation, you first call `useCreateAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnimalMutation, { data, loading, error }] = useCreateAnimalMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateAnimalMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnimalMutation, CreateAnimalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnimalMutation, CreateAnimalMutationVariables>(CreateAnimalDocument, options);
      }
export type CreateAnimalMutationHookResult = ReturnType<typeof useCreateAnimalMutation>;
export type CreateAnimalMutationResult = Apollo.MutationResult<CreateAnimalMutation>;
export type CreateAnimalMutationOptions = Apollo.BaseMutationOptions<CreateAnimalMutation, CreateAnimalMutationVariables>;
export const CreateApplicationDocument = gql`
    mutation CreateApplication($options: CreateApplicationInput!) {
  createApplication(options: $options) {
    ...RegularApplicationResponse
  }
}
    ${RegularApplicationResponseFragmentDoc}`;
export type CreateApplicationMutationFn = Apollo.MutationFunction<CreateApplicationMutation, CreateApplicationMutationVariables>;

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateApplicationMutation(baseOptions?: Apollo.MutationHookOptions<CreateApplicationMutation, CreateApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateApplicationMutation, CreateApplicationMutationVariables>(CreateApplicationDocument, options);
      }
export type CreateApplicationMutationHookResult = ReturnType<typeof useCreateApplicationMutation>;
export type CreateApplicationMutationResult = Apollo.MutationResult<CreateApplicationMutation>;
export type CreateApplicationMutationOptions = Apollo.BaseMutationOptions<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const CreateMatchDocument = gql`
    mutation CreateMatch($userId: String!, $animalId: String!) {
  createMatch(userId: $userId, animalId: $animalId) {
    ...RegularMatchResponse
  }
}
    ${RegularMatchResponseFragmentDoc}`;
export type CreateMatchMutationFn = Apollo.MutationFunction<CreateMatchMutation, CreateMatchMutationVariables>;

/**
 * __useCreateMatchMutation__
 *
 * To run a mutation, you first call `useCreateMatchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatchMutation, { data, loading, error }] = useCreateMatchMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      animalId: // value for 'animalId'
 *   },
 * });
 */
export function useCreateMatchMutation(baseOptions?: Apollo.MutationHookOptions<CreateMatchMutation, CreateMatchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMatchMutation, CreateMatchMutationVariables>(CreateMatchDocument, options);
      }
export type CreateMatchMutationHookResult = ReturnType<typeof useCreateMatchMutation>;
export type CreateMatchMutationResult = Apollo.MutationResult<CreateMatchMutation>;
export type CreateMatchMutationOptions = Apollo.BaseMutationOptions<CreateMatchMutation, CreateMatchMutationVariables>;
export const ForgotOrgPasswordDocument = gql`
    mutation ForgotOrgPassword($email: String!) {
  forgotOrgPassword(email: $email)
}
    `;
export type ForgotOrgPasswordMutationFn = Apollo.MutationFunction<ForgotOrgPasswordMutation, ForgotOrgPasswordMutationVariables>;

/**
 * __useForgotOrgPasswordMutation__
 *
 * To run a mutation, you first call `useForgotOrgPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotOrgPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotOrgPasswordMutation, { data, loading, error }] = useForgotOrgPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotOrgPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotOrgPasswordMutation, ForgotOrgPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotOrgPasswordMutation, ForgotOrgPasswordMutationVariables>(ForgotOrgPasswordDocument, options);
      }
export type ForgotOrgPasswordMutationHookResult = ReturnType<typeof useForgotOrgPasswordMutation>;
export type ForgotOrgPasswordMutationResult = Apollo.MutationResult<ForgotOrgPasswordMutation>;
export type ForgotOrgPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotOrgPasswordMutation, ForgotOrgPasswordMutationVariables>;
export const ForgotUserPasswordDocument = gql`
    mutation ForgotUserPassword($email: String!) {
  forgotUserPassword(email: $email)
}
    `;
export type ForgotUserPasswordMutationFn = Apollo.MutationFunction<ForgotUserPasswordMutation, ForgotUserPasswordMutationVariables>;

/**
 * __useForgotUserPasswordMutation__
 *
 * To run a mutation, you first call `useForgotUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotUserPasswordMutation, { data, loading, error }] = useForgotUserPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotUserPasswordMutation, ForgotUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotUserPasswordMutation, ForgotUserPasswordMutationVariables>(ForgotUserPasswordDocument, options);
      }
export type ForgotUserPasswordMutationHookResult = ReturnType<typeof useForgotUserPasswordMutation>;
export type ForgotUserPasswordMutationResult = Apollo.MutationResult<ForgotUserPasswordMutation>;
export type ForgotUserPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotUserPasswordMutation, ForgotUserPasswordMutationVariables>;
export const LoginOrgDocument = gql`
    mutation LoginOrg($usernameOrEmail: String!, $password: String!) {
  loginOrg(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularOrgResponse
  }
}
    ${RegularOrgResponseFragmentDoc}`;
export type LoginOrgMutationFn = Apollo.MutationFunction<LoginOrgMutation, LoginOrgMutationVariables>;

/**
 * __useLoginOrgMutation__
 *
 * To run a mutation, you first call `useLoginOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginOrgMutation, { data, loading, error }] = useLoginOrgMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginOrgMutation(baseOptions?: Apollo.MutationHookOptions<LoginOrgMutation, LoginOrgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginOrgMutation, LoginOrgMutationVariables>(LoginOrgDocument, options);
      }
export type LoginOrgMutationHookResult = ReturnType<typeof useLoginOrgMutation>;
export type LoginOrgMutationResult = Apollo.MutationResult<LoginOrgMutation>;
export type LoginOrgMutationOptions = Apollo.BaseMutationOptions<LoginOrgMutation, LoginOrgMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($usernameOrEmail: String!, $password: String!) {
  loginUser(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterOrgDocument = gql`
    mutation RegisterOrg($options: OrgUsernamePasswordInput!) {
  registerOrg(options: $options) {
    ...RegularOrgResponse
  }
}
    ${RegularOrgResponseFragmentDoc}`;
export type RegisterOrgMutationFn = Apollo.MutationFunction<RegisterOrgMutation, RegisterOrgMutationVariables>;

/**
 * __useRegisterOrgMutation__
 *
 * To run a mutation, you first call `useRegisterOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerOrgMutation, { data, loading, error }] = useRegisterOrgMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterOrgMutation(baseOptions?: Apollo.MutationHookOptions<RegisterOrgMutation, RegisterOrgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterOrgMutation, RegisterOrgMutationVariables>(RegisterOrgDocument, options);
      }
export type RegisterOrgMutationHookResult = ReturnType<typeof useRegisterOrgMutation>;
export type RegisterOrgMutationResult = Apollo.MutationResult<RegisterOrgMutation>;
export type RegisterOrgMutationOptions = Apollo.BaseMutationOptions<RegisterOrgMutation, RegisterOrgMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($options: UsernamePasswordInput!) {
  registerUser(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateOrgInfoDocument = gql`
    mutation UpdateOrgInfo($options: String!) {
  updateOrgInfo(options: $options) {
    ...RegularOrgResponse
  }
}
    ${RegularOrgResponseFragmentDoc}`;
export type UpdateOrgInfoMutationFn = Apollo.MutationFunction<UpdateOrgInfoMutation, UpdateOrgInfoMutationVariables>;

/**
 * __useUpdateOrgInfoMutation__
 *
 * To run a mutation, you first call `useUpdateOrgInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrgInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrgInfoMutation, { data, loading, error }] = useUpdateOrgInfoMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUpdateOrgInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrgInfoMutation, UpdateOrgInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrgInfoMutation, UpdateOrgInfoMutationVariables>(UpdateOrgInfoDocument, options);
      }
export type UpdateOrgInfoMutationHookResult = ReturnType<typeof useUpdateOrgInfoMutation>;
export type UpdateOrgInfoMutationResult = Apollo.MutationResult<UpdateOrgInfoMutation>;
export type UpdateOrgInfoMutationOptions = Apollo.BaseMutationOptions<UpdateOrgInfoMutation, UpdateOrgInfoMutationVariables>;
export const UpdateUserInfoDocument = gql`
    mutation UpdateUserInfo($options: String!) {
  updateUserInfo(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type UpdateUserInfoMutationFn = Apollo.MutationFunction<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;

/**
 * __useUpdateUserInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInfoMutation, { data, loading, error }] = useUpdateUserInfoMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUpdateUserInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>(UpdateUserInfoDocument, options);
      }
export type UpdateUserInfoMutationHookResult = ReturnType<typeof useUpdateUserInfoMutation>;
export type UpdateUserInfoMutationResult = Apollo.MutationResult<UpdateUserInfoMutation>;
export type UpdateUserInfoMutationOptions = Apollo.BaseMutationOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;
export const AdopterByIdDocument = gql`
    query AdopterByID($id: String!) {
  adopterByID(id: $id) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useAdopterByIdQuery__
 *
 * To run a query within a React component, call `useAdopterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdopterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdopterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdopterByIdQuery(baseOptions: Apollo.QueryHookOptions<AdopterByIdQuery, AdopterByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdopterByIdQuery, AdopterByIdQueryVariables>(AdopterByIdDocument, options);
      }
export function useAdopterByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdopterByIdQuery, AdopterByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdopterByIdQuery, AdopterByIdQueryVariables>(AdopterByIdDocument, options);
        }
export type AdopterByIdQueryHookResult = ReturnType<typeof useAdopterByIdQuery>;
export type AdopterByIdLazyQueryHookResult = ReturnType<typeof useAdopterByIdLazyQuery>;
export type AdopterByIdQueryResult = Apollo.QueryResult<AdopterByIdQuery, AdopterByIdQueryVariables>;
export const AnimalByIdDocument = gql`
    query AnimalByID($id: String!) {
  animalByID(id: $id) {
    ...RegularAnimal
  }
}
    ${RegularAnimalFragmentDoc}`;

/**
 * __useAnimalByIdQuery__
 *
 * To run a query within a React component, call `useAnimalByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimalByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimalByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAnimalByIdQuery(baseOptions: Apollo.QueryHookOptions<AnimalByIdQuery, AnimalByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimalByIdQuery, AnimalByIdQueryVariables>(AnimalByIdDocument, options);
      }
export function useAnimalByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimalByIdQuery, AnimalByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimalByIdQuery, AnimalByIdQueryVariables>(AnimalByIdDocument, options);
        }
export type AnimalByIdQueryHookResult = ReturnType<typeof useAnimalByIdQuery>;
export type AnimalByIdLazyQueryHookResult = ReturnType<typeof useAnimalByIdLazyQuery>;
export type AnimalByIdQueryResult = Apollo.QueryResult<AnimalByIdQuery, AnimalByIdQueryVariables>;
export const AnimalsDocument = gql`
    query Animals($limit: Int!, $cursor: String) {
  animals(limit: $limit, cursor: $cursor) {
    hasMore
    animals {
      ...RegularAnimal
    }
  }
}
    ${RegularAnimalFragmentDoc}`;

/**
 * __useAnimalsQuery__
 *
 * To run a query within a React component, call `useAnimalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimalsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useAnimalsQuery(baseOptions: Apollo.QueryHookOptions<AnimalsQuery, AnimalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimalsQuery, AnimalsQueryVariables>(AnimalsDocument, options);
      }
export function useAnimalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimalsQuery, AnimalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimalsQuery, AnimalsQueryVariables>(AnimalsDocument, options);
        }
export type AnimalsQueryHookResult = ReturnType<typeof useAnimalsQuery>;
export type AnimalsLazyQueryHookResult = ReturnType<typeof useAnimalsLazyQuery>;
export type AnimalsQueryResult = Apollo.QueryResult<AnimalsQuery, AnimalsQueryVariables>;
export const AnimalsPerShelterDocument = gql`
    query AnimalsPerShelter($orgId: String!) {
  animalsPerShelter(orgId: $orgId) {
    hasMore
    animals {
      ...RegularAnimal
    }
  }
}
    ${RegularAnimalFragmentDoc}`;

/**
 * __useAnimalsPerShelterQuery__
 *
 * To run a query within a React component, call `useAnimalsPerShelterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimalsPerShelterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimalsPerShelterQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useAnimalsPerShelterQuery(baseOptions: Apollo.QueryHookOptions<AnimalsPerShelterQuery, AnimalsPerShelterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimalsPerShelterQuery, AnimalsPerShelterQueryVariables>(AnimalsPerShelterDocument, options);
      }
export function useAnimalsPerShelterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimalsPerShelterQuery, AnimalsPerShelterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimalsPerShelterQuery, AnimalsPerShelterQueryVariables>(AnimalsPerShelterDocument, options);
        }
export type AnimalsPerShelterQueryHookResult = ReturnType<typeof useAnimalsPerShelterQuery>;
export type AnimalsPerShelterLazyQueryHookResult = ReturnType<typeof useAnimalsPerShelterLazyQuery>;
export type AnimalsPerShelterQueryResult = Apollo.QueryResult<AnimalsPerShelterQuery, AnimalsPerShelterQueryVariables>;
export const ApplicationPerShelterDocument = gql`
    query ApplicationPerShelter($limit: Int!, $cursor: String, $animalIds: [String!]!) {
  applicationPerShelter(limit: $limit, cursor: $cursor, animalIds: $animalIds) {
    hasMore
    applications {
      ...RegularApplication
    }
  }
}
    ${RegularApplicationFragmentDoc}`;

/**
 * __useApplicationPerShelterQuery__
 *
 * To run a query within a React component, call `useApplicationPerShelterQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationPerShelterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationPerShelterQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      animalIds: // value for 'animalIds'
 *   },
 * });
 */
export function useApplicationPerShelterQuery(baseOptions: Apollo.QueryHookOptions<ApplicationPerShelterQuery, ApplicationPerShelterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApplicationPerShelterQuery, ApplicationPerShelterQueryVariables>(ApplicationPerShelterDocument, options);
      }
export function useApplicationPerShelterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplicationPerShelterQuery, ApplicationPerShelterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApplicationPerShelterQuery, ApplicationPerShelterQueryVariables>(ApplicationPerShelterDocument, options);
        }
export type ApplicationPerShelterQueryHookResult = ReturnType<typeof useApplicationPerShelterQuery>;
export type ApplicationPerShelterLazyQueryHookResult = ReturnType<typeof useApplicationPerShelterLazyQuery>;
export type ApplicationPerShelterQueryResult = Apollo.QueryResult<ApplicationPerShelterQuery, ApplicationPerShelterQueryVariables>;
export const ApplicationsDocument = gql`
    query Applications($userId: String!, $limit: Int!, $cursor: String) {
  applications(userId: $userId, limit: $limit, cursor: $cursor) {
    hasMore
    applications {
      ...RegularApplication
    }
  }
}
    ${RegularApplicationFragmentDoc}`;

/**
 * __useApplicationsQuery__
 *
 * To run a query within a React component, call `useApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useApplicationsQuery(baseOptions: Apollo.QueryHookOptions<ApplicationsQuery, ApplicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApplicationsQuery, ApplicationsQueryVariables>(ApplicationsDocument, options);
      }
export function useApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplicationsQuery, ApplicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApplicationsQuery, ApplicationsQueryVariables>(ApplicationsDocument, options);
        }
export type ApplicationsQueryHookResult = ReturnType<typeof useApplicationsQuery>;
export type ApplicationsLazyQueryHookResult = ReturnType<typeof useApplicationsLazyQuery>;
export type ApplicationsQueryResult = Apollo.QueryResult<ApplicationsQuery, ApplicationsQueryVariables>;
export const MatchesDocument = gql`
    query Matches($userId: String!, $limit: Int!, $cursor: String) {
  matches(userId: $userId, limit: $limit, cursor: $cursor) {
    hasMore
    matches {
      ...RegularMatch
    }
  }
}
    ${RegularMatchFragmentDoc}`;

/**
 * __useMatchesQuery__
 *
 * To run a query within a React component, call `useMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useMatchesQuery(baseOptions: Apollo.QueryHookOptions<MatchesQuery, MatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MatchesQuery, MatchesQueryVariables>(MatchesDocument, options);
      }
export function useMatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatchesQuery, MatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MatchesQuery, MatchesQueryVariables>(MatchesDocument, options);
        }
export type MatchesQueryHookResult = ReturnType<typeof useMatchesQuery>;
export type MatchesLazyQueryHookResult = ReturnType<typeof useMatchesLazyQuery>;
export type MatchesQueryResult = Apollo.QueryResult<MatchesQuery, MatchesQueryVariables>;
export const MeOrgDocument = gql`
    query MeOrg {
  meOrg {
    ...RegularOrg
  }
}
    ${RegularOrgFragmentDoc}`;

/**
 * __useMeOrgQuery__
 *
 * To run a query within a React component, call `useMeOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeOrgQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeOrgQuery(baseOptions?: Apollo.QueryHookOptions<MeOrgQuery, MeOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeOrgQuery, MeOrgQueryVariables>(MeOrgDocument, options);
      }
export function useMeOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeOrgQuery, MeOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeOrgQuery, MeOrgQueryVariables>(MeOrgDocument, options);
        }
export type MeOrgQueryHookResult = ReturnType<typeof useMeOrgQuery>;
export type MeOrgLazyQueryHookResult = ReturnType<typeof useMeOrgLazyQuery>;
export type MeOrgQueryResult = Apollo.QueryResult<MeOrgQuery, MeOrgQueryVariables>;
export const MeUserDocument = gql`
    query MeUser {
  meUser {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeUserQuery__
 *
 * To run a query within a React component, call `useMeUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeUserQuery(baseOptions?: Apollo.QueryHookOptions<MeUserQuery, MeUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeUserQuery, MeUserQueryVariables>(MeUserDocument, options);
      }
export function useMeUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeUserQuery, MeUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeUserQuery, MeUserQueryVariables>(MeUserDocument, options);
        }
export type MeUserQueryHookResult = ReturnType<typeof useMeUserQuery>;
export type MeUserLazyQueryHookResult = ReturnType<typeof useMeUserLazyQuery>;
export type MeUserQueryResult = Apollo.QueryResult<MeUserQuery, MeUserQueryVariables>;
export const OrgByIdDocument = gql`
    query OrgByID($id: String!) {
  orgByID(id: $id) {
    ...RegularOrg
  }
}
    ${RegularOrgFragmentDoc}`;

/**
 * __useOrgByIdQuery__
 *
 * To run a query within a React component, call `useOrgByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrgByIdQuery(baseOptions: Apollo.QueryHookOptions<OrgByIdQuery, OrgByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrgByIdQuery, OrgByIdQueryVariables>(OrgByIdDocument, options);
      }
export function useOrgByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrgByIdQuery, OrgByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrgByIdQuery, OrgByIdQueryVariables>(OrgByIdDocument, options);
        }
export type OrgByIdQueryHookResult = ReturnType<typeof useOrgByIdQuery>;
export type OrgByIdLazyQueryHookResult = ReturnType<typeof useOrgByIdLazyQuery>;
export type OrgByIdQueryResult = Apollo.QueryResult<OrgByIdQuery, OrgByIdQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    