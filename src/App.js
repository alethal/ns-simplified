import React from 'react';
//import {Helmet} from "react-helmet";
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

//import LoadingMask from "./components/LoadingMask/LoadingMask";
import MainDashboard from './pages/MainDashBoard/MainDashboard';
//import {MiniPlayerContainer} from "@falconstudios/ns-player";
//import OutDatedBrowserComponent from "./pages/OutDatedBrowserComponent/OutDatedBrowserComponent";

//import 'video.js/dist/video-js.css';
//import '@videojs/themes/dist/fantasy/index.css';
//import 'videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css';
//import 'react-image-lightbox/style.css';
//import Div100vh from 'react-div-100vh';
//import {isIE} from 'react-device-detect';
//import TagManager from 'react-gtm-module';

//import './styles/main.scss';
//import './App.scss';

//const tagManagerArgs = {
 // gtmId: 'GTM-M7XV3FB'
//}
//TagManager.initialize(tagManagerArgs)


import logo from './falcon-ns-logo.png';
import './App.css';


function App() {
 // window.dataLayer.push({ event: 'pageview' });

  return (
    //<Div100vh>
      <div className="App">
       {/* <Helmet>
          <meta name="description" content={process.env.REACT_APP_SITE_DESCRIPTION}/>
        </Helmet>
        <Suspense fallback={<div className="SuspenseLoader">Loading...</div>}>
          {isIE ? <OutDatedBrowserComponent/> : <MainDashboard/>}
        </Suspense>
        <MiniPlayerContainer/>
        <LoadingMask/>
        */}
        <MainDashboard/>

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Stripped Down NS - Deployed to GitHub Pages
        </p>
        <a
          className="App-link"
          href="https://ns-cubik.gitlab.io/ns-simplified"
          target="_blank"
          rel="noopener noreferrer"
        >
         https://ns-cubik.gitlab.io/ns-simplified
        </a>
        <p>Mirroring Enabled / Node Version Added</p>
      </header>

      
      </div>
    //</Div100vh>
  );
}

export default App;




