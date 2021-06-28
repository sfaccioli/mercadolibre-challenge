import React, { useContext } from 'react';
import { withRouter} from 'react-router-dom';
import styles from './header.module.scss';
import {Link} from 'react-router-dom';
import searchContext from '../../context/search/searchContext';
import itemsContext from '../../context/items/itemsContext';

const Header = (props) => {
	const searchsContext = useContext(searchContext);
	const { searchInput, changeSearchInput } = searchsContext;

	const itemsContextV = useContext(itemsContext);
    const {searchItems} = itemsContextV;


	const handleChange = (e) => {
		changeSearchInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!searchInput) return;

		searchItems(searchInput).then(() => {
			props.history.push({
				pathname: '/items',
				search: "?" + new URLSearchParams({search: searchInput}).toString()
			})
		})
		
	};

	return (
		<header className={styles.container}>
			<div>
				<form className={styles.searchForm} onSubmit={handleSubmit}>
					<Link to={'/'} className={styles.logoMl}>
						<img
							src='../../images/Logo_ML@2x.png'
							className={styles.logoMl}
							alt='logo'
						/>
					</Link>
					<input
						type='text'
						name='searchInput'
						className={styles.searchInput}
						placeholder='Nunca dejes de buscar'
						value={searchInput}
						onChange={handleChange}
					/>
					<button type='submit'>
						<img
							src='../../images/ic_Search@2x.png'
							className={styles.searchIcon}
							alt='search'
						/>
					</button>
				</form>
			</div>
		</header>
	);
};

export default withRouter(Header);
