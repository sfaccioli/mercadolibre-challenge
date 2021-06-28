import React from 'react';
import { Link } from 'react-router-dom';
import styles from './rowItem.module.scss';

const RowItem = ({ item, categories }) => {
	return (
		<div className={styles.container}>
			<Link
				to={{
					pathname: `items/${item.id}`,
				}}
			>
				<img src={item.picture} alt='Product' className={styles.image} />
			</Link>

			<div className={styles.itemInfo}>
				<Link
					to={{
						pathname: `items/${item.id}`,
					}}
				>
					<span className={styles.price}>
						<span className={styles.priceSymbol}>$</span>
						<span>
							{new Intl.NumberFormat('de-DE').format(item.price.amount)}
						</span>
						{item.free_shipping && (
							<span className={styles.freeShipping}>
								<img
									src='../../images/ic_shipping.png'
									alt='Free shipping symbol'
								/>
							</span>
						)}
					</span>
				</Link>

				<span className={styles.title}>
					<Link
						to={{
							pathname: `items/${item.id}`,
						}}
					>
						{item.title}
					</Link>
				</span>
			</div>
		</div>
	);
};

export default RowItem;
