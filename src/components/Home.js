import {Button, Typography} from 'antd'
import {useDispatch} from "react-redux";
import {AccessFormAction} from "../reducers/state";

const {Title} = Typography;

const Home = () => {
    const dispatch = useDispatch();
    const onClick = () =>{
        dispatch(AccessFormAction);
    }

    return <>
        <Title>
            Organization Repository Manager
        </Title>
        <Button onClick={onClick}>Start</Button>
    </>

}

export default Home;
