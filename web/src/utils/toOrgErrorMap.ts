import { FieldError, OrgFieldError } from "../generated/graphql";

export const toOrgErrorMap = (errors: OrgFieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
