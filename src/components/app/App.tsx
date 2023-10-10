import {Component} from "react";

import {AppInfo} from "../app-info/App-info";
import {SearchPanel} from "../search-panel/Search-panel";
import {AppFilter} from "../app-filter/App-filter";
import {EmployeesList} from "../employees-list/Employees-list";
import {EmployeesAddForm} from "../employees-add-form/Employees-add-form";

import "./app.css";

export interface IData {
	id: string
	name: string
	salary: string
	increase: boolean
	rise: boolean
}

interface IState {
	data: IData[]
	term: string
	filter: Filter
}

export enum Filter {
	All = 'All',
	Rise = 'Rise',
	More = 'More'
}

export class App extends Component<{}, IState> {
	state = {
		data: [
			{id: crypto.randomUUID(), name: "John C.", salary: '800', increase: false, rise: false},
			{id: crypto.randomUUID(), name: "Alex M.", salary: '3000', increase: true, rise: false},
			{id: crypto.randomUUID(), name: "Carl W.", salary: '5000', increase: false, rise: true},
			{id: crypto.randomUUID(), name: "McCree J.", salary: '100', increase: true, rise: false},
			{id: crypto.randomUUID(), name: "Gandalf G.", salary: '670', increase: false, rise: true},
			{id: crypto.randomUUID(), name: "Thrall O.", salary: '8702', increase: false, rise: true}
		],
		term: '',
		filter: Filter.All
	}

	deleteItem = (id: string) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}))
	}

	addNewItem = (name: string, salary: string) => {
		this.setState(({data}) => ({
			data: [{id: crypto.randomUUID(), name, salary, increase: false, rise: false}, ...data]
		}))
	}

	onToggleProp = (id: string, prop: 'increase' | 'rise') => {
		this.setState(({data}) => ({
			data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
		}))
	}

	searchEmp = (data: IData[], term: string) => {
		if (term.length === 0) {
			return data
		} else {
			return data.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
		}
	}

	onUpdateSearch = (term: string) => {
		this.setState({term})
	}

	onFilterSelect = (filter: Filter) => {
		this.setState({filter})
	}

	filterPost = (data: IData[], filter: Filter) => {
		switch (filter) {
			case Filter.Rise:
				return data.filter(item => item.rise)
			case Filter.More:
				return data.filter(item => Number(item.salary) > 1000)
			default:
				return data
		}
	}

	render() {
		const {data, term, filter} = this.state
		const employees = this.state.data.length
		const increased = this.state.data.filter(item => item.increase).length
		const visibleData = this.filterPost(this.searchEmp(data, term), filter)

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>

				<EmployeesList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm addNewItem={this.addNewItem}/>
			</div>
		);
	}
}