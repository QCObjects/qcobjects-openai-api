import { Package } from "qcobjects";
import {chatbotComponent,ChatBotComponent, sendMessage} from "./packages/components/com.qcobjects.ui.components.openai";
Package("qcobjects-openai-api", [ChatBotComponent]);
export {chatbotComponent,ChatBotComponent, sendMessage};