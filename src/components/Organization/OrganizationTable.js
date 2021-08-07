/** @jsxImportSource @emotion/react */
import {Image, Table} from "antd";
import {useState} from "react";
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
    const [currentOrganization, setCurrentOrganization] = useState('');
    const organizations = useSelector((rootState) => {
        return rootState.organization
    })

    const onSelectChange = selectedRowKey => {
        console.log(organizations[selectedRowKey].login.name)
        setCurrentOrganization(organizations[selectedRowKey].login.name);
        console.log(selectedRowKey)
    }


    const rowSelection = {
        type: 'radio',
        onChange: onSelectChange
    }

    const renderTable = () => {
        return <Table
            css={TableWrapper}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={organizations}
        />
    }

    return {
        renderTable,
        currentOrganization
    }
}

export default OrganizationTable;
