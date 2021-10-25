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

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeOrgPassword: OrgResponse;
  changeUserPassword: UserResponse;
  forgotOrgPassword: Scalars['Boolean'];
  forgotUserPassword: Scalars['Boolean'];
  login: OrgResponse;
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


export type MutationForgotOrgPasswordArgs = {
  email: Scalars['String'];
};


export type MutationForgotUserPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
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
  firstLogin: Scalars['Boolean'];
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

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  meOrg?: Maybe<Org>;
  meUser?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  attributes: Scalars['String'];
  avatarUrl: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstLogin: Scalars['Boolean'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
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
  username: Scalars['String'];
  verifypassword: Scalars['String'];
};

export type RegularOrgFragment = { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string };

export type RegularOrgErrorFragment = { __typename?: 'OrgFieldError', field: string, message: string };

export type RegularOrgResponseFragment = { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined };

export type RegularUserFragment = { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string };

export type RegularUserErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined };

export type ChangeOrgPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeOrgPasswordMutation = { __typename?: 'Mutation', changeOrgPassword: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type ChangeUserPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeUserPasswordMutation = { __typename?: 'Mutation', changeUserPassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type ForgotOrgPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotOrgPasswordMutation = { __typename?: 'Mutation', forgotOrgPassword: boolean };

export type ForgotUserPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotUserPasswordMutation = { __typename?: 'Mutation', forgotUserPassword: boolean };

export type LoginUserMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterOrgMutationVariables = Exact<{
  options: OrgUsernamePasswordInput;
}>;


export type RegisterOrgMutation = { __typename?: 'Mutation', registerOrg: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type RegisterUserMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type UpdateOrgInfoMutationVariables = Exact<{
  options: Scalars['String'];
}>;


export type UpdateOrgInfoMutation = { __typename?: 'Mutation', updateOrgInfo: { __typename?: 'OrgResponse', errors?: Array<{ __typename?: 'OrgFieldError', field: string, message: string }> | null | undefined, org?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type UpdateUserInfoMutationVariables = Exact<{
  options: Scalars['String'];
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined } };

export type MeOrgQueryVariables = Exact<{ [key: string]: never; }>;


export type MeOrgQuery = { __typename?: 'Query', meOrg?: { __typename?: 'Org', id: string, username: string, contactFirstname: string, contactLastname: string, orgName: string, address: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined };

export type MeUserQueryVariables = Exact<{ [key: string]: never; }>;


export type MeUserQuery = { __typename?: 'Query', meUser?: { __typename?: 'User', id: string, username: string, firstname: string, lastname: string, avatarUrl: string, email: string, firstLogin: boolean, attributes: string } | null | undefined };

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
  firstLogin
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
  firstLogin
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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    