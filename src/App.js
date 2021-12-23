import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route
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

    const removeBodyColor = () => {
        document.body.classList.remove("bg-primary");
        document.body.classList.remove("bg-danger");
        document.body.classList.remove("bg-success");
        document.body.classList.remove("bg-warning");
    }

    const [cls, setCls] = useState(null);
    // cls is a parameter name as class is a reserved keyword
    const toggleMode = (cls) => {
        console.log(cls);
        removeBodyColor();
        // document.body.classList.add("bg-" + cls)
        // removeBodyColor();
        // if (mode === 'light') {
            // setMode('dark');
            // document.body.style.backgroundColor = "#203c59";
            // removeBodyColor();
            
            // this will show the alert with custom msg, useState rockks
            // showAlert("Dark mode has been enabled", "success")
            
            if (cls === "primary"){
                setMode("dark")
                document.body.style.backgroundColor = "#003685";
                showAlert("Blue mode has been enabled", "success")
                setCls("primary")
            }
            else if (cls === "danger"){
                setMode("dark")
                document.body.style.backgroundColor = "#85101b";
                showAlert("Red mode has been enabled", "success")                
                setCls("danger")
            }
            else if (cls === "success"){
                setMode("dark")
                document.body.style.backgroundColor = "#004100";
                showAlert("Green mode has been enabled", "success")                
                setCls("success")
            }
            else if (cls === "warning"){
                setMode("dark")
                document.body.style.backgroundColor = "#cd9a00";
                showAlert("Yellow mode has been enabled", "success")                
                setCls("warning")
                setCls("warning")
            }
            else if (cls === "light"){
                setMode("light")
                // document.body.style.backgroundColor = "white";
                document.body.style.backgroundColor = "white";
                showAlert("Light mode has been enabled", "success")                
                setMode("light")
            }
            else if (cls === "dark"){
                document.body.style.backgroundColor = "#212529de";
                showAlert("Dark mode has been enabled", "success")     
                removeBodyColor();  
                setCls("dark")         
            }
            
            // To change the title 
            // document.title = "TextUtils-Dark Mode"

            //just for knowledge purpose : If want to flash something say in the title then do like the following
            // setInterval(() => {
            //     document.title = "TextUtils-Install"
            // }, 2000);
            // setInterval(() => {
            //     document.title = "TextUtils-Virus"
            // }, 1500);
        // }
        // else {
        //     setMode('light');
        //     document.body.style.backgroundColor = "white";
        //     showAlert("Light mode has been enabled", "success")
        //     // document.title = "TextUtils-Light Mode"

        // }
    }

    return (
        <>
            <Router>
                <Navbar title="Text-Mania" about="About" mode={mode} toggleMode={toggleMode} /> {/*mode=light/date willl be sent here using states. */}
                {/* <Navbar  /> */}

                <Alert alert={alert} />

                <div className="container my-3">
                    {/* A <Routes> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Routes>
                        {/* Can use `exact` with `path` as `exact path` in the `<Route>` to do exact routing otherwise react does partial routing */}
                        <Route exact path="/about" element={<About mode={mode} />}>
                            {/* <About/> */}
                        </Route>
                        <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} cls={cls} showAlert={showAlert} />}>
                            {/* <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
                        </Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;