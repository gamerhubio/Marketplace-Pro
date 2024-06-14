import { Button } from "../Button"
import Lottie from 'react-lottie-player'

const Reward = ({close} : {close: () => void} ) => {

    return (
        <div>
            <div>
                <h2>Congratulations</h2>
                <p style={{textAlign: "center", marginBottom: 10}}>You received 20 GHT, login daily for more rewards</p>
                <div style={{display: "flex", justifyContent: "center",  marginBottom: "20px"}}>
                    <Lottie 
                        path={"https://lottie.host/6beb4082-2a6c-4fda-a730-48f57617448b/G0J0PK6MkQ.json"}
                        play={true} loop={false}
                        style={{ width: 150, height: 150 }}/>
                </div>

                <Button onClick={close}>Claim</Button>
            </div>
        </div>
    )
}

export default Reward