import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Opinion Manager API",
            version: "1.0.0",
            description: "API para un sistema de gestión de opiniones",
            contact:{
                name: "Carlos Escobar",
                email: "cescobar-2019272@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/opinionmanager/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/category/category.routes.js",
        "./src/pubication/publication.routes.js",
        "./src/comment/comment.routes.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}