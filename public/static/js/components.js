"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_ui_components_openai_1 = require("./packages/components/com.qcobjects.ui.components.openai");
(0, qcobjects_1.Package)("qcobjects-openai-api", [com_qcobjects_ui_components_openai_1.ChatBotComponent]);
exports.default = { chatbotComponent: com_qcobjects_ui_components_openai_1.chatbotComponent, ChatBotComponent: com_qcobjects_ui_components_openai_1.ChatBotComponent, sendMessage: com_qcobjects_ui_components_openai_1.sendMessage };
