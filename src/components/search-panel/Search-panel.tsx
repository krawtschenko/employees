import {ChangeEvent, Component} from "react";

import "./search-panel.css";

interface ISearchPanel {
	onUpdateSearch: (term: string) => void
}

interface IState {
	term: string
}

export class SearchPanel extends Component<ISearchPanel, IState> {
	state = {
		term: ''
	}

	onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const term = e.currentTarget.value
		this.setState({term})
		this.props.onUpdateSearch(term)
	}

	render() {
		const {term} = this.state

		return (
			<input
				onChange={(event) => this.onChangeHandler(event)}
				value={term}
				type="text"
				className="form-control search-input"
				placeholder="Look for an employee"
			/>
		);
	}
}
