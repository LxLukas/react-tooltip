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

const GAPWIDTH = 15;

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
        position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
        disabled: PropTypes.bool,
        mouseIn: PropTypes.func,
        mouseOut: PropTypes.func
    };

    static defaultProps = {
        position: 'bottom',
        disabled: false,
        mouseIn: null,
        mouseOut: null
    };

    state = {
        computedPosition: '',
        overValue: 'hidden'
    };

    handleMouseIn(e) {
        if (!this.refs.tooltipHeader.children[0].contains(e.target)) {
            // hover非 tooltip header 部分
            return;
        }
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let tooltipBodyRef = this.refs.tooltipBody;
        let tooltipHeaderRef = this.refs.tooltipHeader;
        let bodyRect = tooltipBodyRef.getBoundingClientRect();
        let headerRect = tooltipHeaderRef.getBoundingClientRect();


        switch (this.props.position) {
            case 'top':
                if (headerRect.y - bodyRect.height - GAPWIDTH < 0) {
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
                if (headerRect.bottom + bodyRect.height + GAPWIDTH > winHeight) {
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
                if (headerRect.x - bodyRect.width - GAPWIDTH < 0) {
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
                if (headerRect.right + bodyRect.width + GAPWIDTH > winWidth) {
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
        this.props.mouseIn && this.props.mouseIn();
    }

    handleMouseOut() {
        this.props.mouseOut && this.props.mouseOut();
    }

    render() {
        const {children, position, disabled} = this.props;
        const {computedPosition} = this.state;
        const [Header, Body] = children;
        const tooltipCls = classnames('tooltip', `tooltip-${computedPosition === '' ? position : computedPosition}`);
        const tooltipHeadCls = classnames('tooltip-header-wrapper', {'disabled': disabled});
        return (
            <div
                className={tooltipCls}>
                <div
                    ref={"tooltipHeader"}
                    className={tooltipHeadCls}
                    onMouseEnter={this.handleMouseIn.bind(this)}
                    onMouseLeave={this.handleMouseOut.bind(this)}
                >
                    {Header}
                    <div className="tooltip-body-wrapper" ref={"tooltipBody"}>{Body}</div>
                </div>
            </div>
        );
    }
}