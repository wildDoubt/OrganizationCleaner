import {useDispatch} from "react-redux";
import {Button} from "antd";
import {confirmAction} from "../../reducers/state";
import {titleWrapper} from "../../styles";
import RepositoryTable from "./RepositoryTable";

const RepositoryList = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(confirmAction);
    }

    const {
        renderTable
    } = RepositoryTable();

    return <>
        <p css={titleWrapper}>
            Select Repositories
        </p>
        {/*https://api.github.com/orgs/kalgory/repos*/}
        {renderTable()}
        <Button onClick={onClick}>Next</Button>
    </>

}

export default RepositoryList;
