import { DeleteOutlined } from '@ant-design/icons';
import { Table, Button, Popconfirm, Space} from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { retrieveTree, deleteTree } from 'Controllers/Services/Tree/module_tree.service';

// import 'Views/Asset/CSS/Table.css'

const DeleteTree=() =>{

  const [getTree, setGetTree] = useState(null);

  const trees = useSelector(state => state.trees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTree());
  }, []);

 const dataTrees= trees.map((tree) => tree)

 const removeTree = (id) => {
  dispatch(deleteTree(id))
 };

  const [columns, setColumns] = useState([
    {
      title: 'Building Name',
      dataIndex: 'name',
    },
    {
      title: 'Hierarchy',
      dataIndex: 'hierarchy',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_,record) => {
        return (
          <>
          {/* <Space> */}
          <Button shape="circle"  danger><Popconfirm title="Are you sure to delete this site?" onConfirm={() => removeTree(record.id)}  okText="Yes" cancelText="No">
          <a>{<DeleteOutlined />}</a>
          </Popconfirm></Button>
          {/* </Space> */}
         </> 
        );
      },
    },
  ]);

    return (
      <div >
        <Table
          bordered
          dataSource={dataTrees}
          columns={columns}
        />
      </div>
    );
}

export default DeleteTree;