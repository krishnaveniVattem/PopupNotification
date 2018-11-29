import React, { Component } from 'react';
import firebase from "firebase";

import Push from 'push.js'

        class Message extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            messages: '',
            previousData: 0,
        }

        this.gottData = this.gottData.bind(this)
        this.componentWillMount = this.componentWillMount.bind(this)
        this.renderMessage = this.renderMessage.bind(this)
    }
    componentWillMount() {

        // Initialize Firebase
        console.log("fsfs" + this.props.match.params.id)



        firebase.initializeApp({
            serviceAccount: "./serviceAccountKey.json",
            databaseURL: "https://popup-6c0a5.firebaseio.com/"
        });


        var ref = firebase.database().ref('node-client');
        var Ref = ref.child('messages');
        var messagesRef = Ref.child(this.props.match.params.id);

        messagesRef.on("value",
                this.gottData
                );
    }
    gottData(data)
    {
        this.setState({messages: data.val()})
        this.renderMessage();
    }

    renderMessage() {

        document.getElementById('main-container').innerHTML = '';
        var data = this.state.messages;

        var component = document.createElement('div');
        var count = 0;
        if (data)
        {
            Object.entries(data).forEach((value, key) => {
                if (key > 0)
                {
                    var subComponent = document.createElement('div');
                    subComponent.setAttribute('class', 'card');
                    subComponent.innerHTML = value[1].messages;
                    component.appendChild(subComponent);
                    count++;
                }
                if (key > this.state.previousData && this.state.previousData != 0)
                {
                    Push.create("New Message " + this.props.match.params.id
                            , {
                                body: value[1].messages,
                                timeout: 2000,
                                onClick: function () {
                                    window.focus();
                                    this.close();
                                }
                            });
                }

            })
            this.setState({previousData: count})
        }


        document.getElementById('main-container').appendChild(component);

    }

    render() {



        return(
                <div className="MainContainer" id="main-container">
                
                
                
                </div>

                )
    }
}
export default Message