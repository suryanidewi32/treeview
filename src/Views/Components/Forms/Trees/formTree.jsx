import { PlusOutlined } from '@ant-design/icons';
import { Modal, Button , Form, Input  } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTree } from 'Controllers/Services/Tree/module_tree.service';
import { MinusCircleOutlined} from '@ant-design/icons';

const FormTree = () => {

  const initialUserState = {
    hierarchy: "",
    name: "",
  };

  const [tree, setTree] = useState(initialUserState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

    const [form] = Form.useForm();

  const saveTutorial = values => {
    const getvalue={
      hierarchy:"/Global/"+values.hierarchy,
      name:values.name
    }

    dispatch(createTree(getvalue))
      .then(data => {
        setTree({
          hierarchy: data.hierarchy,
          name: data.name
        });
         form.resetFields();
      })
      .catch(e => {
      });
  };

  const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTree({ ...tree, [name]: "/Global/"+value });
    console.log({ ...tree, [name]: value })
  };

  
  return (
    <>
      <Button type="primary" onClick={showModal}>
      <PlusOutlined /> Add Tree
      </Button>
      <Modal title="Create a New Tree" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}   
      footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={form.submit}>
              Create Tree
            </Button>,
          ]}>
      <Form 
        id='category-editor-form'
        form={form}
        onFinish={saveTutorial}
        onSubmit={saveTutorial}
        validateMessages={validateMessages}
        name="user"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
  
       <Form.Item
          label="Hirarcy"
        >
        <p>{tree.hierarchy}</p>
        </Form.Item>


        <Form.Item
          label="Edit"
          name="hierarchy"
          rules={[
            {
              required: true,
              message: 'Please input your hierarchy!',
            },
          ]}
        >
          <Input value={tree.hierarchy} onChange={handleInputChange} name="hierarchy"/>
        </Form.Item>

        <Form.Item
          label="Site Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input value={tree.name} onChange={handleInputChange}  name="name"/>
        </Form.Item>
        
      </Form>
      

      </Modal>
    </>
  );
};

export default FormTree;