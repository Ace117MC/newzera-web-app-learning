import React,{useState} from 'react'
// import {SendMessage} from '../client/client';



const Popup = (props) => {
    const [nm, setNm] = useState('');
    const [ml, setMl] = useState('');
    const [ms, setMs] = useState('');

    return (
        <div>
            <div className="popupfilter" onClick={props.handleClose}></div>
            <div className="popup">
                <div className="contact2">
                    Contact
                </div>
                <div className="poptext">
                    Lorem Ipsum is simply dummy text of the printing
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className="popinputbox" style={{top:'136px'}}>
                        <label for="name" className="popinputlabel">Name</label>
                        <input type="text" id="name" name="name" className="popinput" placeholder="Enter your name here" onChange={(e)=>{
                            setNm(e.target.value);
                        }} />
                    </div>
                    <div className="popinputbox" style={{top:'192px'}}>
                        <label for="email" className="popinputlabel">Email</label>
                        <input type="text" id="email" name="email" className="popinput" placeholder="Enter your e-mail address here" onChange={e=> {
                            setMl(e.target.value);
                        }} />
                    </div>
                    <div className="popinputbox" style={{top:'247px'}}>    
                        <label for="message" className="popinputlabel">Message</label>
                        <input type="text" id="message" name="message" className="popinput" placeholder="Wanna share something with us?" onChange={e=>{
                            setMs(e.target.value);
                        }} />
                    </div>
                    <button type="submit" onClick={props.handleSubmit} className="popbutton" value="">Submit</button>
                    <div className="poptext2">
                        Need more info? hello@newzera.com
                    </div>
                    <a href="https://www.facebook.com/newzeraapp" className="popfb"/>
                    <a href="https://www.linkedin.com/company/newzera/" className="poplinkedin"/>
                    <a href="https://twitter.com/newzeraapp" className="poptwitter"/>
                </form>
            </div>
        </div>
    );
}

export default Popup