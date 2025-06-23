import { useState } from "react";
import { useDepositMoney } from "../../hooks/useDepositMoney";
import { useWithdrawMoney } from "../../hooks/useWithdrawMoney";
import { useTransferMoney } from "../../hooks/useTransferMoney";

export const AccountActions = ({ account }) => {
	const [amounts, setAmounts] = useState(0);
	const [numberRecipientId, setNumberRecipientId] = useState(0);

	const depositMoney = useDepositMoney();
	const withdrawMoney = useWithdrawMoney();
	const transferMoney = useTransferMoney();

	const handleAmountChange = (event) => {
		setAmounts(+event.target.value);
	};

	const handleNumberIdChange = (event) => {
		setNumberRecipientId(+event.target.value);
	};

	const clearAmountOnFocus = () => {
		if (amounts === 0) setAmounts("");
	};

	const fillAmountOnBlur = () => {
		if (amounts === "") setAmounts(0);
	};

	const clearNumberIdOnFocus = () => {
		if (numberRecipientId === 0) setNumberRecipientId("");
	};

	const fillNumberIdOnBlur = () => {
		if (numberRecipientId === "") setNumberRecipientId(0);
	};

	const handleDeposit = () => {
		depositMoney(account.id, amounts);
		setAmounts(0);
	};

	const handleWithdrawMoney = () => {
		withdrawMoney(account.id, amounts);
		setAmounts(0);
	};

	const handleTransferMoney = () => {
		transferMoney({
			fromId: account.id,
			toId: numberRecipientId,
			amount: amounts,
		});
		setAmounts(0);
		setNumberRecipientId(0);
	};

	return (
		<div>
			<div>
				balance: {account.balance}
				<input type="number" value={amounts} onChange={handleAmountChange} onFocus={clearAmountOnFocus} onBlur={fillAmountOnBlur} />
				<button onClick={handleDeposit}>deposit money</button>
				<button onClick={handleWithdrawMoney}>withdraw money</button>
			</div>
			<div>
				input Id recipient:
				<input
					type="number"
					value={numberRecipientId}
					onChange={handleNumberIdChange}
					onFocus={clearNumberIdOnFocus}
					onBlur={fillNumberIdOnBlur}
					placeholder="recipient number"
				/>
				<button onClick={handleTransferMoney}>transfer money</button>
			</div>
		</div>
	);
};
