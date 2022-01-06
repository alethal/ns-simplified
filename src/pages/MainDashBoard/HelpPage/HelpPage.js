import React, {Component} from 'react';
//import {compose} from "recompose";
//import withBackgroundChange from "../../../hoc/withBackgroundChange/withBackgroundChange";
//import withTopScroll from "../../../hoc/withTopScroll/withTopScroll";

//import {createAppendableXmlChild} from "../../../services/util-service/util.service";

//import SupportService from '../../../components/SupportService/SupportService';

import './HelpPage.scss';
//import BannerSetView from '../../../components/BannerSetView/BannerSetView';

class HelpPage extends Component {

//contentRef = React.createRef();

  //async componentDidMount() {
  //  const xmlFilePath = "http://localhost:3000/frequently-asked-questions.xml";
  //  const xlsFilePath = "http://localhost:3000/frequently-asked-questions.xsl";
  //  const newEl = await createAppendableXmlChild(xmlFilePath, xlsFilePath);
  //  const {current} = this.contentRef;
  //  if (current) {
  //    current.appendChild(newEl);
  //  }
 // }

  render() {
    return (
      <div className="HelpPage">
          <h2>Help Page</h2>
        {/*<BannerSetView setName="promo"/>*/}


            {/* <div className="HelpPage-inner">
            <div className="Row JustifySpaceBetween HeadlineRow">
            <div className="Headline">FREQUENTLY ASKED QUESTIONS <span>(FAQ)</span></div>
          </div>*/}
            {/*<div className="HelpPage-container"> */}
              {/* <div ref={this.contentRef}/> */}
            {/* </div>
            </div>
            */}

        {/*<SupportService />*/}
        {/*<BannerSetView setName="tour"/>*/}
      </div>
     );
    }
  }

  export default HelpPage;
//export default compose(withBackgroundChange, withTopScroll)(HelpPage, 'black');

