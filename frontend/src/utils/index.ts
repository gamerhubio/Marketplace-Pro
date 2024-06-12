import axios from "axios";

const process = (import.meta as any).env 

export const BASE_URL = process.VITE_ENV === "development" ? process.VITE_APP_BASE_URL_DEV : process.VITE_APP_BASE_URL_PROD

export const getFormatWalletAddress = (address: string) => {
  return (
    address.substring(0, 5) +
    "..." +
    address.substring(address.length - 4, address.length)
  );
};



export const authRequest = () => {
  const token = localStorage.getItem("accessToken");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}


// export const claimTokens = async(id: string) =>  {
//   const DAY = 24 * 3600 * 1000
//   const currentTime = Date.now()
//   const getLastClaim = Number(localStorage.getItem("last-claim") || 0)
//   if (getLastClaim + DAY <= currentTime) {
//     try {
//       await authRequest().patch(BASE_URL + "/users/reward/" + id)
//       localStorage.setItem("last-claim", currentTime.toString())
//       return true
//     } catch (e) {
//       return false
//     }
//   } else {
//     return false
//   }
// }