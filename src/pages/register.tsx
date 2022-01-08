import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/reducers";
import Input from "../components/Form/Input";
import Form from "../components/Form";
import Button from "../components/Form/Button";
import Label from "../components/Form/Label";
import { loginUser } from "../redux/actions";
import ErrorMessage from "../components/ErrorMessage";


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const data = {email, password}

    const {isAuth} = useSelector((store: RootState) => ({isAuth: store.auth.isAuth}))

    const handleSubmit =(e: any) => {
        e.preventDefault();
        dispatch(loginUser(data))
    }

    if (isAuth) return <Navigate to="/"/>

  return(
      <>
        <ErrorMessage/>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name" >Name</Label>
          <Input type="text" value={name}
           autoComplete ="off" 
           onChange={(e: any) => setName(e.target.value) }/>
          <Label htmlFor="email" >Email</Label>
          <Input type="text" value={email}
           autoComplete ="off" 
           onChange={(e: any) => setEmail(e.target.value) }/>
          <Label htmlFor="password">Password</Label>
          <Input type="password" value={password}
           autoComplete ="off"
           onChange={(e: any) => setPassword(e.target.value) }/>
          <Button>Register</Button>
        </Form>
      </>
  );
}

export default Register;