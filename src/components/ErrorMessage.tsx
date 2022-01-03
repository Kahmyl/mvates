import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export type errorType = {
    message: any;
}

export const Error = () => {
    return useSelector((store: RootState) => ({message: store.error.message}))  
}

const ErrorMessage = () => {
    const { message }: errorType = Error()
    if (message) {console.log(message)}
    return(
        <>{message && <div>{message}</div>}</>
    )
}

export default ErrorMessage