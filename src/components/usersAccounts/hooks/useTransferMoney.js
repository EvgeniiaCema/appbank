export const useTransferMoney = ({ accounts, setAccounts }) => {
	const transferMoney = ({ fromId, toId, amount }) => {
		const updatedAccounts = [...accounts];
		const foundAccountForTransfer = updatedAccounts.find((account) => account.id === fromId);
		const foundAccountForDepositMoney = updatedAccounts.find((account) => account.id === toId);

		if (!foundAccountForTransfer || !foundAccountForDepositMoney) {
			console.log("These accounts do not exist");
			return;
		}

		if (foundAccountForTransfer.isAccountLocked) {
			console.log("Account For Transfer Account is locked");
			return;
		}

		if (foundAccountForDepositMoney.isAccountLocked) {
			console.log("Account For Deposit Money Account is locked");
			return;
		}

		if (foundAccountForTransfer.balance >= amount) {
			foundAccountForTransfer.balance -= amount;
			foundAccountForDepositMoney.balance += amount;
			setAccounts(updatedAccounts);
		} else if (foundAccountForTransfer.balance < amount) {
			console.log(`not enough money, you balance ${foundAccountForTransfer.balance}`);
		}
	};

	return transferMoney;
};
