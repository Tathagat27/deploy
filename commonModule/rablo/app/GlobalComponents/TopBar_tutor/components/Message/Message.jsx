import React from "react";

import "./styles/Message.css";
import dynamic from "next/dynamic";

const Message = (props) => {
    
    return (
        <div className="message-background" onClick={()=>props.visible(0)}>
            <div className="message">
                this is my message
            </div>
        </div>
    );
}

export default dynamic (() => Promise.resolve(Message), {ssr: false})

