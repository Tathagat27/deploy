import React from "react";

import "./styles/Message.css";

const Message = (props) => {
    
    return (
        <div className="message-background" onClick={()=>props.visible(0)}>
            <div className="message">
                this is my message
            </div>
        </div>
    );
}
export default Message;

