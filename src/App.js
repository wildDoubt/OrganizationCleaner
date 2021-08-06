/** @jsxImportSource @emotion/react */
import {useState, useEffect} from "react";
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import DirectoryTable from './components/DirectoryTable'
import Confirm from './components/Confirm'
import AppFooter from './components/AppFooter'
import {Divider} from "antd";
import {css} from '@emotion/react';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

const footer = css`
  flex: 0;
  align-self: center;
`

const grow = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  align-self: center;

`

function App() {
    // home, form, select_dir, confirm
    const [state, setState] = useState('')

    useEffect(()=>{
        console.log('update')
        setState('home');
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
                    <div css={grow}>
                        {state === 'home' && <Home setState={setState}/>}
                        {state === 'form' && <LoginForm setState={setState}/>}
                        {state === 'table' && <DirectoryTable setState={setState}/>}
                        {state === 'confirm' && <Confirm setState={setState}/>}
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
