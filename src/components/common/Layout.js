import React from 'react';
import Profile from "../Profile";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Main from "../Main";

const routesMy = [
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/user/:login",
        element: <Profile/>
    }
];

const Layout =() =>{
    return(
        <>
            <div className="px-12">
                <Router>
                    <Routes>
                        {routesMy.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default Layout;