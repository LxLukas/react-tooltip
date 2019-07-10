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
    state = {
        mouseEventTxt: ''
    };

    render() {
        return (
            <div className="tooltip-demo">
                <h2 className="title">react-tooltip组件</h2>
                <div className="content">
                    <div className="row">
                        <div className="col">
                            <Tooltip position="right"
                                     className="test-class"
                                     distance={50}
                                     onMouseIn={() => {
                                         console.log('mouse in');
                                         this.setState({
                                             mouseEventTxt: '鼠标移入了!'
                                         });
                                     }}
                                     onMouseOut={() => {
                                         console.log('mouse out');
                                         this.setState({
                                             mouseEventTxt: ''
                                         });
                                     }}
                            >
                                <Tooltip.Header>右方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=right</p>
                                <p>使用了onMouseIn&onMouseOut回调</p>
                                <div style={{
                                    height: 50,
                                    marginTop: 20,
                                    color: '#d49e37'
                                }}>
                                    {this.state.mouseEventTxt}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="left">
                                <Tooltip.Header>左方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=left</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="top"
                                     arrow={false}
                                     distance={50}
                            >
                                <Tooltip.Header>上方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=top</p>
                                <p>arrow=false</p>
                                <p>distance=50</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="bottom">
                                <Tooltip.Header>下方</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=bottom</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tooltip position="right" disabled={true}>
                                <Tooltip.Header>禁用</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>内容过于真实，tooltips</div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=right</p>
                                <p>disabled=true</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="right" arrow={false} distance={10}>
                                <Tooltip.Header>右方列表</Tooltip.Header>
                                <Tooltip.Body>
                                    <div style={{width: 200}}>
                                        <ul className="demo-list">
                                            <li>香蕉</li>
                                            <li>苹果</li>
                                            <li>菠萝</li>
                                            <li>橙子</li>
                                        </ul>
                                    </div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=right</p>
                                <p>arrow=false</p>
                                <p>distance=10</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="top">
                                <Tooltip.Header>上方图片</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>
                                        <img
                                            style={{width: 400, height: 300}}
                                            src="https://images.pexels.com/photos/2545254/pexels-photo-2545254.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                            alt="imgalt"/>
                                    </div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=top</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="bottom">
                                <Tooltip.Header>下方图片</Tooltip.Header>
                                <Tooltip.Body>
                                    <div>
                                        <img
                                            style={{width: 250, height: 380}}
                                            src="https://images.pexels.com/photos/2526517/pexels-photo-2526517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                            alt=""/>
                                    </div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=bottom</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Tooltip position={"left"}>
                                <Tooltip.Header>
                                    <img
                                        style={{width: 250, height: 300}}
                                        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562676122&di=67bb9370bb5ae31b2e4689b66a21659f&src=http://img4q.duitang.com/uploads/item/201412/04/20141204164541_8cz4E.jpeg"
                                        alt=""/>
                                </Tooltip.Header>
                                <Tooltip.Body style={{width: 200}}>
                                    <p>作者：梵高</p>
                                    <p>作品：向日葵</p>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=left</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="top">
                                <Tooltip.Header style={{padding: 0}}>
                                    <img
                                        style={{width: 250, height: 200}}
                                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562686206697&di=03cf02dd98d67c13dfadb3ddab7f5e13&imgtype=0&src=http%3A%2F%2Fcontent.image.alimmdn.com%2Fcms%2F12602%2F152281478603331490043806.jpg%40768w_1l"
                                        alt=""/>
                                </Tooltip.Header>
                                <Tooltip.Body style={{padding: 15}}>
                                    <div>
                                        <p>作者：梵高</p>
                                        <p>作品：星空</p>
                                    </div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=top</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position={"bottom"}>
                                <Tooltip.Header>
                                    <img
                                        style={{width: 250, height: 300}}
                                        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562676122&di=67bb9370bb5ae31b2e4689b66a21659f&src=http://img4q.duitang.com/uploads/item/201412/04/20141204164541_8cz4E.jpeg"
                                        alt=""/>
                                </Tooltip.Header>
                                <Tooltip.Body>
                                    <p>作者：梵高</p>
                                    <p>作品：向日葵</p>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=bottom</p>
                            </div>
                        </div>
                        <div className="col">
                            <Tooltip position="right">
                                <Tooltip.Header style={{padding: 0}}>
                                    <img
                                        style={{width: 250, height: 200}}
                                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562686206697&di=03cf02dd98d67c13dfadb3ddab7f5e13&imgtype=0&src=http%3A%2F%2Fcontent.image.alimmdn.com%2Fcms%2F12602%2F152281478603331490043806.jpg%40768w_1l"
                                        alt=""/>
                                </Tooltip.Header>
                                <Tooltip.Body style={{padding: 15, width: 200}}>
                                    <div>
                                        <p>作者：梵高</p>
                                        <p>作品：星空</p>
                                    </div>
                                </Tooltip.Body>
                            </Tooltip>
                            <div className="info">
                                <p>position=right</p>
                            </div>
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