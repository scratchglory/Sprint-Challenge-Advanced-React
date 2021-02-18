import React from "react";
import ReactDOM from "react-dom";
import DataList from "./DataList";

const Display = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="display">
            <div className="display-header">
              <button type="button" className="close-btn" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <DataList />
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Display;
