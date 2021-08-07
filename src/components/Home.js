/** @jsxImportSource @emotion/react */
import {Button} from 'antd'
import {useDispatch} from "react-redux";
import {AccessFormAction} from "../reducers/state";
import {buttonWrapper, titleWrapper} from "../styles";
import Title from "./Title";

const Home = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(AccessFormAction);
    }

    return <>
        <Title>
            Organization Repository Manager
        </Title>

        <Button
            css={buttonWrapper}
            type="primary"
            className='btn btn-white btn-animate'
            onClick={onClick}
        ><span>Go!</span></Button>
    </>

}

export default Home;
