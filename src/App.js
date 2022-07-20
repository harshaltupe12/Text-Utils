
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
     msg : message,
     type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'; 
      showAlert("light mode Enable", "success")
      document.title = 'TextUtils-Light Mode';
    }
    
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#33383d'; 
      showAlert("Dark mode Enable", "success")
      document.title = 'TextUtils-Dark Mode';

    }
  }
 

  return (
    
    <div className="App">
      {/* <TextForm showAlert = {showAlert} heading="Enter text To Anlyze"  mode = {mode}/> */}
    <Router>
          <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
          <Alert alert = {alert}/>
          <div className="container">
          <Switch>
              <Route path="/about">
                <AboutUs/>
              </Route>
              
              <Route path="/">
              <TextForm showAlert = {showAlert} heading="Enter text To Anlyze"  mode = {mode}/>
              </Route>
        </Switch>
          </div>
      </Router>
    </div>
   
    
  );
}

export default App;
