import React from "react";

// 비효율적 방법 : 배열 그대로 작성
// NaviBar에서는 쓸 수 있다.

// 컴포넌틀르 만들고 props로 전달

/*const User =(props) => {

    return(
        <>
        <b>{props}</b> <span>{}</span>
        </>
    )
}*/

const MapTest = () => {

    /*const users = [
        {
            id : 100,
            userName : "천지훈",
            eMail : "@gmail.com"
        },
        {
            id : 200,
            userName : "백마리",
            eMail : "@gmail.com"
        },
        {
            id : 300,
            userName : "우녕이",
            eMail : "@gmail.com"
        }
    ];*/

    //const numbers = [1, 2, 3, 4, 5];
    //const listItems = numbers.map(e => <li><b>{e}</b></li>)


    return(
        /*<>
        <div>
            <User user = {users[0]}/>
        </div>
        <div>
        <User />
        </div>
        <div>
        <User />
        </div>
        </>*/
        <>
        </>
        //{users && users.map((user)=> <div key={user.eMail}><b>{user.userName}</b><span>{user.eMail}</span></div> ) }
    );
};
export default MapTest;