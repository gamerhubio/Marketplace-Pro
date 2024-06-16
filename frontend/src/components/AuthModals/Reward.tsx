import { useSelector } from "react-redux"
import { Button } from "../Button"
import Lottie from 'react-lottie-player'
import { getNewAcct } from "../../store/slices/authSlice"

const Reward = ({tokens, close} : {tokens: number, close: () => void} ) => {

    const isNewAcct = useSelector(getNewAcct)

    return (
        <div>
            <div>
                <h2>Congratulations</h2>
                <p style={{textAlign: "center", marginBottom: 10}}>You received  {tokens}GC, login daily for more rewards</p>
                <div style={{display: "flex", justifyContent: "center",  marginBottom: "20px"}}>
                    <Lottie 
                        path={"https://lottie.host/6beb4082-2a6c-4fda-a730-48f57617448b/G0J0PK6MkQ.json"}
                        play={true} loop={false}
                        style={{ width: 150, height: 150 }}/>
                </div>

                <Button onClick={close}>Ok</Button>
            </div>
        </div>
    )
}

export default Reward