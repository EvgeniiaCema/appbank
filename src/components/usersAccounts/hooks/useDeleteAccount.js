export const useDeleteAccount = ({ accounts, setAccounts }) => {
	const deleteAccount = (accountId) => {
		const updatedAccounts = [...accounts];

		const index = updatedAccounts.findIndex((account) => account.id === accountId);

		if (index === -1) {
			console.log("index isn`t find");
			return;
		}

		if (updatedAccounts[index].balance > 0) {
			console.log(`Account cannot be deleted. Balance: ${updatedAccounts[index].balance}`);
			return;
		}

		if (updatedAccounts[index].isAccountLocked) {
			console.log("Account cannot be deleted, it`s locked");
			return;
		}

		updatedAccounts.splice(index, 1);
		setAccounts(updatedAccounts);
	};

	return deleteAccount;
};
