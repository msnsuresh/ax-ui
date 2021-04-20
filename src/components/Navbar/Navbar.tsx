/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/icons/logo.svg"
            alt=""
            width="95"
            height="35"
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
