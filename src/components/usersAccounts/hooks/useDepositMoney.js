export const useDepositMoney = ({ accounts, setAccounts, setErrorByAccount }) => {
	const depositMoney = (accountId, amount) => {
		const updatedAccounts = [...accounts];
		const account = updatedAccounts.find((account) => account.id === accountId);

		if (account.isAccountLocked) {
			setErrorByAccount({ id: accountId, message: "Account is locked" });
			return;
		}

		if (amount < 0) {
			setErrorByAccount({ id: accountId, message: "Can't deposit negative amount" });
			return;
		}

		if (account) {
			account.balance += +amount;
			setAccounts(updatedAccounts);
			setErrorByAccount({ id: null, message: "" });
		}
	};

	return depositMoney;
};
