import React from 'react';
import {DataGrid, Column, MasterDetail, Paging} from "devextreme-react/data-grid";
import UserDetails from "../UsersDetails";
import {cellAvatar, cellShow} from "../../helpers/table";

function MainTable({masterDetail, userItems}) {
    return(
        <div>
            <DataGrid
                dataSource={userItems}
                remoteOperations={true}
                id="gridContainer"
                key="id"
            >
                {masterDetail ?
                    <MasterDetail
                        enabled={true}
                        component={UserDetails}
                    />
                    : <></>}
                <Paging />
                <Column caption="Avatar"
                        width={80}
                        dataField="avatar_url"
                        cellRender={cellAvatar}
                />
                <Column caption="Username"
                        dataField="login"
                        width={120} />
                <Column caption="Bio"
                        width={160}
                        alignment="center"
                        dataField="bio" />
                <Column caption="Followers"
                        width={120}
                        alignment="center"
                        dataField="followers" />
                <Column caption="Following"
                        width={120}
                        alignment="center"
                        dataField="following" />
                <Column caption="Location"
                        width={150}
                        alignment="center"
                        dataField="location" />
                <Column caption="Website URL"
                        width={250}
                        dataField="html_url" />
                <Column caption="Name"
                        alignment="center"
                        dataField="name" />
                <Column  caption="Company"
                         width={150}
                         alignment="center"
                         dataField="company" />
                <Column caption="Action"
                        width={80}
                        dataField="login"
                        alignment="center"
                        cellRender={cellShow}
                />
            </DataGrid>
        </div>
    )
}

export default MainTable;