import { useState } from "react";
import ModalWrapper from "./ModalWrapper"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Forgot from "./Forgot"
import { toast } from "react-toastify";


interface IProps {
    link: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AuthModals = ({link, open, setOpen} : IProps) => {

    const [index, setIndex] = useState(0)

    const handleClose = () => {
        setOpen(false)
        if (link === null) {

        } else if (link === "NA") {
            toast.error("Game not avaialable")
        } else {
            window.open(link, "_blank")
        }
    }


    return (
        <ModalWrapper open={open} setOpen={setOpen}>

            { index === 0 && <SignUp action={() => setIndex(1)} close={handleClose} /> }

            { index === 1 && <SignIn action={() => setIndex(0)} forgot={() => setIndex(2)} close={handleClose} /> }

            { index === 2 && <Forgot action={() => setIndex(1)} close={handleClose} /> }
 
        </ModalWrapper>
    )
}


export default AuthModals
