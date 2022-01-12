import React, {Component} from 'react';
import WeekendsToRedirectComponent from '../../../components/WeekendsToRedirectComponent/WeekendsToRedirectComponent.js';
//import './WeekendsToRedirect.scss';

class WeekendsToRedirectPage extends Component {



    render() {
        return (
            <div className="WeekendsToRedirectPage">
                <h2>Weekends To Redirect</h2>
                
                <WeekendsToRedirectComponent />

            </div>
        );
    }
}

export default WeekendsToRedirectPage;
//export default compose(withBackgroundChange, withTopScroll)(HelpPage, 'black');

