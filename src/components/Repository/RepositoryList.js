import { useDispatch, useSelector } from 'react-redux';
import {
  Button, message, Modal,
} from 'antd';
import { useState } from 'react';
import axios from 'axios';
import {
  confirmAction, errorAction,
  SelectOrganizationAction,
  successAction,
} from '../../reducers/state';
import RepositoryTable from './RepositoryTable';
import Title from '../Title';

const RepositoryList = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((rootState) => rootState.repository.repositories);
  const { accessToken } = useSelector((rootState) => rootState.state);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const currentOrganization = useSelector((rootState) => rootState.repository.login);

  const {
    renderTable,
    selectedRepositories,
  } = RepositoryTable();

  const hasSelected = selectedRepositories.length > 0;

  const onBackButtonClick = () => {
    dispatch(SelectOrganizationAction);
  };

  const onDeleteButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    axios.all(selectedRepositories.map((index) => axios({
      method: 'delete',
      url: `https://api.github.com/repos/${currentOrganization}/${repositories[index].name}`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })))
      .then(() => {
        dispatch(successAction);
      })
      .catch((error) => {
        if (error.response) {
          message.error(error.response.data.message);
        } else if (error.request) {
          message.error('Try again.');
        } else {
          message.error(error.message);
        }
        dispatch(errorAction);
      });

    dispatch(confirmAction);
  };

  return (
    <>
      <Title>
        Select Repositories
      </Title>
      {hasSelected
        ? (
          <div style={{
            height: '40px',
          }}
          >
            <p style={{ fontSize: 'x-large' }}>
              {`${selectedRepositories.length} selected`}
            </p>
          </div>
        )
        : <div style={{ height: '40px' }} />}

      {renderTable()}
      <div style={
        {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 40px',
        }
      }
      >
        <Button
          onClick={onBackButtonClick}
        >
          Back
        </Button>
        <Button
          type="primary"
          onClick={onDeleteButtonClick}
        >
          Delete
        </Button>
      </div>
      <Modal
        title="Confirm"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          <strong>{selectedRepositories.length}</strong>
          {' '}
          repositories will be deleted.
        </p>
      </Modal>
    </>
  );
};

export default RepositoryList;
