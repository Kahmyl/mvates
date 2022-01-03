import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../components/Form/Input";
import Form from "../components/Form";
import Button from "../components/Form/Button";
import Label from "../components/Form/Label";
import { loginUser, logoutUser } from "../redux/actions";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const data = {email, password}

    const handleSubmit =(e: any) => {
        e.preventDefault();
        dispatch(loginUser(data))
    }

  return(
      <>
        <ErrorMessage/>
        <Form onSubmit={handleSubmit}>
          <Label >Email</Label>
          <Input type="text" value={email} 
           onChange={(e: any) => setEmail(e.target.value) }/>
          <Label>Password</Label>
          <Input type="password" value={password} 
           onChange={(e: any) => setPassword(e.target.value) }/>
          <Button>Login</Button>
        </Form>
      </>
  );
}

export default Login;