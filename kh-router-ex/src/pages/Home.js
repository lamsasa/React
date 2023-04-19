import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Home = () => {

    const nav = useNavigate();
    const isLogin = true;

    if(!isLogin) {
        return<Navigate to = "/Login" replace ={true} />;
    }

    return (
        <div>
            <h1>여기가 홈 입니다.</h1>
            <p>가장 먼저 보여지는 페이지 입니다.</p>
            <Link to="/about">소개</Link>
            <p style={{ TextDecoderation : "underline" }} onClick={() => nav("/about")}>소개 페이지로 이동합니다.</p>

            <ul>
                <li>
                    <Link to="/profiles/frontend">Frontend 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/backend">Backend 프로필</Link>
                </li>

            </ul>
        </div>
    );
};

export default Home;