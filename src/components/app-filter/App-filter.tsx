import {Component} from "react";

import {Filter} from "../app/App";

import "./app-filter.css";

interface IAppFilter {
	filter: Filter
	onFilterSelect: (filter: Filter) => void
}

export class AppFilter extends Component<IAppFilter> {

	render() {
		const buttonsData = [
			{name: Filter.All, label: 'All employees'},
			{name: Filter.Rise, label: 'Up for promotion'},
			{name: Filter.More, label: 'Salary more than $1000'}
		]

		const buttons = buttonsData.map(({name, label}) => {
			const active = this.props.filter === name
			const clazz = active ? 'btn-light' : 'btn-outline-light'

			return (
				<button onClick={() => this.props.onFilterSelect(name)}
				        key={name}
				        type="button"
				        className={`btn ${clazz}`}>
					{label}
				</button>
			)
		})

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}
