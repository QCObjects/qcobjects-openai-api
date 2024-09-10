"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_api_client_services_1 = require("./client_services/com.qcobjects.api.client.services");
const serviceLoaderNode_1 = __importDefault(require("./serviceLoaderNode"));
class OpenAIAPI extends qcobjects_1.BackendMicroservice {
    constructor(microservice) {
        const clientService = new com_qcobjects_api_client_services_1.OpenAIClientService();
        (0, serviceLoaderNode_1.default)(clientService)
            .then(({ service }) => {
            microservice.body = service.template;
        });
        super(microservice);
    }
}
exports.default = OpenAIAPI;
