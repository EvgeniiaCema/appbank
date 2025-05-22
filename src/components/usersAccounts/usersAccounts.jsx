import { useState } from "react";
import { useDepositMoney } from "./hooks/useDepositMoney";
import { useWithdrawMoney } from "./hooks/useWithdrawMoney";
import { useTransferMoney } from "./hooks/useTransferMoney";
import { useDeleteAccount } from "./hooks/useDeleteAccount";
import { useLockedAccount } from "./hooks/useLockedAccount";
import { useUnLockedAccount } from "./hooks/useUnLockedAccount";

import styles from "./usersAccounts.module.scss";

export const UsersAccounts = ({ accounts, setAccounts }) => {
	const [amounts, setAmounts] = useState({});
	const [numberIds, setNumberIds] = useState({});
	const [errorByAccount, setErrorByAccount] = useState({ id: null, message: "" });
	const depositMoney = useDepositMoney({ accounts, setAccounts, setErrorByAccount });
	const withdrawMoney = useWithdrawMoney({ accounts, setAccounts, setErrorByAccount });
	const transferMoney = useTransferMoney({ accounts, setAccounts, setErrorByAccount });
	const deleteAccount = useDeleteAccount({ accounts, setAccounts, setErrorByAccount });
	const lockedAccount = useLockedAccount({ accounts, setAccounts, setErrorByAccount });
	const unLockedAccount = useUnLockedAccount({ accounts, setAccounts, setErrorByAccount });

	const handleAmountChange = (id, value) => {
		setAmounts((prev) => ({ ...prev, [id]: value }));
	};

	const handleNumberIdChange = (id, value) => {
		setNumberIds((prev) => ({ ...prev, [id]: value }));
	};

	return (
		<div>
			{accounts.map((account) => (
				<div key={account.id} className={styles.account}>
					<div>name: {account.name}</div>
					<div>surname: {account.surname}</div>
					<div>
						balance: {account.balance}
						<input type="number" value={amounts[account.id] ?? ""} onChange={(e) => handleAmountChange(account.id, e.target.value)} />
						<button
							onClick={() => {
								depositMoney(account.id, amounts[account.id]);
								setAmounts((prev) => ({ ...prev, [account.id]: "" }));
							}}
						>
							deposit money
						</button>
						<button
							onClick={() => {
								withdrawMoney(account.id, amounts[account.id]);
								setAmounts((prev) => ({ ...prev, [account.id]: "" }));
							}}
						>
							withdraw money
						</button>
					</div>
					<div>
						input Id recipient:
						<input
							type="number"
							value={numberIds[account.id] ?? ""}
							onChange={(e) => handleNumberIdChange(account.id, e.target.value)}
							placeholder="recipient number"
						/>
						<button
							onClick={() => {
								transferMoney({
									fromId: account.id,
									toId: Number(numberIds[account.id]),
									amount: Number(amounts[account.id]),
								});
								setAmounts((prev) => ({ ...prev, [account.id]: "" }));
								setNumberIds((prev) => ({ ...prev, [account.id]: "" }));
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
			))}
		</div>
	);
};
