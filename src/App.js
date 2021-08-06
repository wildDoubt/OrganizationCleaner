/** @jsxImportSource @emotion/react */
import {useState} from "react";
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import DirectoryTable from './components/DirectoryTable'
import Confirm from './components/Confirm'
import AppFooter from './components/AppFooter'
import {Divider} from "antd";
import {css} from '@emotion/react';

const footer = css`
  flex:1;
  align-self: center;
`

const grow = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex:8;
  align-self: center;
  
`

function App() {
    // home, form, select_dir, confirm
    const [state, setState] = useState('home')
    return (
        <>
            <div css={grow}>
                {state === 'home' && <Home setState={setState}/>}
                {state === 'form' && <LoginForm setState={setState}/>}
                {state === 'table' && <DirectoryTable setState={setState}/>}
                {state === 'confirm' && <Confirm setState={setState}/>}
            </div>
            <div css={footer}>
                <Divider/>
                <AppFooter/>
            </div>
        </>
    );
}

export default App;
