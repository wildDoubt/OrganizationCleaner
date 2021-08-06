/** @jsxImportSource @emotion/react */
import {Table} from "antd";
import {useState} from "react";
import {TableWrapper} from "../../styles";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a
            href={'https://www.github.com/' + text}
            target="_blank"
            rel="noreferrer noopener"
        >{text}</a>
    },
    {
        title: 'Description',
        dataIndex: 'description',
    }
]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
}

const OrganizationTable = ({organizations}) => {
    const [value, setValue] = useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return <Table
        css={TableWrapper}
        rowSelection={{type: 'radio'}}
        columns={columns}
        dataSource={organizations}
    />
}

export default OrganizationTable;
