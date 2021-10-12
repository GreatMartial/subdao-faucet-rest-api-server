import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import { FaucetService } from "../services/faucet/faucet";

@Route("faucets")
export class faucetController extends Controller {
    api: FaucetServiceInterface,
    @Get("{address}")
    public async getToken(
        @Path address: string,
    ): Promise<void> {
        
        //TODO: Pass the token amount parameter through the configuration item
        return new FaucetService().sendToken(address, 1);
    }

}