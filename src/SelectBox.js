import { useState } from "react";

// Select 콤보 박스 사용하기
const FruiteSelect = () => {
    const [value, setValue] = useState("grape");
    const handleChange = e => setValue(e.target.value);
    const handleSubmit = (e) => {
        alert("선택 과일 : " + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일 선택.
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="subnit">제출</button>
        </form>
    );

}

export default FruiteSelect;