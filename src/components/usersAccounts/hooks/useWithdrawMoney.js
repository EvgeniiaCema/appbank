export const useWithdrawMoney = ({ accounts, setAccounts }) => {
	const withdrawMoney = (accountId, amount) => {
		const updatedAccounts = [...accounts];
		const account = updatedAccounts.find((account) => account.id === accountId);

		if (account.isAccountLocked) {
			console.log("Account is locked");
			return;
		}

		if (account.balance < amount) {
			console.log("Not enough money");
			return;
		}

		if (account) {
			account.balance -= +amount;
			setAccounts(updatedAccounts);
		}
	};

	return withdrawMoney;
};
