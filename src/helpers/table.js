import React from "react";
import showIcon from "../assets/images/show.svg";

export function cellAvatar(data) {
    return <img className="w-8 h-8 rounded-full" src={data.value } alt="avatar" />;
};

export function cellShow(data) {
    return (
        <a href={'/user/'+data.value}>
            <img className="w-5 h-5 m-auto rounded-full" src={showIcon} alt="show"/>
        </a>

    );
};