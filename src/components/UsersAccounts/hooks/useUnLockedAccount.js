import { useAccountsContext } from "../../../context/hooks/useAccountsContext";

export const useUnLockedAccount = () => {
	const { accounts, setAccounts, setErrorByAccount } = useAccountsContext();

	const unLockAccount = (accountId) => {
		const user = accounts.find((account) => account.id === accountId);

		if (!user) {
			setErrorByAccount("This account does not exist");
			return;
		}

		if (!user.isAccountLocked) {
			setErrorByAccount("Your account is already unlocked");
		}

		const updatedAccounts = accounts.map((account) => {
			if (account.id === accountId) {
				return { ...account, isAccountLocked: false };
			}
			return account;
		});

		setAccounts(updatedAccounts);
	};

	return unLockAccount;
};
