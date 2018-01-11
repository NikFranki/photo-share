import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../../Style/dialog.less';

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

const DialogContent = ({content}) => <div className="dialog-content">
                                {
                                    content.map((item, key) => <p key={key} style={styles.p}>{item}</p>)
                                }
                            </div>

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
const DialogAlert = ({ show, title, content, ok, cancel, onHandleOpenDialog, onHandleCloseDialog }) => {
  content = content || [1,2,3];
  title = title || "提示";
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
        <MuiThemeProvider>
            <div>
                <Dialog
                    className="dialog"
                    title={title}
                    actions={actions}
                    modal={false}
                    open={show}
                    onRequestClose={() => onHandleCloseDialog()}>
                    <DialogContent content={content} />
                </Dialog>
            </div>
        </MuiThemeProvider>
  );
}

export default DialogAlert;
