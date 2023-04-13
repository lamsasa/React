//import { useState } from "react";
import"./App.css";


// 배열로 구성된 객체를 전달 받아 map으로 화면에 표시, 표시된 화면 영역에 이벤트 연결
const TableMap =  () => {
    const data = [
        {id : 100, name : "가", age : 21},
        {id : 200, name : "나", age : 27},
        {id : 300, name : "다", age : 25}
    ]

    const tableClickEvent = (item) => {
        console.log(item);
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => (
                        <tr key={item.id} onClick={()=>tableClickEvent(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
export default TableMap;