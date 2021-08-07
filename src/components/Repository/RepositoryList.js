import {useDispatch, useSelector} from "react-redux";
import {Button, Image} from "antd";
import {confirmAction} from "../../reducers/state";
import {avatarWrapper, titleWrapper} from "../../styles";
import RepositoryTable from "./RepositoryTable";
import Title from "../Title";



const RepositoryList = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(confirmAction);
    }

    const {
        renderTable
    } = RepositoryTable();

    return <>
        <Title>
            Select Repositories
        </Title>
        {/*https://api.github.com/orgs/kalgory/repos*/}
        {renderTable()}
        <Button onClick={onClick}>Next</Button>
    </>

}

export default RepositoryList;
