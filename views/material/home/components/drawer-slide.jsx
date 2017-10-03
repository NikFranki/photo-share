import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../../../Style/drawer.less';
import Avatar from 'material-ui/Avatar';

const DrawerSlide = ({open, handleClose, onRequestChange}) => <div>
                        <Drawer className="drawer-style"
                          openSecondary={true}
                          docked={false}
                          width={'100%'}
                          open={open}
                          onRequestChange={() => handleClose()}
                        >
                          <MenuItem className="receiver-msg">
                            <div className="receivers-msg">
                              <label>收件人</label>
                              <label><img src="../../../img/search.svg" alt="search" /></label>
                            </div>
                            <div className="search-area">
                            </div>
                          </MenuItem>
                          <MenuItem className="linkman">
                            <div className="linkman-msg">
                              <Avatar
                                src="../../../img/solo.jpg"
                                size={40}
                              />
                              <p>boom</p>
                              <p>叶问</p>
                            </div>
                          </MenuItem>
                          <MenuItem className="cancel" onClick={() => handleClose()}>取消</MenuItem>
                        </Drawer>
                     </div>

export default DrawerSlide
