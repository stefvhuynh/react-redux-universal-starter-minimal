import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const Root = ({ children, links, onLinkClick }) => {
  const anchors = links.map((link) => {
    return (
      <a
        key={`anchor-${link.label}-${link.path}`}
        onClick={onLinkClick.bind(null, link.path)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <div>
      <h1>Root Page</h1>
      {anchors}
      {children}
    </div>
  );
};

export default connect(
  () => {
    return {
      links: [
        { label: "About", path: "about" },
        { label: "Todos", path: "todos" }
      ]
    };
  },
  (dispatch) => {
    return {
      onLinkClick: (path) => dispatch(push(path))
    };
  }
)(Root);
