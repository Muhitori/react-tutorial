import React from "react";

interface Props {
	value?: string;
	onClick: Function
}

interface State {
	value?: string;
}

class Square extends React.Component<Props, State> {
	render() {
		return (
			<button
				className='square'
				onClick={() => {
					this.props.onClick();
				}}>
				{this.props.value}
			</button>
		);
	}
}

export default Square;
