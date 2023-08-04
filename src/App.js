import { useState } from "react";

function displayMonth() {
	const currentDate = new Date();
	const month = currentDate.getMonth() + 1;
	const monthWithLeadingZero = month < 10 ? `0${month}` : month.toString();
	return monthWithLeadingZero;
}
function displayYear() {
	const currentDate = new Date();
	const fullYear = currentDate.getFullYear();
	const lastTwoDigitsOfYear = fullYear % 100;
	return lastTwoDigitsOfYear;
}
console.log(displayYear());
function App() {
	// States
	const [cardHolder, setCardHolder] = useState("Jhoe Doe");
	const [cardNumber, setcardNumber] = useState("0000 0000 0000 0000");
	const [cardExpiredM, setCardExpiredM] = useState(displayMonth());
	const [cardExpiredY, setCardExpiredY] = useState(displayYear());
	const [cardCVC, setCardCVC] = useState("123");

	// Handlers
	const handleCardHolder = (e) => {
		const inputValue = e.target.value;
		const inputLettersOnly = inputValue.replace(/[^A-Za-z\s]/g, "");
		setCardHolder(inputLettersOnly);
	};
	const handleCardNumber = (e) => {
		const input = e.target.value;
		const digitsOnly = input.replace(/[^\d]/g, "").slice(0, 16);
		let formattedValue = "";
		for (let i = 0; i < digitsOnly.length; i += 4) {
			if (i !== 0) {
				formattedValue += " ";
			}
			formattedValue += digitsOnly.slice(i, i + 4);
		}
		setcardNumber(formattedValue);
	};
	const hadndleCardExpiredM = (e) => {
		const inputValue = e.target.value;
		const formattedValue = inputValue.replace(/[^\d]/g, "").slice(0, 2);
		setCardExpiredM(formattedValue);
	};
	const handleCardExpiredY = (e) => {
		const inputValue = e.target.value;
		const formattedValue = inputValue.replace(/[^\d]/g, "").slice(0, 2);
		setCardExpiredY(formattedValue);
	};
	const handleCardCVC = (e) => {
		const inputValue = e.target.value;
		const formattedValue = inputValue.replace(/[^\d]/g, "").slice(0, 3);
		setCardCVC(formattedValue);
	};
	return (
		<div className="container-main">
			<LeftSide>
				<Background />
				<CardFront
					cardNumber={cardNumber}
					cardHolder={cardHolder}
					expMonth={cardExpiredM}
					expYear={cardExpiredY}
				/>
				<CardBack cvvValue={cardCVC} />
			</LeftSide>
			<RightSide>
				<FormItem
					formName={"holdername"}
					placeholder={"e.g Jhon Doe"}
					inputType={"text"}
					labelText={"cardholder name"}
					onChange={handleCardHolder}
					value={cardHolder}
					errMsg={"The field cannot be left blank"}
					additionalClass={
						cardHolder.length === 0 ? "form-input-error" : " "
					}
				/>
				<FormItem
					formName={"expiredM"}
					placeholder={"e.g 1234 5678 9123 0000"}
					inputType={"text"}
					labelText={"card number"}
					additionalClass={
						cardNumber.length < 19 ? "form-input-error" : " "
					}
					onChange={handleCardNumber}
					value={cardNumber}
					errMsg={"Must be a minimum of 16 digits"}
				/>
				<div className="container-right-side-lower-section">
					<FormItem
						formName={"expiredM"}
						placeholder={"MM"}
						inputType={"text"}
						labelText={"MM"}
						additionalClass={"small-width"}
						onChange={hadndleCardExpiredM}
						value={cardExpiredM}
					/>
					<FormItem
						formName={"expiredY"}
						placeholder={"YY"}
						inputType={"number"}
						labelText={"YY"}
						additionalClass={"small-width"}
						onChange={handleCardExpiredY}
						value={cardExpiredY}
					/>
					<FormItem
						formName={"codeCVC"}
						placeholder={"e.g. 123"}
						inputType={"number"}
						labelText={"CVC"}
						additionalClass={"high-width"}
						onChange={handleCardCVC}
						value={cardCVC}
						errMsg={"Must be a 3 digits"}
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
	errClass,
	onChange,
	value,
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
				className={`${additionalClass} form-input `}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			></input>
			<span className={`form-error ${errClass}`}>{errMsg}</span>
		</div>
	);
}

function Button() {
	return <button className="confirm-btn">Confirm</button>;
}

export default App;
