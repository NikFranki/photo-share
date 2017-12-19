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
const DialogAlert = ({ show, content, onHandleOpenDialog, onHandleCloseDialog }) => {
  content = content ? content : [1,2,3];
  return (
    <div>
      {/*<RaisedButton label="Alert" onClick={() => onHandleOpenDialog()} />*/}
      <Dialog
        actions={actions}
        modal={false}
        open={show}
        onRequestClose={() => onHandleCloseDialog()}
        bodyStyle={{padding: 0}}
      >
      <div>
        <p style={styles.p}>{content[0]}</p>
        <p style={styles.p}>{content[1]}</p>
        <p style={styles.p}>{content[2]}</p>
      </div>
      </Dialog>
    </div>
  );
}

export default DialogAlert
