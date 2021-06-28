import React, { useContext } from 'react';
import styles from './items.module.scss';
import Layout from '../layout/layout';
import RowItem from '../rowItem/rowItem';
import Categories from '../categories/categories';

import itemsContext from '../../context/items/itemsContext';

const Items = () => {
	const itemsContextV = useContext(itemsContext);
	const { itemsResult } = itemsContextV;

	return (
		<Layout>
			<>
				<Categories
					categories={itemsResult.categories}
				/>

				<ul className={styles.products}>
                    {itemsResult.items.map((item) => (
                        <li key={item.id} className={styles.product}>
                            <RowItem item={item} categories={itemsResult.categories} />
                        </li>    
                    ))}
				</ul>
			</>
		</Layout>
	);
};

export default Items;
