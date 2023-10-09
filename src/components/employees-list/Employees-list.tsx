import {Component} from "react";
import {IData} from "../app/App";
import {EmployeesListItem} from "../employees-list-item/Employees-list-item";
import "./employees-list.css";

export class EmployeesList extends Component<IEmployeesList> {
	render() {
		const {data, onDelete, onToggleProp} = this.props;
		const elements = data.map((item) => {
			return (
				<EmployeesListItem key={item.id} {...item}
				                   onDelete={() => onDelete(item.id)}
				                   onToggleProp={onToggleProp}/>
			);
		});

		return <ul className="app-list list-group">{elements}</ul>;
	}
}

interface IEmployeesList {
	data: IData[];
	onDelete: (id: string) => void
	onToggleProp: (id: string, prop: 'increase' | 'rise') => void
}
