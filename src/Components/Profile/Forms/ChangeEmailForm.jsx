import React from 'react';
import { Form, Input} from 'antd';
import {LightButton} from "../../common/Buttons/CustomButtons";

const layout = {
    wrapperCol: {
        span: 24,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 20
    },
    justify: 'end',
};


export const ChangeEmailForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item name="newPas">
                <Input placeholder={'Новый Пароль'}/>
            </Form.Item>
            <Form.Item name="newPas2">
                <Input placeholder={'Подтвердите Пароль'}/>
            </Form.Item>
            <Form.Item style={{marginBottom: 0}} {...tailLayout}>
                <LightButton htmlType="submit">
                     Сменить пароль
                </LightButton>
            </Form.Item>
        </Form>
    );
};