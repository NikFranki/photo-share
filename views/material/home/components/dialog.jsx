import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DialogAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    // const actions = [
    //   <FlatButton
    //     label="Cancel"
    //     primary={true}
    //     onClick={this.handleClose}
    //   />,
    //   <FlatButton
    //     label="Discard"
    //     primary={true}
    //     onClick={this.handleClose}
    //   />,
    // ];
    const actions = [];
    const styles = {
      p: {
        height: '40px',
        lineHeight: '40px',
        borderBottom: '1px solid #ececec',
        paddingLeft: '12px',
        fontSize: '2rem',
        color: '#000',
        opacity: '.8',
      }
    };

    return (
      <div>
        <RaisedButton label="Alert" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{padding: 0}}
        >
        <div>
          <p style={styles.p}>举报...</p>
          <p style={styles.p}>复制网址</p>
          <p style={styles.p}>打开发帖通知</p>
        </div>
        </Dialog>
      </div>
    );
  }
}
