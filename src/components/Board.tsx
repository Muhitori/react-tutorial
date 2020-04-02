import React from "react";
import Square from "./Square";

interface Props {
	squares: string[];
	onClick: Function;
	winnerLine: number[];
}

class Board extends React.Component<Props> {
	renderSquare(i: number) {
		let winnerCell = false;

		if (this.props.winnerLine !== undefined)
			winnerCell = this.props.winnerLine.includes(i);

		return (
			<Square
				key={i}
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
				winnerCell={winnerCell}
			/>
		);
	}

	render() {
		let cells: JSX.Element[] = [];

		let k = 0;
		for (let i = 0; i < 3; i++) {
			cells.push(<div className='board-row' key={9+i}></div>);
			for (let j = 0; j < 3; j++, k++) {
				cells.push(this.renderSquare(k));
			}
		}

		return <div>{cells}</div>;
	}
}

export default Board;
