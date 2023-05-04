import Web3 from "web3"
import * as web3data from "../artifacts/contracts/GamerhubManager.sol/GamerhubManager.json"
import { Provider } from '@particle-network/connect'
import axios from 'axios'

//const provider = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
//const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')
interface IError {
    code: number,
    message: string
}

type CreateUserResponse = {
  _id: string;
  email: string;
  username: string;
  plan:number
};

type MyFormData = {
  email: string;
  username: string;
  plan: number
};

export const subscribe = async (plan:number, amt:string, provider: Provider,email:string,username:string) => {
   // const contract = new ethers.Contract(`${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`, web3data.abi, provider);
   //@ts-ignore
  const web3 = new Web3(provider)
  //get wallets
    let account = await web3.eth.getAccounts() 
    
  //get a contract instance
 //@ts-ignore
   const contract = new web3.eth.Contract([...web3data.abi], process.env.REACT_APP_CONTRACT_ADDRESS)
  
  //get current date in millisec as start date
  const dateInMillisecs = Date.now();
  //convert to seconds
  const dateInSecs = Math.round(dateInMillisecs / 1000);
  //calculate end date
  const endDate = dateInMillisecs + 2629800000;
  //run transaction
  contract.methods.subscribe(plan, dateInSecs)
    .send({ value: web3.utils.toWei(amt, 'ether'), from: account[0] })
            .on('transactionHash', (hash: any) => {
            console.log(hash)       
            }).on('error', (error:IError) => {
            console.log("This is error: ", error.message)
        }).then(async function(){
            //save subscription in db
            const formData = {
                email: "",
                username: "",
                plan,
                startDate: dateInMillisecs,
                endDate
            }
            
  try {
    // 👇️ const data: CreateUserResponse
    const { data, status } = await axios.post<CreateUserResponse>(
      `${process.env.REACT_APP_BASE_URL}/subscription`,
      {...formData},
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


});
  
 }