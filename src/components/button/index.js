// createa basic button component 
// that will take in props 
// then export 

import {Link} from "react-router-dom";
import { Button } from "antd";
import './style.css';


const TheButton = (props) => {

    return (
      <Button className="words" type="text">
        <Link to={props.to}>
          {/* the name of the button */}
          {props.name}
        </Link>
      </Button>
    );
}

export default TheButton;