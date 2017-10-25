import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconCamera from 'material-ui/svg-icons/image/photo-camera';
import IconSettings from 'material-ui/svg-icons/action/settings';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import IconBrightness from 'material-ui/svg-icons/image/brightness-5';
import IconPanorama from 'material-ui/svg-icons/image/panorama-fish-eye';
import IconAutoRenew from 'material-ui/svg-icons/action/autorenew';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../Style/tabs.less';

const homeConHeight = {"height": document.body.clientHeight-40-56};

const TabFirst = () =>  <MuiThemeProvider>
                            <Tabs className="tabs">
                                <Tab icon={<IconCamera />}>
                                    {/*<div className="photo-content" style={homeConHeight}>
                                      <div className="top-oper">
                                        <span><IconSettings /></span>
                                        <span><ArrowForward /></span>
                                      </div>
                                      <div className="bottom-oper">
                                        <span><IconBrightness /></span>
                                        <span><IconPanorama /></span>
                                        <span><IconAutoRenew /></span>
                                      </div>
                                    </div>*/}
                                </Tab>
                            </Tabs>
                        </MuiThemeProvider>;

export default TabFirst;
