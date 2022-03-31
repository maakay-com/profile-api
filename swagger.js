const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Maakay Profile API",
    description: "API documentation of maakay project.",
  },
  host: "w38piy.deta.dev",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
