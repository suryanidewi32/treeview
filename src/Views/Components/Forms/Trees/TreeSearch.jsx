import { Input } from 'antd';
import FormTree from './formTree';

const { Search } = Input;

const Searchtree = (props) => {
    
return (
    <div>
      <div className="button"><FormTree/></div>
      <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={props.handleInput}/>
    </div>
  );
}


export default Searchtree;