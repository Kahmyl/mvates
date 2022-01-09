import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findPoll } from "../redux/actions";
import { RootState }  from "../redux/reducers"
import { useParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement)

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

const Details = () => {
    const {id} = useParams();
    const {poll} = useSelector((store: RootState) => ({poll: store.getPoll.data}))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findPoll(id))
    }, [dispatch])

    console.log(poll)


    const color = () => {
        return('#' + Math.random().toString(16).slice(2,8))
    }

    // const data = {
    //     labels: poll.options.map((option: optionType) => option.option),
    //     datasets: [
    //         {
    //           label: poll.title,
    //           backgroundColor: poll.options.map((option: optionType) => color()),
    //           borderColor: '#323643',
    //           data: poll.options.map((option: optionType) => option.votes)
    //         }
    //     ]
    // }

    

    return (
        <div>
            {/* <div key={poll._id}>
                {id === poll._id &&
                    <div>
                        <p>{poll.title}</p>
                        {poll.options && <Pie data={data}/>}
                    </div> 
                }
            </div> */}
        </div>
    )
}

export default Details