/** @jsxImportSource @emotion/react */
import {Table} from "antd";
import {useSelector} from "react-redux";
import {TableWrapper} from "../../styles";
import {useEffect, useState} from "react";

const RepositoryTable = () => {
    const repositories = useSelector(rootState => rootState.repository.repositories)
    const currentOrganization = useSelector(rootState => rootState.repository.login)
    const [isLoading, setIsLoading] = useState(true);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (name) =>
                <a
                    style={{fontWeight: 'bold'}}
                    href={`https://www.github.com/${currentOrganization}/${name}`}
                    target="_blank"
                    rel="noreferrer noopener"
                >{name}</a>,
            sorter: (a, b) => (a.name > b.name) - (a.name < b.name)
        },
        {
            title: 'Creation Date',
            dataIndex: 'createdAt',
            defaultSortOrder: 'descend',
            sorter: (a, b) => (a.createdAt > b.createdAt)-(a.createdAt < b.createdAt)
        },
        {
            title: 'Last Updated Date',
            dataIndex: 'updatedAt',
            sorter: (a, b) => (a.updatedAt > b.updatedAt)-(a.updatedAt < b.updatedAt)
        },
        {
            title: 'Star',
            dataIndex: 'starred',
            width: 60,
            sorter: (a, b) => (a.starred > b.starred)-(a.starred < b.starred)
        },
        {
            title: 'Watch',
            dataIndex: 'watched',
            width: 60,
            sorter: (a, b) => (a.watched > b.watched)-(a.watched < b.watched)
        },
    ]

    useEffect(() => {
        setIsLoading(true);
    }, [])

    useEffect(() => {
        setIsLoading(false);
    }, [repositories])

    const onSelectChange = (selectedRowKey) => {
        console.log(selectedRowKey);
    }

    const rowSelection = {
        onChange: onSelectChange
    }

    const renderTable = () => {
        return <Table
            css={TableWrapper}
            columns={columns}
            rowSelection={rowSelection}
            dataSource={repositories}
            loading={isLoading}
            scroll={{ x: 'calc(700px)', y: 420 }}>
        </Table>
    }
    return {
        renderTable,
    }
}

export default RepositoryTable;
