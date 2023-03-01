import cx from 'classnames'
import { PropsWithChildren } from 'react'

import styles from './SubTitle.module.scss'

interface ISubTitle {
	classname?: string
	children: string
}

const SubTitle = ({ classname, children }: PropsWithChildren<ISubTitle>) => (
	<h3 className={cx(styles.subTitle, classname)}>{children}</h3>
)

export default SubTitle