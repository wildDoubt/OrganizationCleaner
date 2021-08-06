import {Button, Form, Input} from "antd";

const AccessForm = () => {
    return <Form>
        <Form.Item
            name="username">
            <Input
                placeholder="Username"/>
        </Form.Item>
        <Form.Item
            name="accessToken">
            <Input
                placeholder="Github Access Token"/>
        </Form.Item>
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
