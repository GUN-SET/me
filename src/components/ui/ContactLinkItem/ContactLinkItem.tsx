import cx from 'classnames'
import React, { PropsWithChildren } from 'react'

import styles from './ContactLinkItem.module.scss'

interface IContactLinkItem {
	classname?: string
	children: string
	icon: JSX.Element
}

const ContactLinkItem = ({
	classname,
	children,
	icon
}: PropsWithChildren<IContactLinkItem>) => (
	<div className={cx(styles.ContactLinkItem, classname)}>
		<div className={styles.ContactLinkIcon}>{icon}</div>
		<p className='text-2xl'>{children}</p>
	</div>
)

export default ContactLinkItem