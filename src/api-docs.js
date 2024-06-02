
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions={
    swaggerDefinition:{
        info:{
            version:"1.0.0",
            title:"Docu API",
            description:"API Documentation for use",
            servers:["http://localhost"]
        }
    },
    basePath:"/",
    apis:["src/route/*.js"]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;