import {Component} from "react";

import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";

import "./app.css";

export class App extends Component<{}, { data: IData[] }> {
	constructor(props: {}) {
		super(props);
		this.state = {
			data: [
				{id: crypto.randomUUID(), name: "John C.", salary: '800', increase: false},
				{id: crypto.randomUUID(), name: "Alex M.", salary: '3000', increase: true},
				{id: crypto.randomUUID(), name: "Carl W.", salary: '5000', increase: false},
			]
		}
	}

	deleteItem = (id: string) => {
		this.setState(({data}) => ({
			data: data.filter(e => e.id !== id)
		}))
	}

	addNewItem = (name: string, salary: string) => {
		this.setState(({data}) => ({
			data: [{id: crypto.randomUUID(), name, salary, increase: false}, ...data]
		}))
	}

	render() {
		const {data} = this.state
		return (
			<div className="app">
				<AppInfo/>

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList data={data} onDelete={this.deleteItem}/>
				<EmployeesAddForm addNewItem={this.addNewItem}/>
			</div>
		);
	}
}

export interface IData {
	id: string;
	name: string;
	salary: string;
	increase: boolean;
}
