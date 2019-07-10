/**
 * name:
 * desc: tooltip组件
 * date: 2019/7/6
 * author: kelvin
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './tooltip.scss';

class Header extends React.Component {
    render() {
        const {children, style} = this.props;
        return (
            <div className="tooltip-header" style={style}>
                {children}
            </div>);
    }
}

class Body extends React.Component {
    render() {
        const {children, style} = this.props;
        return (
            <div className="tooltip-body" style={style}>
                {children}
            </div>
        );
    }
}

export default class Tooltip extends React.Component {

    static Header = Header;
    static Body = Body;

    static propTypes = {
        arrow: PropTypes.bool,
        distance: PropTypes.number,
        position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
        disabled: PropTypes.bool,
        onMouseIn: PropTypes.func,
        onMouseOut: PropTypes.func,
        className: PropTypes.string
    };

    static defaultProps = {
        arrow: true,
        distance: 15,
        position: 'bottom',
        disabled: false,
        className: null,
        onMouseIn: null,
        onMouseOut: null
    };

    state = {
        computedPosition: '',
        overValue: 'hidden'
    };

    /*
    * @method:获取对应方位的header与body之间的距离样式对象
    * @params:distance-距离值
    **/
    distanceMarginMap(distance) {
        const {computedPosition} = this.state;
        const {position} = this.props;
        let map = {
            top: {marginBottom: distance},
            bottom: {marginTop: distance},
            left: {marginRight: distance},
            right: {marginLeft: distance}
        };
        return map[computedPosition === '' ? position : computedPosition];
    };

    handleMouseIn(e) {
        if (!this.refs.tooltipHeader.children[0].contains(e.target)) {
            // hover非 tooltip header 部分
            return;
        }
        const {distance} = this.props;
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let tooltipBodyRef = this.refs.tooltipBody;
        let tooltipHeaderRef = this.refs.tooltipHeader;
        let bodyRect = tooltipBodyRef.getBoundingClientRect();
        let headerRect = tooltipHeaderRef.getBoundingClientRect();
        // 计算最终的方位
        switch (this.props.position) {
            case 'top':
                if (headerRect.y - bodyRect.height - distance < 0) {
                    this.setState({
                        computedPosition: 'bottom'
                    });
                } else {
                    this.setState({
                        computedPosition: ''
                    });
                }
                break;
            case 'bottom':
                if (headerRect.bottom + bodyRect.height + distance > winHeight) {
                    this.setState({
                        computedPosition: 'top'
                    });
                } else {
                    this.setState({
                        computedPosition: ''
                    });
                }
                break;
            case 'left':
                if (headerRect.x - bodyRect.width - distance < 0) {
                    this.setState({
                        computedPosition: 'right'
                    });
                } else {
                    this.setState({
                        computedPosition: ''
                    });
                }
                break;
            case 'right':
                if (headerRect.right + bodyRect.width + distance > winWidth) {
                    this.setState({
                        computedPosition: 'left'
                    });
                } else {
                    this.setState({
                        computedPosition: ''
                    });
                }
                break;
            default:
                break;
        }
        this.props.onMouseIn && this.props.onMouseIn(e);
    }

    handleMouseOut(e) {
        if (!this.refs.tooltipHeader.children[0].contains(e.target)) {
            //规避不是header部分的mouseout事件
            return;
        }
        this.props.onMouseOut && this.props.onMouseOut(e);
    }

    render() {
        const {children, position, disabled, className, style, arrow, distance} = this.props;
        const {computedPosition} = this.state;
        const [Header, Body] = children;
        const tooltipCls = classnames('tooltip', className, `tooltip-${computedPosition === '' ? position : computedPosition}`);
        const tooltipHeadCls = classnames('tooltip-header-wrapper', {'disabled': disabled});
        const tooltipBodyCls = classnames('tooltip-body-wrapper', {'arrow': arrow});
        return (
            <div
                style={style}
                className={tooltipCls}>
                <div
                    ref={"tooltipHeader"}
                    className={tooltipHeadCls}
                    onMouseEnter={this.handleMouseIn.bind(this)}
                    onMouseLeave={this.handleMouseOut.bind(this)}
                >
                    {Header}
                    <div
                        className={tooltipBodyCls}
                        style={this.distanceMarginMap(distance)}
                        ref={"tooltipBody"}>
                        {Body}
                    </div>
                </div>
            </div>
        );
    }
}