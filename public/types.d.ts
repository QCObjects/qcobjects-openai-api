declare module "js/config" { }
declare module "js/packages/client_services/com.qcobjects.api.client.services" {
    import { Service } from "qcobjects";
    type StandardResponse = {
        request: XMLHttpRequest;
        service: Service;
    };
    export class OpenAIClientService extends Service {
        name: string;
        url: string;
        external: boolean;
        cached: boolean;
        method: string;
        headers: {
            "Content-Type": string;
            Authorization: string;
        };
        data: {};
        withCredentials: boolean;
        constructor();
        done({ service }: StandardResponse): void;
    }
}
declare module "js/packages/serviceLoaderNode" {
    import { Service } from "qcobjects";
    const serviceLoaderNode: (service: Service) => Promise<{
        request: any;
        service: Service;
    }>;
    export default serviceLoaderNode;
}
declare module "js/packages/com.qcobjects.api.services" {
    import { BackendMicroservice } from "qcobjects";
    class OpenAIAPI extends BackendMicroservice {
        post(formData?: object | string): void;
    }
    export default OpenAIAPI;
}
declare module "js/package" {
    import OpenAIAPI from "js/packages/com.qcobjects.api.services";
    export default OpenAIAPI;
}
declare module "js/index" {
    import "js/config";
    import api from "js/package";
    export default api;
}
declare module "static/js/packages/controllers/com.qcobjects.ui.controllers.openai" {
    import { Controller, ControllerParams } from "qcobjects";
    export class ChatbotController extends Controller {
        chatMessages: any;
        userInput: any;
        constructor(controllerParams: ControllerParams);
        closeChat(): void;
        sendMessage(): void;
        addMessage(text: string, sender: string): void;
        getBotResponse(userMessage: string): Promise<void>;
    }
}
declare module "static/js/packages/components/com.qcobjects.ui.components.openai" {
    import { Component } from "qcobjects";
    class ChatBotComponent extends Component {
        tplsource: string;
        shadowed: boolean;
        template: string;
    }
    const chatbotComponent: ChatBotComponent;
    function sendMessage(): void;
    export { chatbotComponent, ChatBotComponent, sendMessage };
}
declare module "static/js/components" {
    import { chatbotComponent, ChatBotComponent, sendMessage } from "static/js/packages/components/com.qcobjects.ui.components.openai";
    export { chatbotComponent, ChatBotComponent, sendMessage };
}
declare module "static/js/packages/services/com.qcobjects.api.client.services.openai.proxy" {
    import { Service } from "qcobjects";
    type StandardResponse = {
        request: XMLHttpRequest;
        service: Service;
    };
    export class ProxyOpenAIService extends Service {
        name: string;
        url: string;
        external: boolean;
        cached: boolean;
        method: string;
        headers: {
            "Content-Type": string;
        };
        data: {};
        withCredentials: boolean;
        constructor();
        done({ service }: StandardResponse): void;
    }
}
declare module "static/js/services" {
    import { ProxyOpenAIService } from "static/js/packages/services/com.qcobjects.api.client.services.openai.proxy";
    export { ProxyOpenAIService };
}
