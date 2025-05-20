export const useUnLockedAccount = ({ accounts, setAccounts }) => {
	const unLockAccount = (accountId) => {
		const updatedAccounts = [...accounts];
		const user = updatedAccounts.find((account) => account.id === accountId);

		if (!user) {
			console.log("This account does not exist");
			return;
		}

		if (user.isAccountLocked) {
			user.isAccountLocked = false;
		} else {
			console.log("Your account is already unlocked");
		}

		setAccounts(updatedAccounts);
	};

	return unLockAccount;
};
