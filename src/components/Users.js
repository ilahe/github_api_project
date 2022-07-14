import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MainTable from './common/Table';

function Users() {
    const users = useSelector(state => state.users);
    const [userItems, setUserItems] = useState(users.users);

    useEffect(() => {
        setTimeout(function(){
            setUserItems(users.users);
        }, 500);
    }, [users]);

    return (
        <>
           <MainTable masterDetail={true} userItems={userItems}/>
        </>
    )
}

export default Users;