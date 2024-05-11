import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

//import ShoppingCart from "./components/ShoppingCart";
import App from "./components/app";


const root=createRoot(document.querySelector('#root'));

root.render(<App />)

