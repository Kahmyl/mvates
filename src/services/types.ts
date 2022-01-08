export type loginData = {
    email: string;
    password: string;
}


export type optionType = {
    option: string;
    votes: number;
}

export type pollData = {
    user: any; 
    title: string;
    description: number;
    options: optionType[];
    voted: [any]
    expires: Date;
}

export type voteData = {
    _id: any;
    answer: any;
}