export interface loginFormDataType { 
    action: string,
    email: string,
    password:string
}

export interface FetchLoginDataResponseType {
  userName: string
  roles: string
  access_token: string
  expires_in: number
}