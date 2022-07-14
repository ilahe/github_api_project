import React from 'react';
import {DataGrid, Column, MasterDetail, Paging} from "devextreme-react/data-grid";
import UserDetails from "../UsersDetails";

function RepoTable({masterDetail, userItems}) {
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
                <Column caption="Name"
                        dataField="name"
                        width={280} />
                <Column caption="Url"
                        dataField="html_url" />
                <Column caption="Clone url"
                        dataField="clone_url" />
                <Column caption="Stargazers"
                        width={80}
                        alignment="center"
                        dataField="stargazers_count" />
                <Column caption="Watchers"
                        width={80}
                        alignment="center"
                        dataField="watchers_count" />
                <Column caption="Forks"
                        width={80}
                        alignment="center"
                        dataField="forks_count" />
            </DataGrid>
        </div>

    )
}

export default RepoTable;