'use strict';

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/actions';

class Index extends React.Component<void, void> {

	render(): JSX.Element {
		return (
			<section className= 'container' >
				<h1>Welcome to the app!</h1>
			</section >
		);
	};
}

const mapStateToProps = state => ({
	reducer: state.reducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);