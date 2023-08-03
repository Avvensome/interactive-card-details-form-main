function App() {
	return (
		<div className="container-main">
			<LeftSide />
		</div>
	);
}
function LeftSide() {
	return (
		<div className="container-left-side-main">
			<div className="container-left-side">
				<img
					className="left-side-bg"
					src="/images/bg-main-desktop.png"
					alt="background"
				/>
			</div>
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
				<p className="card-info card-number">0000 0000 0000 0000</p>
				<p className="card-info card-holder">Jhon Doe</p>
				<p className="card-info card-date">11/09</p>
			</div>
			<div className="card-back-container">
				<img
					className="card card-back"
					src="images/bg-card-back.png"
					alt="card-front"
				/>
				<p className="card-info card-cvv">000</p>
			</div>
		</div>
	);
}
export default App;
