import { Product } from "../product/product.model";
import { ApiStatus } from "./apistatus";

export class ApiResponse{
    status : ApiStatus = ApiStatus.FAILED;
    data : any = {'products':[]};
    msg: String = '';

    constructor(){}

}