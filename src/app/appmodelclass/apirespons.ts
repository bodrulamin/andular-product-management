import { ApiStatus } from "./apistatus";

export class ApiResponse{
    status : ApiStatus = ApiStatus.FAILED;
    msg: String = '';

    constructor(){}

}