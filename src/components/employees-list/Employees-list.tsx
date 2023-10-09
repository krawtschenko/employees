import {Component, FC} from "react";
import {IData} from "../app/App";
import {EmployeesListItem} from "../employees-list-item/Employees-list-item";
import "./employees-list.css";

export class EmployeesList extends Component<IEmployeesList> {
	render() {
		const {data, onDelete} = this.props;
		const elements = data.map((item) => {
			const {id, ...itemProps} = item;
			return (
				<EmployeesListItem key={id} {...itemProps}
				                   onDelete={() => onDelete(id)}/>
			);
		});

		return <ul className="app-list list-group">{elements}</ul>;
	}
}

interface IEmployeesList {
	data: IData[];
	onDelete: (id: string) => void
}
