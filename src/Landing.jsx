import Home from './containers/Home/index'
import About from './containers/About/index'
import Add from "./containers/Add/index"
import TheFind from "./containers/Find/index"
import Signup from "./containers/Signup/index"
import Signin from "./containers/SignIn/index"
// import TheFooter from "./components/footer"
import Test from "./test/test"
import 'animate.css'
// React-Router => allows for different routes on the clientside 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Landing  = () => {
    return(
     <>
<Router >
  
   
    {/* switch case */}
    <Switch>
            {/* Home route / root route */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/add" component={Add}/>
        <Route exact path="/find" component={TheFind} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path ="/signin" component={Signin} />
        <Route exact path="/test" component={Test} />
    </Switch>
    
</Router>

    </>
    )
}

export default Landing;