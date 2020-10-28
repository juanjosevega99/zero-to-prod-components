import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Component.module.css'

const Component = ({ id, className }) => {
  return <div id={id} className={classNames(className, styles.component)}></div>
}

Component.defaultProps = {}

Component.PropTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
}

export default Component
