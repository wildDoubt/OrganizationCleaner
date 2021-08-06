/** @jsxImportSource @emotion/react */
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {SelectOrganizationAction} from "../../reducers/state";
import {InputWrapper} from './style'
const AccessForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        dispatch(SelectOrganizationAction)
    }

    return <Form form={form} onFinish={onFinish}>
        <Form.Item
            name="username"
            rules={[{
                required: true
            }]}>
            <Input
                css={InputWrapper}
                placeholder="Username"/>
        </Form.Item>
        <Form.Item
            name="accessToken"
            rules={[{
                required: true
            }]}>
            <Input
                css={InputWrapper}
                placeholder="Github Access Token"/>
        </Form.Item>
        <p><a
            href="https://github.com/settings/tokens"
            target="_blank"
            rel="noreferrer noopener">Get Access Token</a></p>
        <Form.Item>
            <Button
                type="primary"
                htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>

}

export default AccessForm;
