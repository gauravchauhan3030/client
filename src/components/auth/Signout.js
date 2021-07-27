import React, { useEffect } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

const Signout = (props) => {
  useEffect(() => {
    props.signout();
  });
  return <div>Sorry to see you go</div>;
};

export default connect(null, actions)(Signout);
