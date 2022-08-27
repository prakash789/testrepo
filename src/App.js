import React,{useEffect} from "react";
import AppRouter from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";
import  MessageAlert from './Components/MessageAlert'

//redux
import { Provider, useDispatch } from "react-redux";
import {store} from "../src/Store";
import { doLoginAction } from "./Screens/Login/Action";


const App = () => {

  


  return (
    <ChakraProvider>
      <MainLayout />
    </ChakraProvider>
  )
};

const MainLayout = () => {
  return (
    <Provider store={store}>
        <div>

          <AppRouter/>
        </div>
    </Provider>
  );
};

export default App;
