export const useLockedAccount = ({ accounts, setAccounts }) => {
	const lockAccount = (accountId) => {
		const updatedAccounts = [...accounts];
		const user = updatedAccounts.find((account) => account.id === accountId);

		if (!user) {
			console.log("This account does not exist");
			return;
		}

		if (!user.isAccountLocked) {
			user.isAccountLocked = true;
		} else {
			console.log("Your account is already locked");
		}

		setAccounts(updatedAccounts);
	};

	return lockAccount;
};
