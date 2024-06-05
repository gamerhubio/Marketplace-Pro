import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper"
import SignIn from "./SignIn"
import SignUp from "./SignUp"



interface IProps {
    link: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AuthModals = ({link, open, setOpen} : IProps) => {

    const [hasAccount, setHasAccount] = useState(false)


    const switchForm = () => {
        setHasAccount(!hasAccount)
    }

    const handleClose = () => {
        setOpen(false)
        window.open(link, '_blank');
    }


    return (
        <ModalWrapper open={open} setOpen={setOpen}>

            { hasAccount ? <SignIn action={switchForm} close={handleClose} /> : <SignUp action={switchForm} close={handleClose} /> }

        </ModalWrapper>
    )
}


export default AuthModals