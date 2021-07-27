import React from "react";
import requireAuth from "./requireAuth";

const Feature = () => {
  return <div>This is a feature component</div>;
};

export default requireAuth(Feature);
