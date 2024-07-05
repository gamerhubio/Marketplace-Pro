
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/index.css";
import "./assets/css/animation.css";
import App from './App';
import { ModalProvider} from '@particle-network/connect-react-ui';
import { WalletEntryPosition } from '@particle-network/auth';
import { evmWallets } from "@particle-network/connect";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./assets/css/index.css";
import "./assets/css/custom-swiper.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider
          options={{
            projectId: `${"process.env.REACT_APP_PROJECT_ID"}`,
            clientKey: `${"process.env.REACT_APP_CLIENT_KEY"}`,
            appId: `${"process.env.REACT_APP_APP_ID"}`,
            chains: [
              { id: 97, name: "Bsc" },
              { id: 1, name: "Ethereum" },
            ],
            particleWalletEntry: {
              //optional: particle wallet config
              displayWalletEntry: true, //display wallet button when connect particle success.
              defaultWalletEntryPosition: WalletEntryPosition.BR,
              supportChains: [
                { id: 97, name: "Bsc" },
                { id: 1, name: "Ethereum" },
              ],
              customStyle: {}, //optional: custom wallet style
            }, 
            wallets: evmWallets({ qrcode: false }),
          }}
          theme={"dark"}
          language={"en"} //optional：localize, default en
          walletSort={["Particle Auth", "Wallet"]} //optional：walelt order
          particleAuthSort={[
            "email",
            "google",
            "apple",
            "facebook",
          ]}
        >

          <App />
        </ModalProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

