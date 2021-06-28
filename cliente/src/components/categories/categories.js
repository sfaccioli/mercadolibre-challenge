import React from 'react'; 
import styles from './categories.module.scss';

const Categories = ({categories}) => {

	return (
		<ul className={styles.categories}>
			{categories.map((category, index) => (
				<li key={index} className={styles.category}>
					{category} <span className={styles.symbol}>&gt;</span>
				</li>
			))}
		</ul>
	);
};

export default Categories;
