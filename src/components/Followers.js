import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MainTable from "./common/Table";
import {findFollowers} from "../redux/actions/userActions";
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";
import Pagination from "./common/Pagination";

function Followers({ownerUser, totalCount}) {
    const users = useSelector(state => state.users);
    const [userItems, setUserItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const PageSize = 3;
    const dispatch = useDispatch();

    function findFollowersDevextreme(key, userItems) {
        return new DataSource({
            store: new ArrayStore({
                data: userItems,
                key: "login"
            }),
            filter: ["mainLogin", "=", key]
        });
    }

    useEffect(() => {
        dispatch(findFollowers(users.users, currentPage));
    }, [currentPage]);

    useEffect(() => {
        if (users.userFollowers) {
            const newFollowersData = findFollowersDevextreme(ownerUser, users.userFollowers);
            setUserItems(newFollowersData);
        }
    }, [users]);

    return (
        <>
            <MainTable masterDetail={false} userItems={userItems}/>

                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={totalCount}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />

        </>
    )
}

export default Followers;