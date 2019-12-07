import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let that = this
const container = document.createElement('div')
document.body.appendChild(container)

class ConfirmReact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			title: '',
			content: '',
			onOk: () => {},
			onCancel: () => {},
			zIndex: 1000,
		}
		that = this
	}

	render () {
		const { show, title, content, onOk, onCancel, zIndex } = this.state
		return (
			<div style={{
						display: show ? null : 'none',
				}}>
				<div className="m-mask" style={{ zIndex: zIndex - 1 }}></div>
				<div className="m-dialog" style={{ zIndex: zIndex }}>
					<div className="md-dialog">
						<div className="md-dialog-title">
							<h4>{title}</h4>
							<span className="btn">
								<i className="iconfont" onClick={() => this.setState({ show: false })}>&times;</i>
							</span>
						</div>
						<div className="md-dialog-content">
							{content}
						</div>
						<div className="md-dialog-foot">
							<a href="#" className="btns" onClick={onCancel}>取消</a>
							<a href="#" className="btns btns-blue" onClick={onOk}>确定</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<ConfirmReact />, container)

export default function Confirm({
  title,
  content,
  onOk,
  onCancel,
  zIndex = 1000,
}) {
	let data = {
		show: true,
		title: title,
		content: content,
		onOk: onOk,
		onCancel: onCancel,
		zIndex,
	}
	return new Promise((resolve, rejest) => {
		that.setState(data, () => {
				resolve(true);
		});
});
}