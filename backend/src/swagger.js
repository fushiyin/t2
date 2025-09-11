const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Checkin API",
            version: "1.0.0",
            description: "API documentation for Checkin backend",
        },
    },
    apis: ["./src/routes/*.js", "./src/controllers/*.js"], // adjust path as needed
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
