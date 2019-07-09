/**
 * name:
 * desc:
 * date: 2019/7/6
 * author: kelvin
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Tooltip} from 'x-react-tooltip'
import './index.scss'

class Index extends React.Component {

    handleClick() {
        console.log('click event')
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
                                     console.log('鼠标移入')
                                 }}
                                 mouseOut={() => {
                                     console.log('鼠标移出')
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
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app-demo')
)