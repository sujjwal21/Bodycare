import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import ApiContextProvider from './Contexts/ApiContex';
import AuthContextProvider from './Contexts/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <ApiContextProvider>
      <ApiContextProvider>
    <App />
    </ApiContextProvider>
    </ApiContextProvider>
    </BrowserRouter>
    </ChakraProvider>
);

