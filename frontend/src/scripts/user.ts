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

type PatchUserResponse = {
  _id: string;
  email: string;
  username: string;
};
type PatchUserWalletResponse = {
  _id: string;
  email: string;
  username: string;
  wallets: string[];
};

//get user
export const getUser = async (address: string) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<GetUserResponse>(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/users/${address}`,
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

//get user
export const getUserData = async (id: string) => {
  const token = localStorage.getItem("accessToken");
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<GetUserResponse>(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/users/detail/${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
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
type UpdateFormData = {
  email: string;
  username: string;
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
    wallets: data.wallets,
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
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/auth/register`,
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

export async function updateUser(formData: UpdateFormData) {
  console.log(formData);
  const token = localStorage.getItem("accessToken");
  try {
    //  const data: CreateUserResponse
    const { data } = await axios.patch<PatchUserResponse>(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DOMAIN_DEV
          : process.env.REACT_APP_DOMAIN_PROD
      }/users/${formData.email}`,
      { ...formData },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // //set user object
    // const user = {
    //   id: data.id,
    //   email: data.email,
    //   username: data.username,
    // };

    // localStorage.setItem("user", JSON.stringify(user));
    // setUser(user);

    // return user;

    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    //@ts-ignore
    setUser({});
    setIsAuthenticated(false);
    //redirect to login
    window.location.replace(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/app/signin`
    );
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

export async function updateUserWalletList(formData: FormData) {
  console.log(formData);
  const token = localStorage.getItem("accessToken");
  try {
    //  const data: CreateUserResponse
    const { data } = await axios.patch<PatchUserWalletResponse>(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/users/${formData.email}`,
      { ...formData },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //set user object
    const user = {
      id: data._id,
      email: data.email,
      username: data.username,
      wallets: data.wallets,
    };

    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);

    // return user;
    return { msg: true };
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
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/auth/login`,
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
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/auth/checker/${address}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    //return JSON.stringify(data, null, 4);
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
export const checkSubscription = async (id: string) => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<checkerResponse>(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_BASE_URL_DEV
          : process.env.REACT_APP_BASE_URL_PROD
      }/auth/subscription/expiration/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    //return JSON.stringify(data, null, 4);
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
