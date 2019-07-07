/**
 * name:
 * desc: tooltip组件
 * date: 2019/7/6
 * author: kelvin
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './tooltips.scss'

class Header extends React.Component {
    render() {
        const {children, style} = this.props
        return (
            <div className="tooltip-header" style={style}>
                {children}
            </div>)
    }
}

class Body extends React.Component {
    render() {
        const {children, style} = this.props
        return (
            <div className="tooltip-body" style={style}>
                {children}
            </div>
        )
    }
}

export default class Tooltips extends React.Component {

    static Header = Header
    static Body = Body

    static propTypes = {
        position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
        disabled: PropTypes.bool
    }

    static defaultProps = {
        position: 'bottom',
        disabled: false
    }

    state = {
        isShow: false
    }

    handleShow(isShow) {
        console.log('header hover')
    }

    render() {
        const {children, position, disabled} = this.props
        const [Header, Body] = children
        const tooltipCls = classnames('tooltip', `tooltip-${position}`, {'disabled': disabled})
        return (
            <div className={tooltipCls}>
                <div className="tooltip-header-wrapper"
                     onMouseOver={this.handleShow.bind(this)}
                     onMouseOut={this.handleShow.bind(this)}
                >
                    {Header}
                    <div className="tooltip-body-wrapper">{Body}</div>
                </div>
            </div>
        )
    }
}