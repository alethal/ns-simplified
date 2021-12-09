
import React from 'react';
//import ForgotPasswordPage from './components/ForgotPassword/ForgotPassword.js';
import './components/ForgotPassword/ForgotPassword.scss';

//import FormSubmitApiPage from './components/FormSubmitApi/FormSubmitApi.js';

//import SimpleFormPage from './components/SimpleForm/SimpleForm.js';

//import SimpleFormThreeForm from './components/SimpleFormThree/SimpleFormThree.js';

//import SimpleFormTwoForm from './components/SimpleFormTwo/SimpleFormTwo.js';


import MemberPWReminder from './components/MemberPWReminder/MemberPWReminder.js';


import logo from './falcon-ns-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bodyTestContent">

   <div className="bodyTestContent">
{/*dec 9 2021 */}
   <MemberPWReminder />

</div>

      </div>
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
  );
}

export default App;
