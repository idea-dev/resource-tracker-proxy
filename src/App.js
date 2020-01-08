import React from "react";
import {useAuth0} from "./auth/react-auth0-spa";
import Relay from "./auth/Relay";
import PrivateRoute from "./auth/PrivateRoute";
import history from "./utils/history";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    const {loading} = useAuth0();
    const {isAuthenticated} = useAuth0();

    if (loading) {
        return <div className={'loadingDiv'}>
            <img alt={'logo'} src={'idea.png'} className="ideaLoading">
            </img>
            <p style={{marginTop: '20px'}}>
                IDEA: Northeastern University's Venture Accelerator
            </p>
        </div>;
    }

    return (
        <Router history={history}>
            {!isAuthenticated && (
                <PrivateRoute path={window.location.pathname} component={Relay}/>
            )}
            <Route component={Relay} />
        </Router>

    );
}

export default App;