import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const signIn = actionCreator<ValidateLoginParams>("SIGNIN");
export const signOut = actionCreator("SIGNOUT");

export interface ValidateLoginParams {
   username: string;
   password: string;
}
export interface ValidateLoginResult {
   token: string;
}

export const validateLogin = actionCreator.async<ValidateLoginParams, ValidateLoginResult>("VALIDATE_LOGIN");

export const setUsername = actionCreator<string>("SET_USERNAME");
export const setPassword = actionCreator<string>("SET_PASSWORD");
