import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
//import profilepic from '../img/raj-profile.jpeg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            {/*<img src={profilepic} className="profilepic"></img>*/}
            <ReactTypingEffect className="typingeffect" text={['I\'m Raj Krishna','I am a full stack developer']} speed={150} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    