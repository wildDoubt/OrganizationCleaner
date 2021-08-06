import {useDispatch} from "react-redux";
import {Button} from "antd";
import {showTableAction} from "../reducers/state";

const OrganizationList = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(showTableAction);
    }

    return <>
        OrganizationList
        <Button onClick={onClick}>Next</Button>
    </>

}

export default OrganizationList;
