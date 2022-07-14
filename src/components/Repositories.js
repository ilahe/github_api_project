import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findRepos} from "../redux/actions/userActions";
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";
import Pagination from "./common/Pagination";
import RepoTable from "./common/RepoTable";

function Repositories({ownerUser, totalCount}) {
    const users = useSelector(state => state.users);
    const [userItems, setUserItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const PageSize = 3;
    const dispatch = useDispatch();

    function findReposDevextreme(key, userItems) {
        return new DataSource({
            store: new ArrayStore({
                data: userItems,
                key: "owner.login"
            }),
            filter: ["mainLogin", "=", key]
        });
    }


    useEffect(() => {
        dispatch(findRepos(users.users, currentPage));
    }, [currentPage]);

    useEffect(() => {
        if (users.userRepositories) {
            const newReposData = findReposDevextreme(ownerUser, users.userRepositories);
            setUserItems(newReposData);
        }
    }, [users]);

    return (
        <>
            <RepoTable masterDetail={false} userItems={userItems}/>
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

export default Repositories;