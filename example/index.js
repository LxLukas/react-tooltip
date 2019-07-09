/**
 * name:
 * desc:
 * date: 2019/7/6
 * author: kelvin
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Tooltip} from '../src/index';
import './index.scss';

class Index extends React.Component {
    render() {
        return (
            <div className="tooltip-demo">
                <h2 className="title">react-tooltip组件</h2>
                <div className="content">
                    <div className="row">
                        <div className="col">
                            <Tooltip position="right">
                                <Tooltip.Header>右方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                        </div>
                        <div className="col">
                            <Tooltip position="left">
                                <Tooltip.Header>左方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                        </div>
                        <div className="col">
                            <Tooltip position="top">
                                <Tooltip.Header>上方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                        </div>
                        <div className="col">
                            <Tooltip position="bottom">
                                <Tooltip.Header>下方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app-demo')
);