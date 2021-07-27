import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";

const Header = (props) => {
  const renderLinks = () => {
    if (props.auth) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };
  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
