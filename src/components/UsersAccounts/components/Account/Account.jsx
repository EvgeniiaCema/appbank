import { useDeleteAccount } from "../../hooks/useDeleteAccount";
import { useLockedAccount } from "../../hooks/useLockedAccount";
import { useUnLockedAccount } from "../../hooks/useUnLockedAccount";
import { useAccountsContext } from "../../../../context/hooks/useAccountsContext";

import { AccountActions } from "../AccountActions/AccountActions";

import styles from "./Account.module.scss";

export const Account = ({ account }) => {
	const { errorByAccount } = useAccountsContext();

	const deleteAccount = useDeleteAccount();
	const lockedAccount = useLockedAccount();
	const unLockedAccount = useUnLockedAccount();

	return (
		<div className={styles.account}>
			<div>name: {account.name}</div>
			<div>surname: {account.surname}</div>
			<AccountActions account={account} />
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
