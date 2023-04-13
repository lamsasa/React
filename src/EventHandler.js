import { useState } from "react";

/*const EventHandler = () => {
    const [message, setMessage] = useState("Hello");
    const changeMsg = (e) =>{
        setMessage(e.target.value);
    }
    
    return(
        <>
        <h1>train</h1>
        <input type="text" name="message" placeholder="mmmmm" onChange={changeMsg} />
        <h2>입력받은 메세지 : {message} </h2>
        </>
    )
}*/
const EventHandler = () => {
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const onChangeUserName = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const onClick = () => {
        alert(userName + " : " + message);
        setMessage("");
        setUserName("");
    }
    const onKeyPress = e => {
        if(e.key === "Enter") onClick();
    }
    
    return(
        <>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="user1" value={userName} onChange={onChangeUserName} />
        <input type="text" name="message" placeholder="nnnnnnn" value={message} onChange={onChangeMessage} onKeyPress={onKeyPress} />
        <button onClick={onClick}>확인</button>
        </>
    )
}
export default EventHandler;