import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../Style/custom-dialog.less';

export default class CustomDialog extends Component {

    componentDidMount() {
        let oBtn =document.getElementById('btn');
        let oModal =document.getElementById('modal');
        let oClose =document.getElementById('close');

        oBtn.addEventListener('click', () => {
           oModal.style.display = 'block';
           let timer = setTimeout(() => {
               oModal.className='modal in';
               clearTimeout(timer);
           }, 0);
        }, false);

        oClose.addEventListener('click', () => {
            oModal.className = 'modal';
            let timer = setTimeout(() => {
                oModal.style.display='none';
                clearTimeout(timer);
            }, 200);
        }, false);
    }

    // ele 要监听点击的节点 fnc 监听到之后调用的函数
    bindClickEvt = (ele, fnc, show) => {
        document.getElementById('btn').addEventListener('click', () => {
            fnc(document.getElementById('modal'), show);
        }, false);
    }

    // 打开dialog
    isOpenDialog = (ele, show) => {
        if (show) {
            ele.style.display = 'block';
            let timer = setTimeout(() => {
                ele.className='modal in';
                clearTimeout(timer);
            }, 0);
        } else {
            ele.className = 'modal';
            let timer = setTimeout(() => {
                ele.style.display='none';
                clearTimeout(timer);
            }, 200);
        }
    }

    render() {
        return (
            <div>
                <input type='button' value='click' id='btn' />
                <div className="modal" id="modal">
                    <div className="dialog">
                        <header className="dialog-header">
                            <h3>this is dialog titel</h3>
                            <span id="close">&times;</span>
                        </header>
                        <div className="dialog-content">
                            this is dialog content
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
