import React from "react";

// props 기본값 설정 : defaultProps
// props 값 따로 지정하지 않으면, 보여 줄 기본 값 설정

const MyComponent = props => {
    return(
        <> <p>{props}</p>
        </>
    )
}

MyComponent.defaultProps = {
name : "기본 이름"
}

export default MyComponent;