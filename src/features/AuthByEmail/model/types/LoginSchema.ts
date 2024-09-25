export interface LoginSchema {
    username:string,
    email:string,
    password:string,
    error?:string
    isLoading:boolean
}
