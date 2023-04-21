import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
    const [data, setData] = useState(null);
    const onClick = async() => {
        try{
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7");
            console.log(response);
            setData(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <>
        <div>
            <button onClick={onClick}>불러오기</button>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
        </>
    );
};

export default Axios;