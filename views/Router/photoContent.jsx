import React from 'react';
import IconSettings from 'material-ui/svg-icons/action/settings';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import IconBrightness from 'material-ui/svg-icons/image/brightness-5';
import IconPanorama from 'material-ui/svg-icons/image/panorama-fish-eye';
import IconAutoRenew from 'material-ui/svg-icons/action/autorenew';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const homeConHeight = {"height": document.body.clientHeight-40-56};

const PhotoContent = () =>  <MuiThemeProvider>
                                <div className="photo-content" style={homeConHeight}>
                                    <div className="top-oper">
                                        <span><IconSettings /></span>
                                        <span><ArrowForward /></span>
                                    </div>
                                    <div className="bottom-oper">
                                        <span><IconBrightness /></span>
                                        <span><IconPanorama /></span>
                                        <span><IconAutoRenew /></span>
                                    </div>
                                </div>
                            </MuiThemeProvider>;

export default PhotoContent;
