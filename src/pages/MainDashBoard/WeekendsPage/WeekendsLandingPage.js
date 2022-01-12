import React, {Component} from 'react';
import './WeekendsPage.scss';
import WknsLogoHeader from "../../../components/WeekendsComponents/WknsLogoHeader";
import {Link} from "@reach/router";
import WknsComingSoon from "../../../components/WeekendsComponents/WknsComingSoon";
import WknsEpisodeCopy from "../../../components/WeekendsComponents/WknsEpisodeCopy";
import WknsPreviousWeekendsBoxes from "../../../components/WeekendsComponents/WknsPreviousWeekendsBoxes";
//import StandAlonePlayerComponent from "";
class WeekendsLandingPage extends Component {

  render() {
    return (
        <div className="wknsWeekendsPage">
            <div className="wknsPageContentContainer">

            <WknsLogoHeader />

                {/*
                <div
                    id="player-holder"
                    player-source="4"
                    player-poster=""
                    player-movie-id="1"
                    player-scene-id="1"
                ></div>
                */}
              <WknsComingSoon />

                <WknsEpisodeCopy />

                <WknsPreviousWeekendsBoxes />


                <div className="wknsNonMembUpsellWrap">
                    <Link to="/join">
                        <img
                            src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/membership-banner.jpg"
                            className="wknsNonMembUpsellImg"
                            alt="become a member"
                        />
                    </Link>
                </div>
            </div>
        </div>
     );
    }
  }

export default WeekendsLandingPage;


