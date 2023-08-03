function App() {
	return (
		<div className="container-main">
			<LeftSide>
				<Background />
				<CardFront />
				<CardBack />
			</LeftSide>
			<RightSide>
				<FormItem
					formName={"holdername"}
					placeholder={"e.g Jhon Doe"}
					inputType={"text"}
					labelText={"cardholder name"}
				/>
				<FormItem
					formName={"expiredM"}
					placeholder={"e.g 1234 5678 9123 0000"}
					inputType={"number"}
					labelText={"card number"}
				/>
				<div className="container-right-side-lower-section">
					<FormItem
						formName={"expiredM"}
						placeholder={"MM"}
						inputType={"number"}
						labelText={"MM"}
						additionalClass={"small-width"}
					/>
					<FormItem
						formName={"expiredY"}
						placeholder={"YY"}
						inputType={"number"}
						labelText={"YY"}
						additionalClass={"small-width"}
					/>
					<FormItem
						formName={"codeCVC"}
						placeholder={"e.g. 123"}
						inputType={"number"}
						labelText={"CVC"}
						additionalClass={"high-width"}
					/>
				</div>
				<Button />
			</RightSide>
		</div>
	);
}
function LeftSide({ children }) {
	return <div className="container-left-side-main">{children}</div>;
}
function RightSide({ children }) {
	return (
		<div className="container-right-side-main">
			<div className="container-right-side">
				<form className="form-container">{children}</form>
			</div>
		</div>
	);
}
// Left Side
function Background() {
	return (
		<img
			className="left-side-bg"
			src="/images/bg-main-desktop.png"
			alt="background"
		/>
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
// Right Side

function FormItem({
	formName,
	placeholder,
	inputType,
	errMsg,
	labelText,
	additionalClass,
}) {
	return (
		<div className="form-item">
			<label
				form={formName}
				className="form-label"
				placeholder={placeholder}
			>
				{labelText}
			</label>
			<input
				name={formName}
				id={formName}
				type={inputType}
				className={`form-input ${additionalClass}`}
				placeholder={placeholder}
			></input>
			<span className="form-error">{errMsg}</span>
		</div>
	);
}

function Button() {
	return <button className="confirm-btn">Confirm</button>;
}

export default App;
