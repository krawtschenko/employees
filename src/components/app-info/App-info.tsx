import "./app-info.css";
import {Component} from "react";

export class AppInfo extends Component<IAppInfo> {
	render() {
		const {employees, increased} = this.props
		return (
			<div className="app-info">
				<h1>Employee accounting in company</h1>
				<h3>Total number of employees: {employees}</h3>
				<h3>The prize will be received by: {increased}</h3>
			</div>
		);
	}
}

interface IAppInfo {
	employees: number
	increased: number
}
