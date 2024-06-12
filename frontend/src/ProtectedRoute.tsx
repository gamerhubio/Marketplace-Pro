import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ConnectButton, useAccount } from "@particle-network/connect-react-ui";
import { useSelector } from "react-redux";
import { getUserData } from "./scripts/user";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {

  const userData = useSelector(getUserData)

  //const address = useAccount();
  const location = useLocation();

  //if not authenticated or no address connected
  if (!userData) {
    return <Navigate to="/app/signin" state={{ from: location }} replace />;
  }
  return (
    <>
      <div style={{ display: "none" }}>
        <ConnectButton />
      </div>
      {children}
    </>
  );
};

export default ProtectedRoute;
