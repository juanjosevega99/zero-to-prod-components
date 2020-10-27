import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Picture.module.css'

const Picture = ({ src, width, height, isRounded }) => (
  <picture
    className={classNames(styles.picture, {
      [styles['is-rounded']]: isRounded,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} />
  </picture>
)

Picture.propTypes = {
  height: 'auto',
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRounded: PropTypes.bool,
}

export default Picture
