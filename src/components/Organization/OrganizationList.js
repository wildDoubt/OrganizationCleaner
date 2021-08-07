/** @jsxImportSource @emotion/react */
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import {showTableAction} from "../../reducers/state";
import OrganizationTable from './OrganizationTable'
import {titleWrapper} from "../../styles";

const OrganizationList = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(showTableAction);
    }

    return <>
        <p css={titleWrapper}>
            Select a Organization
        </p>
        <OrganizationTable/>
        <Button onClick={onClick}>Next</Button>
    </>

}

export default OrganizationList;
