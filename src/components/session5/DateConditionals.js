import React, { Component } from 'react';

class DateConditionals extends Component {
	state = {
		seconds: new Date().getSeconds(),
		// minutes: new Date().getMinutes(),
		minutes: 31,
		// hours: new Date().getHours(),
		hours: 7,
		day: new Date().getDay()
		// day: 6
	};

	render() {
		const { day, hours, minutes, seconds } = this.state;
		const { styles } = this.props;
		return (
			<div style={styles.componentStyling}>
				<h2 className="homeworkTitle">Homework Session 5</h2>
				<h3>Exercise 1</h3>
				day {day} - {hours}:{minutes}:{seconds}
				<p>{seconds < 30 ? 'First half of the minute' : 'Second half of the minute'}</p>
				<p>
					{day === 6 || day === 7 ? (
						'Yay, weekend! partyyy!'
					) : hours > 9 && hours < 18 ? (
						'Working hard… or hardly working? :D'
					) : (
						''
					)}
				</p>
				<p>
					{hours < 7 || (hours === 23 && minutes > 30) || (hours === 7 && minutes < 30) ? (
						'I love sleep.'
					) : (
						''
					)}
				</p>
				<p>{hours === 7 && minutes > 30 && minutes < 45 ? 'Wakey, wakey!' : ''}</p>
				<p>
					{minutes <= 30 ? (
						`Este ora ${hours} si ${minutes} minute`
					) : (
						`Este ora ${hours + 1} fara ${60 - minutes} minute`
					)}
				</p>
			</div>
		);
	}
}

export default DateConditionals;
