'use strict';

import * as React from 'react';

interface AppProps {
	children: any;
};

class App extends React.Component<AppProps, void> {
	render() : JSX.Element {
		const { children } : any = this.props;
		return (
			<div>
				{children}
			</div>
		);
	};
};

export default App;