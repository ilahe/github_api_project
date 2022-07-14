import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import ProfileOwner from "./common/ProfileOwner";
import UserDetails from "./UsersDetails";
import {findUser} from "../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";

function Profile() {
    const {login} = useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [userItems, setUserItems] = useState(users.users);

    useEffect(() => {
        dispatch(findUser(login));
    }, []);

    useEffect(() => {
        setTimeout(function(){
            setUserItems(users.users);
        }, 500);
    }, [users]);

    return (
        <div className="py-12 flex justify-between">
            <ProfileOwner user={userItems}/>
            <div className="profile_data">
                <UserDetails userItems={userItems}/>
            </div>
        </div>
    )
}

export default Profile;