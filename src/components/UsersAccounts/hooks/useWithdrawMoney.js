export const useWithdrawMoney = ({ accounts, setAccounts, setErrorByAccount }) => {
	const withdrawMoney = (accountId, amount) => {
		const updatedAccounts = [...accounts];
		const account = updatedAccounts.find((account) => account.id === accountId);

		if (amount < 0) {
			setErrorByAccount({ id: accountId, message: "Can't withdraw negative amount" });
			return;
		}

		if (account.isAccountLocked) {
			setErrorByAccount({ id: accountId, message: "Account is locked" });
			return;
		}

		if (account.balance < amount) {
			setErrorByAccount({ id: accountId, message: "Not enough money" });

			return;
		}

		if (account) {
			account.balance -= +amount;
			setAccounts(updatedAccounts);
			setErrorByAccount({ id: null, message: "" });
		}
	};

	return withdrawMoney;
};
