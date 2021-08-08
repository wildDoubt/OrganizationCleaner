/** @jsxImportSource @emotion/react */
import { Image, Table } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { avatarWrapper, TableWrapper } from '../../styles';

const columns = [
  {
    title: 'Name',
    dataIndex: 'login',
    render: ({ avatarUrl, name }) => (
      <div css={avatarWrapper}>
        <Image
          src={avatarUrl}
          width={16}
          preview={false}
        />
        <a
          style={{ fontWeight: 'bold' }}
          href={`https://www.github.com/${name}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {name}
        </a>
      </div>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const OrganizationTable = () => {
  const [currentOrganization, setCurrentOrganization] = useState('');
  const organizations = useSelector((rootState) => rootState.organization);

  const onSelectChange = (selectedRowKey) => {
    setCurrentOrganization(organizations[selectedRowKey].login.name);
  };

  const rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
  };

  const renderTable = () => (
    <Table
      css={TableWrapper}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={organizations}
      scroll={{ x: 'calc(300px)', y: 'calc(350px)' }}
    />
  );

  return {
    renderTable,
    currentOrganization,
  };
};

export default OrganizationTable;
