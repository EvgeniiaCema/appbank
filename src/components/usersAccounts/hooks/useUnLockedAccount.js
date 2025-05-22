export const useUnLockedAccount = ({ accounts, setAccounts, setErrorByAccount }) => {
	const unLockAccount = (accountId) => {
		const updatedAccounts = [...accounts];
		const user = updatedAccounts.find((account) => account.id === accountId);

		if (!user) {
			setErrorByAccount({ id: accountId, message: "This account does not exist" });
			return;
		}

		if (user.isAccountLocked) {
			user.isAccountLocked = false;
			setErrorByAccount({ id: null, message: "" });
		} else {
			setErrorByAccount({ id: accountId, message: "Your account is already unlocked" });
		}

		setAccounts(updatedAccounts);
	};

	return unLockAccount;
};
