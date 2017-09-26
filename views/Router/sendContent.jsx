import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import { Link } from 'react-router';
import NewNews from './newNews';

const SendContent = () =>   <MuiThemeProvider>
                                <div className="send-content">
                                    <CircularProgress thickness={5} style={{  width: "100%",
                                                                position: "relative",
                                                                textAlign: "initial",
                                                                height: document.body.clientHeight-(48+56+40),
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"}} />
                                    <Link to="/newNews"><NewNews /></Link>
                                </div>
                            </MuiThemeProvider>;
export default SendContent;
