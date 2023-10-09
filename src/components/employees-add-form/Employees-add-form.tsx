import "./employees-add-form.css";
import {ChangeEvent, Component} from "react";

export class EmployeesAddForm extends Component<IEmployeesAddForm, IState> {
	constructor(props: IEmployeesAddForm) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			name: this.state.name, salary: this.state.salary,
			[e.target.name]: e.target.value
		})
	}

	onAddItem = () => {
		const {name, salary} = this.state
		this.props.addNewItem(name, salary)
	}

	render() {
		const {name, salary} = this.state

		return (
			<div className="app-add-form">
				<h3>Add a new employee</h3>
				<form className="add-form d-flex">
					<input
						onChange={(event) => this.onValueChange(event)}
						name="name"
						value={name}
						type="text"
						className="form-control new-post-label"
						placeholder="What is him name?"
					/>
					<input
						onChange={(event) => this.onValueChange(event)}
						name="salary"
						value={salary}
						type="number"
						className="form-control new-post-label"
						placeholder="Salary $"
					/>

					<button onClick={this.onAddItem} type="submit" className="btn btn-outline-light">
						Add
					</button>
				</form>
			</div>
		);
	}
}

interface IEmployeesAddForm {
	addNewItem: (name: string, salary: string) => void
}

interface IState {
	name: string
	salary: string
}
