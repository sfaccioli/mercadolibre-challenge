import React, { useContext, useEffect } from 'react';
import styles from './item.module.scss';
import Layout from '../layout/layout';
import Categories from '../categories/categories';

import itemsContext from '../../context/items/itemsContext';
import { useParams } from 'react-router-dom';

const Item = () => {
	const { id } = useParams();

	const itemsContextV = useContext(itemsContext);
	const { itemByIdResult, categories, getItemById } = itemsContextV;

	useEffect(() => {
		getItemById(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return itemByIdResult ? (
		<Layout>
			<Categories categories={categories} />

			<div className={styles.container}>
				<div className={styles.upperWrapper}>
					<div className={styles.imageContainer}>
						<img
							src={itemByIdResult.item.picture}
							alt='Product'
							className={styles.image}
						/>
					</div>

					<div className={styles.titleAndPrice}>
						<span className={styles.conditionAndQuantity}>
							{itemByIdResult.item.condition} &#45;{' '}
							{itemByIdResult.item.sold_quantity} vendidos
						</span>

						<span className={styles.title}>{itemByIdResult.item.title}</span>

						<span className={styles.price}>
							<span className={styles.priceSymbol}>$</span>
							<span>
								{new Intl.NumberFormat('de-DE').format(
									itemByIdResult.item.price.amount
								)}
							</span>
                            <span className={styles.cents}>{itemByIdResult.item.price.decimals}</span>
						</span>

						<button className={styles.comprarButton}>Comprar</button>
					</div>
				</div>

				<div className={styles.description}>
					<span className={styles.titleDescription}>
						Descripción del producto
					</span>

					<p className={styles.textDescription}>
						{itemByIdResult.item.description}
					</p>
				</div>
			</div>
		</Layout>
	) : null;
};

export default Item;
