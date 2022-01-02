import { getPolls } from "../services/request";
import { useState, useEffect } from "react";

type optionType = {
    _id: any
    option: string;
    votes: number;
}

type dataType = {
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
    const [data, setData] = useState<dataType[] | null>(null)

    useEffect(() => {
        async function pollData() {
            const response = await getPolls()
            console.log(response.data)
            setData(response.data)
        }
        pollData()
    }, [])
    return (
          <div>
              {data?.map((data) => (
                  <div key={data._id}>
                    <h4>{data.title}</h4>
                    {data.options.map((option) => (
                        <div key={option._id}>   
                            <input type="checkbox"  value={option.option}/>{option.option}
                        </div>
                    ))}
                  </div>
              ))}
          </div>

    );
}

export default Polls

