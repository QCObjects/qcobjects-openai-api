import { Controller, ControllerParams } from "qcobjects";
export declare class ChatbotController extends Controller {
    chatMessages: any;
    userInput: any;
    constructor(controllerParams: ControllerParams);
    sendMessage(): void;
    addMessage(text: string, sender: string): void;
    getBotResponse(userMessage: string): Promise<void>;
}
