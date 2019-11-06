import React, { Component } from 'react';
import Settings from './Settings';

class DateMgmt extends Component {
	state = {
		day: new Date().getDate(),
		// day: 30,
		month: new Date().toLocaleString('default', { month: 'long' }),
		monthNo: new Date().getMonth(),
		lastDayCrMonth: 0,
		lastDayPreviousMonth: 0,
		previousMonth: '',
		nextMonth: ''
	};

	componentDidMount() {
		const date = new Date();
		// Day 0 is the last day in the previous month
		const lastDayPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
		const lastDayCrMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
		const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1).toLocaleString('default', {
			month: 'long'
		});
		const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1).toLocaleString('default', {
			month: 'long'
		});
		this.setState({ lastDayCrMonth, lastDayPreviousMonth, previousMonth, nextMonth });
	}

	handleIncrement = () => {
		const newDay = this.state.day + 1;
		newDay > this.state.lastDayCrMonth
			? this.setState((state) => {
					return {
						day: 1,
						previousMonth: state.month,
						month: state.nextMonth
					};
				})
			: this.setState((state) => {
					return {
						day: newDay
					};
				});
	};

	handleDecrement = () => {
		const newDay = this.state.day - 1;
		newDay === 0
			? this.setState((state) => {
					return {
						day: state.lastDayPreviousMonth,
						nextMonth: state.month,
						month: state.previousMonth
					};
				})
			: this.setState((state) => {
					return {
						day: newDay
					};
				});
	};

	render() {
		return (
			<div>
				Date (day-month): {this.state.day} - {this.state.month}
				<Settings handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} />
			</div>
		);
	}
}

export default DateMgmt;
