import { ApplicationFieldError } from "../generated/graphql";

export const toApplicationErrorMap = (errors: ApplicationFieldError[]) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({ field, message }) => {
        errorMap[field] = message;
    });

    return errorMap;
};
