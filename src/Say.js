import React, { useState } from "react";
//useState :  리액트 훅(HOOK) 중 하나로, 함수형 컴포에서 상태를 관리할 수 있게 해준다.
// 상태 변경 시, 화면을 랜더링

const Say = () => {
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("안녕");
    const onClickLeave = () => setMessage("잘가요");
    const [color, setColor] = useState("black");

    return(
        <>
        <button onClick = {onClickEnter}>입장</button>
        <button onClick = {onClickLeave}>퇴장</button>
        <h1 style={{color}}>{message}</h1>
        <button style={{color:"red"}} onClick={() => setColor("red")}>빨강</button>
        <button style={{color:"green"}} onClick={() => setColor("red")}>초록</button>
        <button style={{color:"blue"}} onClick={() => setColor("red")}>파랑</button>
        </>
    )
};

export default Say;