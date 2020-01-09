import "./style/styles.css"
import {useAuth0} from "./auth/react-auth0-spa";
import axios from 'axios';
import React from "react";


/**
 * @return {null}
 */
export default function Relay(props) {

    const {loading, user} = useAuth0();
    const {isAuthenticated} = useAuth0();

    const trackableDomains = ['notion'];

    if (loading) {
        return <div className={'loadingDiv'}>
            <img alt={'logo'} src={'idea.png'} className="ideaLoading">
            </img>
            <p style={{marginTop: '20px'}}>
                IDEA: Northeastern University's Venture Accelerator
            </p>
        </div>;
    }

    let pathname = window.location.pathname.substr(1);
    if (pathname !== "" && isAuthenticated) {
        if (!pathname.includes('http') || !pathname.includes('https')) {
            pathname = "https://" + pathname
        }

        let isTrackable = [];
        trackableDomains.forEach((domain) =>  {
            if (pathname.includes(domain)) {
                isTrackable.push(true);
            }
        });

        if (isTrackable.includes(true)) {
            window.location = pathname;
            axios.post(
                'https://8xw8jht2ga.execute-api.us-east-1.amazonaws.com/default/serverlessRI',
                {email: `${user.email}`, resource: `${pathname}`}
            )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("Not a trackable domain");
            window.location = pathname;
        }
    }

    return null;
}