import React from "react";

interface Props {
	value?: string;
	onClick: Function
}


class Square extends React.Component<Props> {
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
