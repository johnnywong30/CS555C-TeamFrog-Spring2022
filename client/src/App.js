import React from "react";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import configureStore, { history } from "./redux/store/";
import Routes from "./routes";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./components/utils/theme";

export const store = configureStore();

const App = () => {
    return (
        <ChakraProvider theme={customTheme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Routes />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </ChakraProvider>
    );
};

export default App;
