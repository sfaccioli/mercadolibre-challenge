import React from 'react';
import { Link } from 'react-router-dom';
import styles from './rowItem.module.scss';

const RowItem = ({ item, categories }) => {
	return (
		<div className={styles.container}>
			<Link 
				to={{
					pathname: `items/${item.id}`,
					state: { categories: categories }
				}}
			>
				<img src={item.picture} alt='Product' className={styles.image} />
			</Link>
				
			<div className={styles.itemInfo}>
				<span className={styles.price}>
					<span className={styles.priceSymbol}>$</span>
					<span>{new Intl.NumberFormat('de-DE').format(item.price.amount)}</span>
                    { item.free_shipping && (
                        <span className={styles.freeShipping}><img src='../../images/ic_shipping.png' alt='Free shipping symbol' /></span>
                    )}
				</span>

                <span className={styles.title}>
                    {item.title}
                </span>
			</div>
		</div>
	);
};

export default RowItem;
