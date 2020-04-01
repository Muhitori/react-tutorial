import React from "react";
import Square from "./Square";

interface Props {
	squares: string[];
	onClick: Function;
	winnerLine: number[];
}

interface State {
}

class Board extends React.Component<Props, State> {

	renderSquare(i: number) {
		let winnerCell = false;

		if(this.props.winnerLine !== undefined)
			winnerCell = this.props.winnerLine.includes(i);

		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
				winnerCell={winnerCell}
			/>
		);
	}

	render() {

		return (
			<div>
				<div className='board-row'>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board;
