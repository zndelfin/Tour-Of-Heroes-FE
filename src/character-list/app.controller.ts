import { Controller, Get } from "@nestjs/common";

@Controller()

export class AppController {
    @Get()
    getRootRoute(){
        return "hi there!";
    }

    @Get("/test")
    getTestPage(){
        return "hello from test page!";
    }
}