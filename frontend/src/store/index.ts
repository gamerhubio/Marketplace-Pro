//All global states enter here
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  isAuthenticated: false,
  currentUser: {},
});

type IUser = {
  id: string;
  email: string;
  username: string;
};

const setUser = (user: IUser) => {
  setGlobalState("currentUser", user);
};
const setIsAuthenticated = (auth: boolean) => {
  setGlobalState("isAuthenticated", auth);
};

const truncate = (
  text: string,
  startChars: number,
  endChars: number,
  maxLength: number
) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate,
  setUser,
  setIsAuthenticated,
};
