/** @jsxImportSource @emotion/react */
import {useDispatch, useSelector} from "react-redux";
import {Button, message, Modal} from "antd";
import {showTableAction} from "../../reducers/state";
import OrganizationTable from './OrganizationTable'
import {titleWrapper} from "../../styles";
import {getRepositoriesActionCreator, loginActionCreator} from "../../reducers/repositories";
import {useState} from "react";

const OrganizationList = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const onClick = () => {
        if(currentOrganization.length>0){
            setIsModalVisible(true);
        }
        else{
            message.error('Oops! You haven\'t select a organization!!')
        }

    }

    const handleOk = () => {
        setIsModalVisible(false);
        dispatch(showTableAction);
        dispatch(loginActionCreator(currentOrganization));
        // dispatch(getRepositoriesActionCreator());
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const {
        renderTable,
        currentOrganization,
    } = OrganizationTable();

    return <>
        <p css={titleWrapper}>
            Select a Organization
        </p>
        {/*https://api.github.com/orgs/kalgory/repos*/}
        {renderTable()}
        <Modal title="Confirm"
               visible={isModalVisible}
               onOk={handleOk}
               onCancel={handleCancel}>
            <p>You select <strong>{currentOrganization}</strong>. Right?</p>
        </Modal>
        <Button onClick={onClick}>Next</Button>
    </>

}

export default OrganizationList;
