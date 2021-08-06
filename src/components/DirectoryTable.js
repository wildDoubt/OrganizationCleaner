import {useDispatch} from "react-redux";
import {Button} from "antd";
import {confirmAction} from "../reducers/state";

const DirectoryTable = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(confirmAction);
    }

    return <>
        DirectoryTable
        <Button onClick={onClick}>Next</Button>
    </>

}

export default DirectoryTable;
