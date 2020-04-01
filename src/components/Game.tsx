import React from "react";
import Board from "./Board";

interface Props {}

interface State {
	history: { squares: string[] }[];
	isNext: boolean;
	stepNumber: number;
}

class Game extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9)
				}
			],
			isNext: true,
			stepNumber: 0
		};
	}

	handleClick(i: number) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = [...current.squares];

		if (this.calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.isNext ? "X" : "O";
		this.setState({
			history: history.concat([{ squares: squares }]),
			isNext: !this.state.isNext,
			stepNumber: history.length
		});
	}

	calculateWinner(squares: Array<string>) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	checkStalemate(current: string[]) {
		return current.every(cell => {
			return cell;
		});
	}

	jumpTo(step: number) {
		this.setState({ stepNumber: step, isNext: step % 2 === 0 });
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber].squares;
		const winner = this.calculateWinner(current);

		const moves = history.map((step, move) => {
			const desc = move ? "To move #" + move : "To start";
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}> {desc}</button>
				</li>
			);
		});

		let status;
		let stalemate = this.checkStalemate(current);
		if (winner) {
			status = "Winner is " + winner;
		} else if (stalemate) {
			status = "This is stalemate!";
		} else {
			status = "Next player: " + (this.state.isNext ? "X" : "O");
		}

		return (
			<div className='game'>
				<div className='game-board'>
					<Board
						squares={current}
						onClick={(i: number) => this.handleClick(i)}
					/>
				</div>
				<div className='game-info'>
					<div className='status'>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
