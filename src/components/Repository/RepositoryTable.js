/** @jsxImportSource @emotion/react */
import {
  Button, Input, Space, Table,
} from 'antd';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { TableWrapper } from '../../styles';

const getLocaleString = (date) => {
  const a = new Date(date);
  return a.toLocaleString();
};

const RepositoryTable = () => {
  const repositories = useSelector((rootState) => rootState.repository.repositories);
  const currentOrganization = useSelector((rootState) => rootState.repository.login);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const searchInput = useRef();

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>

        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) => (
      <a
        style={{ fontWeight: 'bold' }}
        href={`https://www.github.com/${currentOrganization}/${text}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {text}
      </a>
    ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => (a.name > b.name) - (a.name < b.name),
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Creation Date',
      dataIndex: 'createdAt',
      render: getLocaleString,
      defaultSortOrder: 'descend',
      sorter: (a, b) => (a.createdAt > b.createdAt) - (a.createdAt < b.createdAt),
    },
    {
      title: 'Last Updated Date',
      dataIndex: 'updatedAt',
      render: getLocaleString,
      sorter: (a, b) => (a.updatedAt > b.updatedAt) - (a.updatedAt < b.updatedAt),
    },
    {
      title: 'Star',
      dataIndex: 'starred',
      width: 60,
      sorter: (a, b) => (a.starred > b.starred) - (a.starred < b.starred),
    },
    {
      title: 'Watch',
      dataIndex: 'watched',
      width: 60,
      sorter: (a, b) => (a.watched > b.watched) - (a.watched < b.watched),
    },
  ];

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [repositories]);

  const onSelectChange = (selectedRowKey) => {
    setSelectedRepositories(selectedRowKey);
  };

  const rowSelection = {
    onChange: onSelectChange,
  };

  const renderTable = () => (
    <Table
      css={TableWrapper}
      columns={columns}
      rowSelection={rowSelection}
      dataSource={repositories}
      loading={isLoading}
      scroll={{ x: 'calc(500px)', y: 300 }}
    />
  );
  return {
    renderTable,
    selectedRepositories,
  };
};

export default RepositoryTable;
