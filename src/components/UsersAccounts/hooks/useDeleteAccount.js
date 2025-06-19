import { useAccountsContext } from "../../../context/AccountsContext";

export const useDeleteAccount = () => {
	const { accounts, setAccounts, setErrorByAccount } = useAccountsContext();
	const deleteAccount = (accountId) => {
		const account = accounts.find((account) => account.id === accountId);

		if (!account) {
			setErrorByAccount("account isn`t find");
			return;
		}

		if (account.balance > 0) {
			setErrorByAccount(`Account cannot be deleted. Balance: ${account.balance}`);
			return;
		}

		if (account.isAccountLocked) {
			setErrorByAccount("Account cannot be deleted, it`s locked");
			return;
		}

		const updatedAccounts = accounts.filter((account) => accountId !== account.id);

		setAccounts(updatedAccounts);
		setErrorByAccount(null);
	};

	return deleteAccount;
};
