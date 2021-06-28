import React from 'react';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({children}) => {
	return (
		<div className={styles.container}>
			<Header />

			<main className={styles.box}>{children}</main>
		</div>
	);
};

export default Layout;
