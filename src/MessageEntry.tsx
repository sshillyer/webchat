import * as React from "react";

interface MessageEntryProps {
    username: string;
    message: string;
}

class MessageEntry extends React.Component<MessageEntryProps, {}> {
    render() {
        return (
        <div>
            <form>
                <label htmlFor="messageInput">Message</label>
                <input type="text" name="message" value="" id="messageInput"/>
                <input type="submit" value="Send"/>
            </form>
        </div>
        );
    }
}

export default MessageEntry;
