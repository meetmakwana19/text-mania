import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light'); // `mode` is a state variable telling whether dark mode is enabled or not. `light` means by default dar mode is disabled.

    const [alert, setAlert] = useState(null); //alert will be by default null
    const showAlert = (message, type) => { //showAlert func will take 2 parameters- message, type
        // will try to set alert using  this func where setAlert here is the object.
        setAlert({
            msg: message,
            type: type
        })
        // will remove the showAlert after 3seconds
        setTimeout(() => {
            setAlert(null);
        }, 2000)
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "#203c59";

            // this will show the alert with custom msg, useState rockks
            showAlert("Dark mode has been enabled", "success")

            // To change the title 
            document.title = "TextUtils-Dark Mode"

            //just for knowledge purpose : If want to flash something say in the title then do like the following
            // setInterval(() => {
            //     document.title = "TextUtils-Install"
            // }, 2000);
            // setInterval(() => {
            //     document.title = "TextUtils-Virus"
            // }, 1500);
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success")
            document.title = "TextUtils-Light Mode"

        }
    }
    return (
        <>
            <Router>
                <Navbar title="Text-Utils" about="About" mode={mode} toggleMode={toggleMode} /> {/*mode=light/date willl be sent here using states. */}
                {/* <Navbar  /> */}

                <Alert alert={alert} />

                <div className="container my-3">
                    {/* A <Routes> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Routes>
                        {/* Can use `exact` with `path` as `exact path` in the `<Route>` to do exact routing otherwise react does partial routing */}
                        <Route exact path="/about" element={<About/>}>
                            {/* <About/> */}
                        </Route>
                        <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}>
                            {/* <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
                        </Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;