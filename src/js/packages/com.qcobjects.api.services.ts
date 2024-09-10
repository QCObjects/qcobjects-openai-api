"use strict";

import { BackendMicroservice, CONFIG, Microservice, Service } from "qcobjects";
import {OpenAIClientService} from "./client_services/com.qcobjects.api.client.services";
import serviceLoaderNode from "./serviceLoaderNode";

class OpenAIAPI extends BackendMicroservice {

  constructor(microservice:Microservice){
    const clientService = new OpenAIClientService();
    serviceLoaderNode(clientService)
    .then(({service})=>{
      microservice.body = service.template;
    });
    super(microservice);
  }

}

export default OpenAIAPI;