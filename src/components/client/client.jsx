import { 
    ApolloClient,
    InMemoryCache,
    gql,
    useQuery,
    useMutation,
} from '@apollo/client';
import React,{ useState } from 'react';
import {checkmail} from '../check/check';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

const GET_DATA = gql`
    query GetData {
        texts {
            id
            info
        }
    }
`;

const ADD_MSG = gql`
    mutation SendMessage($name: String!, $email: String!, $msg: String!) {
        addMsg(name: $name, email: $email, msg: $msg) {
            id
            name
            email
            msg
        }
    }
`;

function GetData(args) {
    const {loading, error, data} = useQuery(GET_DATA);
    // console.log(data);

    if(loading) return "Loading...";
    if(error) return `Error! ${error.message}`;

    return data.texts[args.id].info;
}

// function SendMessage(args) {
//     const [addMsg, {data}] = useMutation(ADD_MSG);

//     // console.log(args);
//     return addMsg({variables: {name: args.name.toString(),email: args.email.toString(),msg: args.msg.toString()} });

//     // return args;
// }

const SendMessage = (props) => {
    const [addMsg, {data}] = useMutation(ADD_MSG);
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
                    if(checkmail(ml)) {
                        addMsg({variables: {name: nm.toString(),email: ml.toString(),msg: ms.toString()} });
                        props.handleClose();
                    }
                    else {
                        alert("Enter correct email");
                    }
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

export {client, GetData, SendMessage};