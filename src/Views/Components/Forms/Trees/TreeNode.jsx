import { Tree } from 'antd';

  const TreeNode = (props) => {
    const hierarchy    = props.hierarchy
    const removeGlobal = hierarchy.substr(8);
    const myArray      = removeGlobal.split("/");
    console.log(myArray)
    const name    = props.name

    return (
      <div>
        <Tree
          treeData={[
            {
              title: myArray,
              key: '0-0',
             
              children: [
                {
                  title: name,
                  key: '0-0-0',
                  // children: [
                  //   { title: floor.map((item, key)=>( <p>{ item}</p> )) , key: '0-0-0-0' },
                  // ],
                },
              ],
            },
          ]}
        />
       
 
      </div>
    );
  }


  export default TreeNode;