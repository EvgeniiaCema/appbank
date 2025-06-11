import { useState } from "react";

import { useDepositMoney } from "../hooks/useDepositMoney";
import { useWithdrawMoney } from "../hooks/useWithdrawMoney";
import { useTransferMoney } from "../hooks/useTransferMoney";
import { useDeleteAccount } from "../hooks/useDeleteAccount";
import { useLockedAccount } from "../hooks/useLockedAccount";
import { useUnLockedAccount } from "../hooks/useUnLockedAccount";

import styles from "./Account.module.scss";

export const Account = ({ account, accounts, setAccounts }) => {
	const [amounts, setAmounts] = useState(0);
	const [numberIds, setNumberIds] = useState(0);

	const [errorByAccount, setErrorByAccount] = useState({ id: null, message: "" });

	const depositMoney = useDepositMoney({ accounts, setAccounts, setErrorByAccount });
	const withdrawMoney = useWithdrawMoney({ accounts, setAccounts, setErrorByAccount });
	const transferMoney = useTransferMoney({ accounts, setAccounts, setErrorByAccount });
	const deleteAccount = useDeleteAccount({ accounts, setAccounts, setErrorByAccount });
	const lockedAccount = useLockedAccount({ accounts, setAccounts, setErrorByAccount });
	const unLockedAccount = useUnLockedAccount({ accounts, setAccounts, setErrorByAccount });

	const handleAmountChange = (event) => {
		setAmounts(event.target.value);
	};

	const handleNumberIdChange = (event) => {
		setNumberIds(event.target.value);
	};

	const clearAmountOnFocus = () => {
		if (amounts === 0) setAmounts("");
	};
	const fillAmountOnBlur = () => {
		if (amounts === "") setAmounts(0);
	};

	const clearNumberIdOnFocus = () => {
		if (numberIds === 0) setNumberIds("");
	};
	const fillNumberIdOnBlur = () => {
		if (numberIds === "") setNumberIds(0);
	};

	return (
		<div className={styles.account}>
			<div>name: {account.name}</div>
			<div>surname: {account.surname}</div>
			<div>
				balance: {account.balance}
				<input type="number" value={amounts} onChange={handleAmountChange} onFocus={clearAmountOnFocus} onBlur={fillAmountOnBlur} />
				<button
					onClick={() => {
						depositMoney(account.id, amounts);
						setAmounts(0);
					}}
				>
					deposit money
				</button>
				<button
					onClick={() => {
						withdrawMoney(account.id, amounts);
						0;
						setAmounts(0);
					}}
				>
					withdraw money
				</button>
			</div>
			<div>
				input Id recipient:
				<input
					type="number"
					value={numberIds}
					onChange={handleNumberIdChange}
					onFocus={clearNumberIdOnFocus}
					onBlur={fillNumberIdOnBlur}
					placeholder="recipient number"
				/>
				<button
					onClick={() => {
						transferMoney({
							fromId: account.id,
							toId: Number(numberIds),
							amount: Number(amounts),
						});
						setAmounts(0);
						setNumberIds(0);
					}}
				>
					transfer money
				</button>
			</div>
			<div>
				{account.isAccountLocked ? "account: locked" : "account: unlocked"}
				<button onClick={() => lockedAccount(account.id)}>locked account</button>
				<button onClick={() => unLockedAccount(account.id)}>unlocked account</button>
			</div>
			<div>user ID: {account.id}</div>
			{errorByAccount.id === account.id && errorByAccount.message && <div className={styles.error}>{errorByAccount.message}</div>}
			<button onClick={() => deleteAccount(account.id)}>delete account</button>
		</div>
	);
};
