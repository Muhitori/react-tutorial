import React from "react";

interface Props {
	value?: string;
	onClick: Function
	winnerCell: boolean
}


class Square extends React.Component<Props> {
	render() {
		let squareClass = 'square';
		if (this.props.winnerCell) {
			squareClass += ' winner';
		}
		return (
			<button
				className={squareClass}
				onClick={() => {
					this.props.onClick();
				}}>
				{this.props.value}
			</button>
		);
	}
}

export default Square;
