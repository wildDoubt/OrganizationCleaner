/** @jsxImportSource @emotion/react */
import {Image, Table} from "antd";
import {useEffect, useState} from "react";
import {avatarWrapper, TableWrapper} from "../../styles";
import {useSelector} from "react-redux";

const columns = [
    {
        title: 'Name',
        dataIndex: 'login',
        render: ({avatar_url, name}) => <div css={avatarWrapper}>
            <Image src={avatar_url}
                   width={16}
                   preview={false}/>
            <a
                style={{fontWeight: 'bold'}}
                href={'https://www.github.com/' + name}
                target="_blank"
                rel="noreferrer noopener"
            >{name}</a>
        </div>
    },
    {
        title: 'Description',
        dataIndex: 'description',
    }
]

const OrganizationTable = () => {
    const [value, setValue] = useState(1);
    const organizations = useSelector((rootState) => {
        return rootState.organizations
    })

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            {console.log(organizations)}
            <Table
                css={TableWrapper}
                rowSelection={{type: 'radio'}}
                columns={columns}
                dataSource={organizations}
            />
        </>
    )
}

export default OrganizationTable;
