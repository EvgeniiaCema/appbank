export const UsersAccounts = ({ accounts, onRenderAccount }) => {
	return <div>{accounts.map(onRenderAccount)}</div>;
};
