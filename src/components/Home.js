import {Button, Typography} from 'antd'
const {Title} = Typography;

const Home = ({setState}) => {
    const onClick = () =>{
        setState('form')
    }

    return <>
        <Title>
            Organization Repository Manager
        </Title>
        <Button onClick={onClick}>Start</Button>
    </>

}

export default Home;
