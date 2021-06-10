import {Button} from "@material-ui/core";
import './Login.css';
import {auth,provider} from '../firebase.js'
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";

const Login=()=>{
     const [{state},dispatch]=useStateValue();
	const signIn=()=>{
		auth.signInWithPopup(provider).then(result=>dispatch({type:actionType.SET_USER,user:result.user})).catch(error=>alert(error.message));
	};
	return (
		<div className="login">
             <div className="login_container">
                  <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
                  <h1> Sign in to Whatsapp </h1>
                  <Button onClick={signIn}> Sign in with Google </Button>
             </div>
   </div> )
}
export default Login;