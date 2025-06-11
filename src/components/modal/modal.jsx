import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

export const Modal = ({ onClose, stats }) => {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal(
		<div className={styles.overlay} onClick={handleOverlayClick}>
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
		</div>,
		document.body
	);
};
