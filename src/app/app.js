import React, { Component, PropTypes } from 'react';
import Header from './components/header/header';
import styles from './app.css';

export default class extends Component {

	static propTypes = {
		children: PropTypes.node,
	};

	render() {
		return (
			<div>
				<Header />
				<div className={styles.content}>
					hello
					{ this.props.children }
				</div>
			</div>
		);
	}
}
