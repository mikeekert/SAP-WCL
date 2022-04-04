import React from 'react';
import { NextPage } from 'next';
import styles from './Header.module.css'
import { faUser } from '@fortawesome/free-regular-svg-icons';


const Header: NextPage = () => (
	<div className={styles['header-bar']}>
		<p className={'text-white'}>Roster</p>
        {/*<FontAwesomeIcon icon={faUser} />*/}
	</div>
);

export default Header;
