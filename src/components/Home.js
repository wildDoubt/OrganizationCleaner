/** @jsxImportSource @emotion/react */
import {Button, Typography} from 'antd'
import {useDispatch} from "react-redux";
import {AccessFormAction} from "../reducers/state";
import {css} from "@emotion/react";

const {Title} = Typography;

const titleWrapper = css`
  font-family: 'Work Sans', sans-serif;
  font-size: 5vw;
  color: #EDEBEC;
`

const buttonWrapper = css`
  font-family: 'Open Sans Condensed', sans-serif;
  color: #FFF;
  @media screen and (min-width: 601px) {
    width: 10vw
  }
  @media screen and (max-width: 600px) {
    width: 50vw;
    height: 10vw;
  }

`

const Home = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(AccessFormAction);
    }

    return <>
        <p
            css={titleWrapper}>
            Organization Repository Manager
        </p>

        <Button
            css={buttonWrapper}
            type="primary"
            className='btn btn-white btn-animate'
            onClick={onClick}
        ><span>Go!</span></Button>
    </>

}

export default Home;
