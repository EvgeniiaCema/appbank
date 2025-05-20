export const useDepositMoney = ({ accounts, setAccounts }) => {
	const depositMoney = (accountId, amount) => {
		const updatedAccounts = [...accounts];
		const account = updatedAccounts.find((account) => account.id === accountId);

		if (account.isAccountLocked) {
			console.log("Account is locked");
			return;
		}

		if (account) {
			account.balance += +amount;
			setAccounts(updatedAccounts);
		}
	};

	return depositMoney;
};
