export const useLockedAccount = ({ accounts, setAccounts, setErrorByAccount }) => {
	const lockAccount = (accountId) => {
		const updatedAccounts = [...accounts];
		const user = updatedAccounts.find((account) => account.id === accountId);

		if (!user) {
			setErrorByAccount({ id: accountId, message: "This account does not exist" });
			return;
		}

		if (!user.isAccountLocked) {
			user.isAccountLocked = true;
			setErrorByAccount({ id: null, message: "" });
		} else {
			setErrorByAccount({ id: accountId, message: "Your account is already locked" });
		}

		setAccounts(updatedAccounts);
	};

	return lockAccount;
};
