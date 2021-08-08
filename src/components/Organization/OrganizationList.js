/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from 'react-redux';
import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { showTableAction } from '../../reducers/state';
import OrganizationTable from './OrganizationTable';
import { getRepositoriesActionCreator, loginActionCreator } from '../../reducers/repository';
import Title from '../Title';

const OrganizationList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useSelector((rootState) => rootState.state);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    renderTable,
    currentOrganization,
  } = OrganizationTable();

  const onClick = () => {
    if (currentOrganization.length > 0) {
      setIsModalVisible(true);
    } else {
      message.error('Oops! You haven\'t select a organization!!');
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsLoading(true);
    dispatch(loginActionCreator(currentOrganization));
    axios(
      {
        url: `https://api.github.com/orgs/${currentOrganization}/repos?per_page=200`,
        method: 'get',
        headers: {
          Authorization: `token ${accessToken}`,
        },
      },
    )
      .then((response) => {
        dispatch(getRepositoriesActionCreator(response.data));
      })
      .catch((error) => {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.status);
          console.log(error.response.headers);
          message.error(error.response.data.message);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
          message.error('Try again.');
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          message.error(error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
        dispatch(showTableAction);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Title>
        Select a Organization
      </Title>
      {renderTable()}
      <Modal
        title="Confirm"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          You select
          <strong>{currentOrganization}</strong>
          . Right?
        </p>
      </Modal>
      <Button onClick={onClick} loading={isLoading}>Next</Button>
    </>
  );
};

export default OrganizationList;
