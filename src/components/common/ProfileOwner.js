import React, {useEffect, useState} from 'react';

function ProfileOwner(props) {
    const [userOwner, setUserOwner] = useState();

    useEffect(() => {
        setUserOwner(props.user[0])
    }, [props]);

    if (userOwner?.login) {
        return (
            <>
                <div className="pt-8 px-8 pb-7 bg-white rounded-sm profile_owner">
                    <div className="w-20 h-20 mx-auto">
                        <img className="rounded-full " src={userOwner.avatar_url}
                             alt={userOwner.name}/>
                    </div>
                    <div
                        className="pt-4 text-base text-center font-semibold">{userOwner.name ? userOwner.name : userOwner.login}</div>
                    <div className="pt-1 text-base text-center text-gray-400">{userOwner.bio}</div>
                    <ul className="pt-7 text-profile">
                        <li className="w-full py-2">
                            <div className="text-gray-400">Location</div>
                            <div className="font-semibold">{userOwner.location ? userOwner.location : "-"}</div>
                        </li>
                        <li className="w-full py-2">
                            <div className="text-gray-400">Website URL</div>
                            <div className="font-semibold">{userOwner.html_url ? userOwner.html_url : "-"}</div>
                        </li>
                        <li className="w-full py-2">
                            <div className="text-gray-400">Company</div>
                            <div className="font-semibold">{userOwner.company ? userOwner.company : "-"}</div>
                        </li>
                        <li className="w-full py-2">
                            <div className="text-gray-400">Owned private repos</div>
                            <div className="font-semibold">{userOwner.owned_private_repos ? userOwner.owned_private_repos : "-"}</div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default ProfileOwner;