export interface User {
    email:string,
    id:number,
    username:string,
    isActivated:boolean
}
export interface UserSchema{
    authData:User
}
