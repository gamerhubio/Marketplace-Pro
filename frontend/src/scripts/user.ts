import axios from "axios";
import { setIsAuthenticated, setUser } from "../store";

type User = {
  _id: string;
  email: string;
  username: string;
  wallets: string[];
};

type GetUserResponse = {
  user: User[];
};

//get user
export const getUser = async (address: string) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<GetUserResponse>(
      `${process.env.REACT_APP_BASE_URL}/users/${address}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    //return JSON.stringify(data, null, 4);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return { error: error.message };
    } else {
      console.log("unexpected error: ", error);
      return { error: "An unexpected error occurred" };
    }
  }
};

//create user

type FormData = {
  email: string;
  username: string;
  wallets: string[];
};

//decode
const decode = (token: string) => {
  //get second element
  let base64url = token.split(".")[1];
  //convert to base 64
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonpayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  let data = JSON.parse(jsonpayload);
  //set user object
  const user = {
    id: data.id,
    email: data.email,
    username: data.username,
  };

  setUser(user);
  setIsAuthenticated(true);

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", token);

  return true;
};

type authResponse = {
  user: string[];
  accessToken: string;
};
type checkerResponse = {
  msg: boolean;
};

export async function createUser(formData: FormData) {
  console.log(formData);
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<authResponse>(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      { ...formData },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    //return JSON.stringify(data, null, 4);
    console.log(data);
    if (data.accessToken) {
      return decode(data.accessToken);
    } else {
      // window.location.replace(`${process.env.REACT_APP_DOMAIN}/app/signup`);
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return { error: error.message };
    } else {
      console.log("unexpected error: ", error);
      return { error: "An unexpected error occurred" };
    }
  }
}

//get user
export const login = async (info: { username: string; password: string }) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.post<authResponse>(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      { ...info },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    //return JSON.stringify(data, null, 4);
    console.log(data);
    if (data.accessToken) {
      return decode(data.accessToken);
    } else {
      // window.location.replace(`${process.env.REACT_APP_DOMAIN}/app/signup`);
      return false;
    }

    // return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return { error: error.message };
    } else {
      console.log("unexpected error: ", error);
      return { error: "An unexpected error occurred" };
    }
  }
};

//get user
export const checkUser = async (address: string) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<checkerResponse>(
      `${process.env.REACT_APP_BASE_URL}/auth/checker/${address}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    //return JSON.stringify(data, null, 4);
    console.log(data);
    if (data.msg) {
      return { msg: true };
    } else {
      // window.location.replace(`${process.env.REACT_APP_DOMAIN}/app/signup`);
      return { msg: false };
    }

    // return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return { error: error.message };
    } else {
      console.log("unexpected error: ", error);
      return { error: "An unexpected error occurred" };
    }
  }
};

//get user subscription state
export const checkSubscription = async (address: string) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<checkerResponse>(
      `${process.env.REACT_APP_BASE_URL}/auth/subscription/expiration/${address}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    //return JSON.stringify(data, null, 4);
    console.log(data);
    if (data.msg) {
      return true;
    } else {
      // window.location.replace(`${process.env.REACT_APP_DOMAIN}/app/signup`);
      return false;
    }

    // return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return { error: error.message };
    } else {
      console.log("unexpected error: ", error);
      return { error: "An unexpected error occurred" };
    }
  }
};
