import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui';
import IconCamera from 'material-ui/svg-icons/image/photo-camera';

const homeConHeight = {"height": document.body.clientHeight-40-56};

const TabSecond = () =>  <MuiThemeProvider>
                            <Tabs>
                            <Tab label="Instagram">
                            </Tab>
                            </Tabs>
                        </MuiThemeProvider>;

export default TabSecond;
