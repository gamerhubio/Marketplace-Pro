import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getAuthToken, getLastRewardTime, getUserData, IUser, setUserData } from "../store/slices/authSlice"
import { useEffect } from "react"
import { BASE_URL } from "../utils"


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
  
    return user;
  };


const useAuthState = () => {

    const dispatch = useDispatch()

    const authToken = useSelector(getAuthToken)
    const userData = useSelector(getUserData)
    const lastRewardTime = useSelector(getLastRewardTime)

    const authRequest = () => {
        return axios.create({
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
    }

    useEffect(() => {
        if (!userData && authToken) {
            dispatch(setUserData(decode(authToken)))
        }
    }, [userData, authToken])

    const claimTokens = async(id: string) =>  {
        const DAY = 24 * 3600 * 1000
        const currentTime = Date.now()
        const getLastClaim = Number(localStorage.getItem("last-claim") || 0)
        // if (getLastClaim + DAY <= currentTime) {
        //   try {
        //     await authRequest().patch(BASE_URL + "/users/reward/" + id)
        //     localStorage.setItem("last-claim", currentTime.toString())
        //     return true
        //   } catch (e) {
        //     return false
        //   }
        // } else {
        //   return false
        // }
    }

    return { userData, authToken, lastRewardTime, authRequest }
}

export default useAuthState