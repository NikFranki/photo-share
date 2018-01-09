import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const actions = [];
const styles = {
  p: {
    height: '40px',
    lineHeight: '40px',
    borderBottom: '1px solid #ececec',
    paddingLeft: '12px',
    fontSize: '14px',
    color: '#000',
    opacity: '.8',
  }
};

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
const DialogAlert = ({ show, content, ok, cancel, onHandleOpenDialog, onHandleCloseDialog }) => {
  content = content ? content : [1,2,3];
  const actions = ok && cancel ? [
    <FlatButton
      label={ok}
      primary={true}
      onClick={() => onHandleCloseDialog()}
    />,
    <FlatButton
      label={cancel}
      primary={true}
      onClick={() => onHandleCloseDialog()}
    />
  ] : ok ? [
    <FlatButton
      label={ok}
      primary={true}
      onClick={() => onHandleCloseDialog()}
    />
  ] : cancel ? [
    <FlatButton
      label={cancel}
      primary={true}
      onClick={() => onHandleCloseDialog()}
    />
  ] : '';

  return (
    <div>
      <Dialog
        className="modal"
        actions={actions}
        modal={false}
        open={show}
        onRequestClose={() => onHandleCloseDialog()}
        bodyStyle={{padding: 0}}
      >
      <div className="content">
        <p style={styles.p}>{content[0]}</p>
        <p style={styles.p}>{content[1]}</p>
        <p style={styles.p}>{content[2]}</p>
      </div>
      </Dialog>
    </div>
  );
}

export default DialogAlert
