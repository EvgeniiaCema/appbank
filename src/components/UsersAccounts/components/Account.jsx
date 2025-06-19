import { useState } from "react";

import { useAccountsContext } from "../../../context/AccountsContext";

import { AccountActions } from "./components/AccountActions";

import { useDepositMoney } from "../hooks/useDepositMoney";
import { useWithdrawMoney } from "../hooks/useWithdrawMoney";
import { useTransferMoney } from "../hooks/useTransferMoney";
import { useDeleteAccount } from "../hooks/useDeleteAccount";
import { useLockedAccount } from "../hooks/useLockedAccount";
import { useUnLockedAccount } from "../hooks/useUnLockedAccount";

import styles from "./Account.module.scss";

export const Account = ({ account }) => {
	const { accounts, setAccounts, errorByAccount, setErrorByAccount } = useAccountsContext();

	const depositMoney = useDepositMoney({ accounts, setAccounts, setErrorByAccount });
	const withdrawMoney = useWithdrawMoney({ accounts, setAccounts, setErrorByAccount });
	const transferMoney = useTransferMoney({ accounts, setAccounts, setErrorByAccount });
	const deleteAccount = useDeleteAccount({ accounts, setAccounts, setErrorByAccount });
	const lockedAccount = useLockedAccount({ accounts, setAccounts, setErrorByAccount });
	const unLockedAccount = useUnLockedAccount({ accounts, setAccounts, setErrorByAccount });

	return (
		<div className={styles.account}>
			<div>name: {account.name}</div>
			<div>surname: {account.surname}</div>
			<AccountActions account={account} depositMoney={depositMoney} withdrawMoney={withdrawMoney} transferMoney={transferMoney} />
			<div>
				{account.isAccountLocked ? "account: locked" : "account: unlocked"}
				<button onClick={() => lockedAccount(account.id)}>locked account</button>
				<button onClick={() => unLockedAccount(account.id)}>unlocked account</button>
			</div>
			<div>user ID: {account.id}</div>
			{errorByAccount && <div className={styles.error}>{errorByAccount}</div>}
			<button onClick={() => deleteAccount(account.id)}>delete account</button>
		</div>
	);
};
