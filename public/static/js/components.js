"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.ChatBotComponent = exports.chatbotComponent = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_ui_components_openai_1 = require("./packages/components/com.qcobjects.ui.components.openai");
Object.defineProperty(exports, "chatbotComponent", { enumerable: true, get: function () { return com_qcobjects_ui_components_openai_1.chatbotComponent; } });
Object.defineProperty(exports, "ChatBotComponent", { enumerable: true, get: function () { return com_qcobjects_ui_components_openai_1.ChatBotComponent; } });
Object.defineProperty(exports, "sendMessage", { enumerable: true, get: function () { return com_qcobjects_ui_components_openai_1.sendMessage; } });
(0, qcobjects_1.Package)("qcobjects-openai-api", [com_qcobjects_ui_components_openai_1.ChatBotComponent]);
