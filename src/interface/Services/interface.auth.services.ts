

export interface IParamsAuth {
    email: string;
    password: string
}

export interface IParamsRecoverPassword {
    email: string;
}



export interface IParamsRedefinePassword {
     tokenPassword?:string | null
     newPassword: string
}

export interface IResponseAuth {
    name: string
    id: string
    token: string

}

