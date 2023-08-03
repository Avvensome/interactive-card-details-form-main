function App() {
	return (
		<div className="container-main">
			<LeftSide>
				<Background />
				<CardFront />
				<CardBack />
			</LeftSide>
			<RightSide />
		</div>
	);
}
function LeftSide({ children }) {
	return <div className="container-left-side-main">{children}</div>;
}
function RightSide() {
	return (
		<div className="container-right-side-main">
			<div className="container-right-side">
				<form className="form-container">
					<div className="form-item">
						<label
							form="holdername"
							className="form-label"
							placeholder="e.g Jhon Doe"
						>
							Cardholder Name
						</label>
						<input
							name="holdername"
							id="holdername"
							type="text"
							className="form-input "
							placeholder="e.g Jhon Doe"
						></input>
						<span className="form-error">simple error</span>
					</div>
					<div className="form-item">
						<label
							form="cardnumber"
							className="form-label"
							placeholder="e.g 1234 5678 9123 0000"
						>
							Card number
						</label>
						<input
							name="cardnumber"
							id="cardnumber"
							type="number"
							className="form-input "
							placeholder="e.g 1234 5678 9123 0000"
						></input>
						<span className="form-error">simple error</span>
					</div>
					<div className="container-right-side-lower-section">
						<div className="form-item small-width">
							<label
								form="expiredM"
								className="form-label"
								placeholder="e.g 1234 5678 9123 0000"
							>
								EXP.DATE
							</label>
							<input
								name="expiredM"
								id="expiredM"
								type="number"
								className="form-input "
								placeholder="MM"
							></input>
							<span className="form-error">simple error</span>
						</div>
						<div className="form-item small-width">
							<label
								form="expiredY"
								className="form-label"
								placeholder="YY"
							>
								(MM/YY)
							</label>
							<input
								name="expiredY"
								id="expiredY"
								type="number"
								className="form-input "
								placeholder="YY"
							></input>
							<span className="form-error">simple error</span>
						</div>
						<div className="form-item high-width">
							<label
								form="codeCVC"
								className="form-label"
								placeholder="YY"
							>
								CVC
							</label>
							<input
								name="codeCVC"
								id="codeCVC"
								type="number"
								className="form-input "
								placeholder="CVC"
							></input>
							<span className="form-error">simple error</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
function CardFront({ cardNumber, cardHolder, expMonth, expYear }) {
	return (
		<div className="card-front-container">
			<img
				className="card card-front"
				src="images/bg-card-front.png"
				alt="card-front"
			/>
			<img
				className="bank-logo bank-logo-main"
				src="images/icons/bank-logo-1.png"
				alt="bank logo main"
			/>
			<img
				className="bank-logo bank-logo-second"
				src="images/icons/bank-logo-2.png"
				alt="second bank logo"
			/>
			<p className="card-info card-number">{cardNumber}</p>
			<p className="card-info card-holder">{cardHolder}</p>
			<p className="card-info card-date">
				{expMonth}/{expYear}
			</p>
		</div>
	);
}

function CardBack({ cvvValue }) {
	return (
		<div>
			<div className="card-back-container">
				<img
					className="card card-back"
					src="images/bg-card-back.png"
					alt="card-front"
				/>
				<p className="card-info card-cvv">{cvvValue}</p>
			</div>
		</div>
	);
}
function Background() {
	return (
		<img
			className="left-side-bg"
			src="/images/bg-main-desktop.png"
			alt="background"
		/>
	);
}
export default App;
