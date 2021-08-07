/** @jsxImportSource @emotion/react */
import Home from './components/Home'
import AccessForm from './components/AccessForm/AccessForm'
import RepositoryList from './components/Repository/RepositoryList'
import Confirm from './components/Confirm'
import AppFooter from './components/AppFooter'
import OrganizationList from './components/Organization/OrganizationList'
import {Divider} from "antd";
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {homeAction} from "./reducers/state";
import {content, footer} from "./AppStyles";
import {
    HOME,
    ACCESS_FORM,
    CONFIRM,
    SELECT_ORGANIZATION,
    SHOW_TABLE
} from './utils/strings.json'

function App() {
    const dispatch = useDispatch();
    const {state} = useSelector((rootState) => rootState.state);

    useEffect(() => {
        dispatch(homeAction);
    }, [])

    return (
        <>
            <SwitchTransition
                mode="out-in">
                <CSSTransition
                    key={state}
                    classNames="fade"
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                >
                    <div css={content}>
                        {state === HOME && <Home/>}
                        {state === ACCESS_FORM && <AccessForm/>}
                        {state === SELECT_ORGANIZATION && <OrganizationList/>}
                        {state === SHOW_TABLE && <RepositoryList/>}
                        {state === CONFIRM && <Confirm/>}
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <div css={footer}>
                <Divider/>
                <AppFooter/>
            </div>
        </>
    );
}

export default App;
