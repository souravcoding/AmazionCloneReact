import React, { useEffect } from "react"
import { Route, Switch } from "react-router";
import './App.css';
import {BrowserRouter} from "react-router-dom"

import Header from './Header'
import Home from "./Home";
import Login from './Login'
import CheckOut from "./CheckOut";
import { useStateProvider } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{basket,user},dispatch]=useStateProvider()
   
  useEffect(()=>{
  const unsub=  auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type:"SET_USER",
          user:authuser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return ()=>{
      unsub()
    }
  },[])

   console.log(user);

  return (
   <> <BrowserRouter>
     <Switch>
       <Route exact path="/" >
       <Header/>
       <Home/>
       </Route>

       <Route exact path="/checkout">
       <Header/>
       <CheckOut/>
       </Route>

       <Route exact path="/login">
       <Login/>
         
       </Route>

     </Switch>
     </BrowserRouter>
   </>
 
  );
}

export default App;
