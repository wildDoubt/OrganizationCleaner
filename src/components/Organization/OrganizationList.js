/** @jsxImportSource @emotion/react */
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {showTableAction} from "../../reducers/state";
import OrganizationTable from './OrganizationTable'
import {titleWrapper} from "../../styles";

const organizations = [
    {
        key:'1',
        name: 'Kalgory',
        description: 'realize your code'
    },
    {
        key:'2',
        name: 'Kalgoies',
        description: 'test organization'
    }]

const OrganizationList = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(showTableAction);
    }

    return <>
        <p css={titleWrapper}>
            Select a Organization
        </p>
        <OrganizationTable organizations={organizations}/>
        <Button onClick={onClick}>Next</Button>
    </>

}

export default OrganizationList;
