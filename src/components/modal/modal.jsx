import styles from "./modal.module.scss";

export const Modal = ({ isOpen, onClose, stats }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClose}>
					x
				</button>
				<div className={styles.content}>
					<h2>Bank Statistics</h2>
					{stats && (
						<ul>
							<li>Total users: {stats.users}</li>
							<li>Locked accounts: {stats.lockedUsers}</li>
							<li>Accounts with balance &gt; 0: {stats.usersWithPositiveBalance}</li>
							<li>Total balance: {stats.balance}</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};
