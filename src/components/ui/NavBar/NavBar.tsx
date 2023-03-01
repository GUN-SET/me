import cx from 'classnames'
import Link from 'next/link'

import styles from './NavBar.module.scss'

interface INavBar {
	classname?: string
}

const NavBar = ({ classname }: INavBar) => (
	<div className={cx(styles.NavBar, classname)}>
		<Link href='#about'>
			<button className='heroButton'>About</button>
		</Link>
		{/*<Link href='#works'>*/}
		{/*	<button className='heroButton'>Experience</button>*/}
		{/*</Link>*/}
		<Link href='#skills'>
			<button className='heroButton'>Skills</button>
		</Link>
		<Link href='#projects'>
			<button className='heroButton'>Projects</button>
		</Link>
		{/*		<Link href='#contact'>
			<button className='heroButton'>Contact</button>
		</Link>*/}
	</div>
)

export default NavBar