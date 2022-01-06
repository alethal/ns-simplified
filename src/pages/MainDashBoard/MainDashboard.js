import React, {Component} from 'react';
import { Link, Router} from "@reach/router";

//import { globalHistory, Location, Redirect, Link, Router} from "@reach/router";


//import AvailableOptions from "../../components/AvailableOptions/AvailableOptions";
//import MainDashboardView from "./MainDashboardView/MainDashboardView";
//import MainDashboardHeader from "./MainDashboardHeader/MainDashboardHeader";
import HelpPage from "./HelpPage/HelpPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordDialogPage from "./ResetPasswordDialogPage/";
import OneRedirectPage from "./Redirects/OneRedirect.js";
import RedirectToPage from "./Redirects/RedirectToPage.js";

import {
    routes
} from "../../services/navigation/navigation.service.routes";

//import {MainDashboardController} from "./MainDashboardController";

import './MainDashboard.scss';

//import { getURLPath } from '../../services/navigation/navigation.service';
//import WeekendsPage from './WeekendsPage/WeekendsPage';
//import Pride2020 from '../PromoPages/Pride2020/Pride2020';
//import Mask4Mask from '../PromoPages/Mask4Mask/Mask4Mask';
//import MissPineapple2021 from '../PromoPages/MissPineapple2021/MissPineapple2021';
//import MrMan2020 from '../PromoPages/MrMan2020/MrMan2020';
//import Party20th from '../PromoPages/20thparty/20thparty';
//import OneRedirectPage from './Redirects/OneRedirect.js;
class MainDashboard extends Component {


    render() {

        return (
            <div className="MainDashboard">

                <div className="MainContent">
                    <div className="MainContent-inner">
                        <div className="MainContainer">
                                <Router>
                                  <HelpPage path={routes.help}/>
                                   <ForgotPasswordPage path={routes.forgotpasswordpage}/>
                                    <ResetPasswordDialogPage path={routes.resetpassworddialogpage}/>
                                     <OneRedirectPage path={routes.oneredirectpage}/>
                                     <RedirectToPage path={routes.redirecttopage}/>
                                 </Router>
<Link to="/help">Help</Link> | <Link to="/forgotpasswordpage">Forgot Password Page</Link> | <Link to="/oneredirectpage">One Redirect Page</Link> | <Link to="/redirecttopage">Redirect to page - weekends</Link>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        );
                                    }
                                    }

                                    export default MainDashboard;

