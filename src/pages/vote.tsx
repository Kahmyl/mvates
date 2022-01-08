import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { loadPolls } from "../redux/actions";
import { RootState }  from "../redux/reducers"
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Label from "../components/Form/Label";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

export type optionType = {
    _id: any
    option: string;
    votes: number;
}

export type dataType = {
    _id: any
    user: any; 
    title: string;
    description: number;
    options: optionType[];
    voted: [any]
    expires: Date;
    createdAT?: Date;
    updatedAT?: Date;
}
const Vote = () => {
    const [select, setSelect] = useState('')
    const {id} = useParams();
    const {data} = useSelector((store: RootState) => ({data: store.polls.data}))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPolls())
    }, [dispatch])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(select)
    }


    return(
        <div>
            {data?.map((data: dataType) => (
                <div key={data._id}>
                    {id === data._id &&
                        <Form onSubmit={handleSubmit}>
                           <p>{data.title}</p>
                           {data.options.map((option: optionType) => ( 
                            <Label key={option._id}>
                               <Input 
                               type="radio"
                               value={option._id}
                               checked={select === option._id}
                               onChange={(e: any) => setSelect(e.target.value)}/>
                              { option.option}
                            </Label>
                            ))}
                            <Button>Submit</Button>
                        </Form> 
                    }
                </div>
            ))}
        </div>
    )
}

export default Vote