// 리액트에 필요 모듈 불러오는 코드
import React from "react";

function Heading(props) {
    return <h1>{props.text}</h1>;
}

function Paragraph(props) {
    return <p>{props.text}</p>
}

const Section = props => {
    return(
        <>
        <Heading text = {props.title} />
        <Paragraph text = {props.content} />
        </>
    )
}
export default Section;