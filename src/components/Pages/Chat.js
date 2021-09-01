import React from 'react';
import { ChatEngine } from 'react-chat-engine';


function Chat(props){
    return (
        <ChatEngine
			height='100vh'
			userName='Tuncay'
			userSecret='12345'
			projectID='64caeeb3-0306-4168-aeb7-0fdc77966db1'
		/>
    )
}

export default Chat;