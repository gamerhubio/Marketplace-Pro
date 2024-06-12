import { useSelector } from "react-redux"
import axios from "axios"
import { getAuthToken, getUserData, IUser } from "../store/slices/authSlice"



const useAuthState = () => {

    const authToken = useSelector(getAuthToken)
    const userData = useSelector(getUserData)

    const authRequest = () => {
        return axios.create({
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
    }

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

    return { userData, authToken, authRequest }
}

export default useAuthState