import { useParams } from "react-router-dom";
// useParams는 리액트 라우터에서 URL 파라미터 값을 가져오기 위한 훅(HOOK)입니다.

const data = {
    forntend : {
        name : "곰돌이",
        description : "리액트"
    },

    backend: {
        name : "사냥꾼",
        description : "스프링부트 개발자"
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return(
        <>
        <h1>사용자 프로필</h1>
        {profile ? (
            <div>
            <h2>{profile}</h2>
            <p>{profile.description}</p>
            </div>
        ) : (
            <p>존재하지 않는 프로필이다.</p>
        )}
        </>
    );
}

export default Profile;