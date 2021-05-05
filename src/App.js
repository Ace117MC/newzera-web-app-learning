// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import './catdog.css';
// import Popup from './components/popup/popup';
import {GetData,SendMessage} from './components/client/client';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [state, setState] = useState(1);
  const [pop, setPop] = useState(false);

  const togglePopup = () => {
    setPop(!pop);
  }

  return (
    <div className="artboard">
      <div className="catndog"></div>
      <div className="text1">
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
        {GetData({id:0})}
      </div>
      <div className="text2">
        {GetData({id:1})}
        {/* Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}
      </div>
      <div className="apple"></div>
      <div className="google"></div>
      {
        state===1? (
          <div id="dogpic" className="group2 animate"></div>
        ) : (
          <div id="dogpic" className="group animate"></div>
        )
      }
      {/* <div id="dogpic" className="group2"></div> */}
      <button className="about">About</button>
      <button className="blog">Blog</button>
      <button className="careers">Careers</button>
      <button className="contact" onClick={togglePopup}>Contact</button>
      <div className="typetext">Type Text</div>
      <div className="text3">
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
        {GetData({id:0})}
      </div>
      {
        state===1? (
          <div id="nav" className="nav" onClick={()=>{
            if(state===1) {
              setState(2);
            }
            else {
              setState(1);
            }
          }}>
            <div id="op1" className="option1 opselect"></div>
            <div id="op2" className="option2 opunselect"></div>
          </div>
        ) : (
          <div id="nav" className="nav" onClick={()=>{
            if(state===1) {
              setState(2);
            }
            else {
              setState(1);
            }
          }}>
            <div id="op1" className="option1 opunselect"></div>
            <div id="op2" className="option2 opselect"></div>
          </div>
        )
      }
      <a href="https://www.facebook.com/newzeraapp" className="fb"></a>
      <a href="https://www.linkedin.com/company/newzera/" className="linkedin"></a>
      <a href="https://twitter.com/newzeraapp" className="twitter"></a>
      {
        // pop && <Popup handleClose={togglePopup} />
        pop && <SendMessage handleClose={togglePopup} />
      }
    </div>
    
  );
}

export default App;
