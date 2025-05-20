export const useCreateAccount = ({ accounts, setAccounts }) => {
	const createAnAccount = (e, name, surname) => {
		e.preventDefault();

		if (!name || !surname) {
			console.log("The Name or Surname field is not filled in");
			return;
		}

		const newAccount = {
			id: Math.random(),
			name: name,
			surname: surname,
			balance: 0,
			isAccountLocked: false,
		};

		const isAccountExists = accounts.some((account) => account.id === newAccount.id);

		if (!isAccountExists) {
			setAccounts((prev) => [...prev, newAccount]);
		}
	};

	return createAnAccount;
};
