import { useState } from "react"
import Form from "../components/Form"
import Input from "../components/Form/Input"
import Button from "../components/Form/Button"
import Label from "../components/Form/Label"
import ErrorMessage from "../components/ErrorMessage"




const CreatePoll = () => {

    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [expires, setExpires] = useState('');
    const [option, setOption] = useState([]);
    // const options= [option.optionA, option.optionB, option.optionC, option.optionD];

    const handleSubmit = (e: any) => (
        e.preventDefault()
    )

    return(
        <div>
            <ErrorMessage/>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="email" >Title</Label>
              <Input type="text" value={title}
               autoComplete ="off" 
               onChange={(e: any) => setTitle(e.target.value) }/>
              <Label htmlFor="password">Description</Label>
              <Input type="password" value={description}
               autoComplete ="off"
               onChange={(e: any) => setDescription(e.target.value) }/>
              <Label htmlFor="text">Option</Label>
              <Input type="text" value={option}
               autoComplete ="off"
               onChange={(e: any) => setOption(e.target.value) }/>
               <Label htmlFor="password">Password</Label>
              <Input type="date" value={expires}
               autoComplete ="off"
               onChange={(e: any) => setExpires(e.target.value) }/>
              <Button>Login</Button>
            </Form>
        </div>
    )
}

export default CreatePoll