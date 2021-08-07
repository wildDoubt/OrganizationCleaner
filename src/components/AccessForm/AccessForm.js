/** @jsxImportSource @emotion/react */
// https://api.github.com/user/orgs?access_token=ACCESS_TOKEN
// https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/
import {Button, Form, Input, message} from "antd";
import {useDispatch} from "react-redux";
import {SelectOrganizationAction, tokenActionCreator} from "../../reducers/state";
import {InputWrapper} from './style'
import axios from 'axios';
import {useState} from "react";
import {getOrganizationsActionCreator} from "../../reducers/organization";
import {textInBody} from "../../styles";

const config = {
    url: 'https://api.github.com/user/orgs',
    method: 'get',
}

const AccessForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        setLoading(true);
        dispatch(tokenActionCreator(values.accessToken));
        axios(
            {
                ...config,
                headers: {
                    'Authorization': `token ${values.accessToken}`
                }
            }
        )
            .then(response => {
                dispatch(SelectOrganizationAction)
                dispatch(getOrganizationsActionCreator(response.data));
            })
            .catch(error => {
                if (error.response) {
                    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    message.error(error.response.data.message);
                }
                else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                    // Node.js의 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                    message.error('Try again.')
                }
                else {
                    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                    message.error(error.message);
                }
            })
            .finally(() => setLoading(false))


    }

    return <Form form={form} onFinish={onFinish}>
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
            css={textInBody}
            href="https://github.com/settings/tokens"
            target="_blank"
            rel="noreferrer noopener">Get Access Token</a></p>
        <Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                loading={loading}>
                Submit
            </Button>
        </Form.Item>
    </Form>

}

export default AccessForm;
