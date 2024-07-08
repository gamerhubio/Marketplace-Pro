import {   LoaderWrapper   } from "./styles";

const SplashScreen = () => {
    return (
        <LoaderWrapper>
            <img className="pulse" src={"/images/app-logo.png"} />
        </LoaderWrapper>
    );
};

export default SplashScreen