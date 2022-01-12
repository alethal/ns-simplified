

import React from 'react';
//import './OneRedirectComponent.scss';



class WeekendsToRedirectComponent  extends React.Component {
    render() {
        return (
            <div className="WeekendsToRedirectComponent">
                <h2>Weekends To Redirect Component</h2>
                <p>will be looking for a route with "weekends-" in it - and redirect that to "/weekends"</p>

            </div>
        );
    }
}

// Example usage: <ShoppingList name="Mark" />

export default WeekendsToRedirectComponent;
