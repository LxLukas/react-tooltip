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

    handleClick() {
        console.log('click event');
    }

    render() {
        return (
            <div className="tooltip-demo">
                <h2>react-tooltip组件</h2>
                <div className="tooltip-demo-content">
                    <div className="tooltip-demo-box">
                        <Tooltip position={'left'}>
                            <Tooltip.Header>
                                <div style={{color: 'red'}} onClick={this.handleClick.bind(this)}>LEFT</div>
                            </Tooltip.Header>
                            <Tooltip.Body>Tooltip 内容</Tooltip.Body>
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-box">
                        <Tooltip position={'bottom'}
                                 mouseIn={() => {
                                     console.log('鼠标移入');
                                 }}
                                 mouseOut={() => {
                                     console.log('鼠标移出');
                                 }}>
                            <Tooltip.Header style={{padding: '10px'}}>
                                <div style={{color: 'red'}} onClick={this.handleClick.bind(this)}>BOTTOM</div>
                            </Tooltip.Header>
                            <Tooltip.Body>Tooltip 内容</Tooltip.Body>
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-box">
                        <Tooltip position={'top'}>
                            <Tooltip.Header>
                                <div style={{color: 'red'}} onClick={this.handleClick.bind(this)}>TOP</div>
                            </Tooltip.Header>
                            <Tooltip.Body style={{width: '400px'}}>
                                <div>tooltip展现的内容</div>
                            </Tooltip.Body>
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-box">
                        <Tooltip position={'right'}>
                            <Tooltip.Header>
                                <div style={{color: 'red'}} onClick={this.handleClick.bind(this)}>RIGHT</div>
                            </Tooltip.Header>
                            <Tooltip.Body>Tooltip 内容</Tooltip.Body>
                        </Tooltip>

                    </div>
                </div>
                <div className="tooltip-demo-content">
                    <div className="tooltip-demo-box">
                        <Tooltip position={'right'}>
                            <Tooltip.Header>
                                <input type="text" placeholder={"输入内容"}/>
                            </Tooltip.Header>
                            <Tooltip.Body>
                                <div>
                                    <ul className="example-list">
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                    </ul>
                                </div>
                            </Tooltip.Body>
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-box">
                        <Tooltip position={'bottom'}
                                 mouseIn={() => {
                                     console.log('鼠标移入');
                                 }}
                                 mouseOut={() => {
                                     console.log('鼠标移出');
                                 }}>
                            <Tooltip.Header style={{padding: '10px'}}>
                                <img
                                    src="https://images.pexels.com/photos/2387628/pexels-photo-2387628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="图片alt"/>
                            </Tooltip.Header>
                            <Tooltip.Body style={{marginLeft: '-50px'}}>
                                <div>图片信息：204K views</div>
                            </Tooltip.Body>
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-box">
                        <Tooltip position={'top'}>
                            <Tooltip.Header>
                                <div style={{color: 'red'}} onClick={this.handleClick.bind(this)}>TOP</div>
                            </Tooltip.Header>
                            <Tooltip.Body style={{width: '400px'}}>
                                <div>tooltip展现的内容</div>
                            </Tooltip.Body>
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-box">
                        <Tooltip position={'right'}>
                            <Tooltip.Header>
                                <div style={{color: 'red'}} onClick={this.handleClick.bind(this)}>RIGHT</div>
                            </Tooltip.Header>
                            <Tooltip.Body>Tooltip 内容</Tooltip.Body>
                        </Tooltip>

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