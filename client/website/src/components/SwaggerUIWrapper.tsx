import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUIWrapper = () => {
  return <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;
};

export default SwaggerUIWrapper;