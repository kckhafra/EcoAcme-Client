import React from 'react';

export default class NewMessageForm extends React.Component{
    render(){
        return(
            <form>
                <input type="text"></input>
                <textarea placeholder="Write a message..."></textarea>
            </form>
        )
    }
}