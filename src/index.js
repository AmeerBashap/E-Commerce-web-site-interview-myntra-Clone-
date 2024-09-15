import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './routes/App.jsx';
import Bag from "./routes/Bag.jsx";
import Home from './routes/Home.jsx';
import {Provider} from 'react-redux'
import myntraStroe from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenItems from './routes/MenItems.jsx';
import WomenItem from './routes/WomenItem.jsx';
import KidsItems from './routes/KidsItems.jsx';
// import LoginAndSignup from './components/LoginAndSignup.jsx';
import Login from './routes/Login.jsx';
import Signup from './routes/Signup.jsx';
import TermsOfUses from './routes/TermsOfUses.jsx';
import Privacy from './routes/Privacy.jsx';
import QueryResults from './routes/QueryResults.jsx';
import LogoutandLogin from './components/LogoutandLogin.jsx';
import PlaceOrder from './routes/PlaceOrder.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: "/", element: <Home /> },
      { path: "/bag", element: <Bag />, },
      {path:"/Men",element:<MenItems></MenItems>},  
      {path:"/Women",element:<WomenItem></WomenItem>},
      {path:"/Kids",element:<KidsItems></KidsItems>},
      {path:"/Login&Signup",element:<LogoutandLogin></LogoutandLogin>},
      {path:"/Loginpage",element: <Login></Login>},
      {path:"/Signuppage",element: <Signup></Signup>},
      {path:"/Terms",element: <TermsOfUses></TermsOfUses>},
      {path:"/Privacy",element: <Privacy></Privacy>},
      {path:"/search-results",element:<QueryResults></QueryResults>},
      {path:"/PlaceOrder",element:<PlaceOrder></PlaceOrder>}
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('ameer'));
root.render(
    <Provider store={myntraStroe}>
 <RouterProvider router={router}/>
    </Provider>
);

