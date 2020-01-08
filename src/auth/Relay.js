import "../style/styles.css"
import {useAuth0} from "./react-auth0-spa";
import axios from 'axios';

/**
 * @return {null}
 */
export default function Relay(props) {

    const {loading, user} = useAuth0();

    console.log(window.location.pathname.substr(1));
    let pathname = window.location.pathname.substr(1);
    if (pathname !== "") {
        if (!pathname.includes('http') || !pathname.includes('https')) {
            pathname = "https://" + pathname
        }
        console.log(user.email);
        axios.post(
            'https://8xw8jht2ga.execute-api.us-east-1.amazonaws.com/default/serverlessRI',
            {email: `${user.email}`, resource: `${window.location.pathname.substr(1)}`}
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location = pathname;
    }

    return null;
}