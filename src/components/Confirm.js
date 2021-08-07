import {useDispatch, useSelector} from "react-redux";
import {Button, Result} from "antd";
import {homeAction, SelectOrganizationAction} from "../reducers/state";
// 삭제 완료되면 자동으로 Home으로 이동
const Confirm = () => {
    const dispatch = useDispatch();
    const {result} = useSelector(rootState => rootState.state)
    const onClick = () => {
        dispatch(homeAction);
    }

    const onClickBackButton = () => {
        dispatch(SelectOrganizationAction);
    }

    return <>
        {result === 'success' && <Result
            status="success"
            title="Successfully deleted repositories. "
            extra={<Button
                type="primary"
                onClick={onClick}
            >Back Home</Button>}/>}
        {result === 'error' && <Result
            status="warning"
            title="There are some problems with your operation."
            extra={<Button
                type="primary"
                onClick={onClickBackButton}
            >Back</Button>}/>}

    </>

}

export default Confirm;
