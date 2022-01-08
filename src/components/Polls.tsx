import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { loadPolls } from "../redux/actions";
import { RootState }  from "../redux/reducers";
import { Link } from "react-router-dom";

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

const Polls = () => {
    const {data} = useSelector((store: RootState) => ({data: store.polls.data}))
    const dispatch = useDispatch();

    console.log(data)

    useEffect(() => {
        dispatch(loadPolls())
    }, [dispatch])
    return (
          <div>
              {data?.map((data: dataType) => (
                <div key={data._id}>
                  <Link to={`/vote/${data._id}`}>
                    <h4>{data.title}</h4>
                    <span>Posted by: {data.user.name}</span>
                  </Link>
                </div>
              ))}
          </div>

    );
}

export default Polls

