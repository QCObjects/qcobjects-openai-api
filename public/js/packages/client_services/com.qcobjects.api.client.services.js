"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIClientService = void 0;
const qcobjects_1 = require("qcobjects");
class OpenAIClientService extends qcobjects_1.Service {
    constructor() {
        super();
        this.name = "openai";
        this.external = true;
        this.cached = false;
        this.method = "POST";
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${qcobjects_1.CONFIG.get("OPENAI_API_KEY", "OPENAI_API_KEY")}`
        };
        this.data = {};
        this.withCredentials = false;
        this.data = {
            "model": "gpt-4o-mini",
            "messages": [{ "role": "user", "content": "hello world!" }],
            "temperature": 0.7
        };
    }
    done({ service }) {
        qcobjects_1.logger.debug(service.template);
        const result = service.template;
        service.template = JSON.stringify({
            result
        });
    }
}
exports.OpenAIClientService = OpenAIClientService;
