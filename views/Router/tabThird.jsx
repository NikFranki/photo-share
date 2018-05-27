import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconSend from 'material-ui/svg-icons/content/send';
import '../Style/tabs.less';

const TabThird = () =>  <MuiThemeProvider>
                            <Tabs className="tabs">
                                <Tab icon={<IconSend />}>
                                </Tab>
                            </Tabs>
                        </MuiThemeProvider>;

export default TabThird;
