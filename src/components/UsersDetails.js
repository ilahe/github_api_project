import React, {useEffect, useState} from 'react';
import Following from "./Following";
import Repositories from "./Repositories";
import Followers from './Followers'

function UserDetails(props) {
    const [openTab, setOpenTab] = useState(1);
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(props.userItems ? props.userItems[0] : props.data.data)
    }, [props]);

    if (userData?.followers) {
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap pt-2 flex-row" role="tablist">
                            <li className={"border px-4 py-4 text-center " + (openTab === 1
                                ? "bg_gray" : "")}>
                                <a className={"text-sm " + (openTab === 1
                                    ? "text-white"
                                    : "text-gray-600")}
                                   onClick={e => {
                                       e.preventDefault();
                                       setOpenTab(1);
                                   }}
                                   data-toggle="tab" href="#followers" role="tablist">
                                    Followers ({userData.followers})
                                </a>
                            </li>
                            <li className={"border  px-4 py-4 text-center " + (openTab === 2
                                ? "bg_gray" : "")}>
                                <a className={"text-sm leading-normal " + (openTab === 2
                                    ? "text-white"
                                    : "text-gray-600")}
                                   onClick={e => {
                                       e.preventDefault();
                                       setOpenTab(2);
                                   }}
                                   data-toggle="tab" href="#following" role="tablist">
                                    Following ({userData.following})
                                </a>
                            </li>
                            <li className={"border  px-4 py-4 text-center " + (openTab === 3
                                ? "bg_gray" : "")}>
                                <a className={"text-sm leading-normal " + (openTab === 3
                                    ? "text-white"
                                    : "text-gray-600")}
                                   onClick={e => {
                                       e.preventDefault();
                                       setOpenTab(3);
                                   }}
                                   data-toggle="tab" href="#repositories" role="tablist">
                                    Repositories ({userData.public_repos})
                                </a>
                            </li>
                        </ul>
                        <div className="border relative flex flex-col min-w-0 break-words bg-white w-full">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="followers">
                                        <Followers ownerUser={userData.login} totalCount={userData.followers}/>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="following">
                                        <Following ownerUser={userData.login} totalCount={userData.following}/>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="repositories">
                                        <Repositories ownerUser={userData.login} totalCount={userData.public_repos}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default UserDetails;