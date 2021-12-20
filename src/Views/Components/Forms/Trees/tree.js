import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { retrieveTree } from 'Controllers/Services/Tree/module_tree.service';

import Searchtree from 'Views/Components/Forms/Trees/TreeSearch';
import TreeNode from 'Views/Components/Forms/Trees/TreeNode';

import { Collapse } from 'antd';
const { Panel } = Collapse;

const TreeModule = () => {

  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const trees = useSelector(state => state.trees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTree());
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filter = trees.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())));

  const dataTree = filter.map((data, i) => <TreeNode key={i} hierarchy={data.hierarchy} name={data.name} />);

  return (
    <div>
      <Searchtree handleInput={handleInput} />
      <Collapse defaultActiveKey={['1']} ghost>
    <Panel header="Global" key="1">
      {dataTree}
      </Panel>
  </Collapse>

      
    </div>
  );
};
export default TreeModule;
