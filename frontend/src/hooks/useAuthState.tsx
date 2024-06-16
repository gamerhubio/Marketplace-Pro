import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getAuthToken, getCredit, getLastRewardTime, getUserData, IUser, setUserData } from "../store/slices/authSlice"
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
  const credit = useSelector(getCredit)

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


  return { userData, authToken, lastRewardTime, credit, authRequest }
}

export default useAuthState