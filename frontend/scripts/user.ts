import axios from "axios";

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
    const { data, status } = await axios.get<GetUserResponse>(
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
type CreateUserResponse = {
  _id: string;
  email: string;
  username: string;
  wallets: string[];
};

type FormData = {
  email: string;
  username: string;
  wallets: string[];
};

export async function createUser(formData: FormData) {
  try {
    // 👇️ const data: CreateUserResponse
    const { data, status } = await axios.post<CreateUserResponse>(
      `${process.env.REACT_APP_BASE_URL}/users`,
      { ...formData },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
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
