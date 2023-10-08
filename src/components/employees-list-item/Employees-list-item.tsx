import {Component} from "react";
import "./employees-list-item.css";

interface IEmployeesListItem {
	name: string;
	salary: string;
	increase: boolean;
}

interface IState {
	increase: boolean
	like: boolean
}

class EmployeesListItem extends Component<IEmployeesListItem, IState> {
	constructor(props: IEmployeesListItem) {
		super(props);
		this.state = {
			increase: props.increase,
			like: false
		}
	}

	onIncrease = () => {
		this.setState(state => ({
			increase: !state.increase
		}))
	}

	onLike = () => {
		this.setState(state => ({
			like: !state.like
		}))
	}

	render() {
		const {name, salary} = this.props;
		const {increase, like} = this.state
		let classNames = "list-group-item d-flex justify-content-between";

		if (increase) {
			classNames += " increase";
		}

		if (like) {
			classNames += " like";
		}

		return (
			<li className={classNames}>
				<span onClick={this.onLike} className="list-group-item-label">{name}</span>
				<input
					type="text"
					className="list-group-item-input"
					defaultValue={salary + "$"}
				/>
				<div className="d-flex justify-content-center align-items-center">
					<button type="button" className="btn-cookie btn-sm " onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button" className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;
