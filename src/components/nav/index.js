import { Menu } from 'antd';
import './style.css';


const Nav = (props) => {
 

   
    return (
      <Menu className="navbar" mode="horizontal">
        <Menu.Item >{props.home}</Menu.Item>

        <Menu.Item>{props.about}</Menu.Item>
        <Menu.Item>{props.add}</Menu.Item>
        <Menu.Item>{props.find}</Menu.Item>
        <Menu.Item>{props.login}</Menu.Item>
        <Menu.Item>{props.test}</Menu.Item>
      </Menu>
    );
}

export default Nav;
