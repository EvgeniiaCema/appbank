import { useAccountsContext } from "../../../context/hooks/useAccountsContext";

export const useLockedAccount = () => {
	const { accounts, setAccounts, setErrorByAccount } = useAccountsContext();

	const lockAccount = (accountId) => {
		const user = accounts.find((account) => account.id === accountId);

		if (!user) {
			setErrorByAccount("This account does not exist");
			return;
		}

		if (user.isAccountLocked) {
			setErrorByAccount("Your account is already locked");
			return;
		}

		const updatedAccounts = accounts.map((account) => {
			if (account.id === accountId) {
				return { ...account, isAccountLocked: true };
			}
			return account;
		});

		setAccounts(updatedAccounts);
	};

	return lockAccount;
};
