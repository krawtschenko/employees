import {Component} from "react";
import {IData} from "../app/App";

import "./employees-list-item.css";

export class EmployeesListItem extends Component<IEmployeesListItem> {
	render() {
		const {id, name, salary, increase, rise, onDelete, onToggleProp} = this.props;
		let classNames = "list-group-item d-flex justify-content-between";

		if (increase) {
			classNames += " increase";
		}

		if (rise) {
			classNames += " like";
		}

		return (
			<li className={classNames}>
				<span onClick={() => onToggleProp(id, 'rise')} className="list-group-item-label">{name}</span>
				<input
					type="text"
					className="list-group-item-input"
					defaultValue={salary + "$"}
				/>
				<div className="d-flex justify-content-center align-items-center">
					<button type="button" className="btn-cookie btn-sm" onClick={() => onToggleProp(id, 'increase')}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button" className="btn-trash btn-sm" onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

interface IEmployeesListItem extends IData {
	onDelete: () => void
	onToggleProp: (id: string, prop: 'increase' | 'rise') => void
}
