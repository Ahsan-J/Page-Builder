
export interface IUser {
    "id": number,
    "name": string,
    "email": string,
    "username": string,
    "target": string | number,
    "password": string,
    "picture": string | null,
    "coverpicture": string | null,
    "loginstatus": string,
    "token": string,
    "status_id": number
}