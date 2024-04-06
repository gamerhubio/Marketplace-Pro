import Web3 from "web3";
import web3data from "../artifacts/contracts/GamerhubManager.sol/GamerhubManager.json";
import payoutdata from "../artifacts/contracts/Payout.sol/Payout.json";
import { Provider } from "@particle-network/connect";
import axios from "axios";

interface IError {
  code: number;
  message: string;
}

type CreateUserResponse = {
  _id: string;
  email: string;
  username: string;
  plan: number;
};

type MyFormData = {
  email: string;
  username: string;
  plan: number;
};

export const subscribe = async (
  plan: number,
  amt: string,
  provider: Provider,
  email: string,
  username: string
) => {
  //@ts-ignore
  const web3 = new Web3(provider);
  let account = await web3.eth.getAccounts();

  //@ts-ignore
  const contract = new web3.eth.Contract(
    //@ts-ignore
    [...web3data.abi],
    `${process.env.REACT_APP_CONTRACT_ADDRESS}`
  );
  //const myp = await contract.methods.getPackage(0).call()
  const token = localStorage.getItem("accessToken");
  const dateInMillisecs = Date.now();
  const dateInSecs = Math.round(dateInMillisecs / 1000);
  const endDate = dateInMillisecs + 2629800000;
  contract.methods
    .subscribe(plan, dateInSecs)
    .send({
      value: web3.utils.toWei(amt, "ether"),
      from: account[0],
      gas: web3.utils.toHex(80000),
    })
    .on("transactionHash", (hash: any) => {
      console.log(hash);
    })
    .on("error", (error: IError) => {
      console.log("This is error: ", error.message);
    })
    .then(async function () {
      //save subscription in db
      const formData = {
        email,
        username,
        plan,
        startDate: dateInMillisecs,
        endDate,
      };

      try {
        // const data: CreateUserResponse
        const { data, status } = await axios.post<CreateUserResponse>(
          `${
            process.env.NODE_ENV == "development"
              ? process.env.REACT_APP_BASE_URL_DEV
              : process.env.REACT_APP_BASE_URL_PROD
          }/subscription`,
          { ...formData },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        //console.log(JSON.stringify(data, null, 4));

        window.location.replace(
          `${
            process.env.NODE_ENV == "development"
              ? process.env.REACT_APP_DOMAIN_DEV
              : process.env.REACT_APP_DOMAIN_PROD
          }/dashboard/home`
        );

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
    });
};

//request payment
export const requestPayment = async (
  address: string,
  provider: Provider,
  amt: number
) => {
  //@ts-ignore
  const web3 = new Web3(provider);
  let account = await web3.eth.getAccounts();

  //@ts-ignore
  const contract = new web3.eth.Contract(
    //@ts-ignore
    [...payoutdata.abi],
    process.env.REACT_APP_PAYOUT_CONTRACT_ADDRESS
  );

  const url = `${process.env.REACT_APP_BASE_URL_PROD}/blockchainroute/${address}?amt=${amt}`;
  contract.methods
    .requestVolumeData(url)
    .send({ from: account[0] })
    .on("transactionHash", (hash: any) => {
      console.log(hash);
    })
    .on("error", (error: IError) => {
      console.log("This is error: ", error.message);
    })
    .then(async function () {
      //finished
      window.location.reload();
    });
};
