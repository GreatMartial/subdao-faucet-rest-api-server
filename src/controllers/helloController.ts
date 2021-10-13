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

@Route("/")
export class heeloController extends Controller {
    // @SuccessResponse("200", "hello world!")
    @Get()
    public async hello(): Promise<string> {
        this.setStatus(200);
        const promise = new Promise<string>((resolve, reject) => {
            resolve('hello world!')
        })
        return promise;
    }
}