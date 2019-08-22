import React from 'react';
import { SnackBarContext } from '../Context';

const SnackBar = (props) => (
  <SnackBarContext.Consumer>
    {snackbarContext => (snackbarContext ?
      <div className="snackbar">
        <span className="snackbar__content">
          {snackbarContext}
        </span>
        <button role="button" className="snackbar__button" onClick={() => {
          props.setMessage('');
        }}>X</button>
      </div>
      : null
    )}
  </SnackBarContext.Consumer>
);

export default SnackBar;