import {   LoaderWrapper   } from "./styles";
import logo from "./logo.png"

const SplashScreen = () => {
    return (
        <LoaderWrapper>
            <img className="pulse" width={44} height={40} src={logo} />
        </LoaderWrapper>
    );
};

export default SplashScreen