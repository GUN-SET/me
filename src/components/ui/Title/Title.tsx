import cx from 'classnames'

import styles from './Title.module.scss'

interface ITitle {
	text: string
	classname?: string
}

const Title = ({ text, classname }: ITitle) => (
	<h3 className={cx(styles.title, classname)}>{text}</h3>
)

export default Title