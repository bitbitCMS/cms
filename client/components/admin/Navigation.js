import { Fragment } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import ActiveLink from 'components/ActiveLink'

const Item = ({ item }) => {
  return (
    <ActiveLink href={item.href} activeClassName="active">
      <li className={clsx('nav-item')}>
          <div>{item.title}</div>
      </li>
    </ActiveLink>
  )
}

const Navigation = ({ navigation, className }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className={clsx('navbar-nav flex-column', className)}>
        {navigation.map((item, i) => (
          <Fragment key={i}>
            {item.type === 'item' && <Item item={item} />}
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  navigation: PropTypes.array.isRequired,
  className: PropTypes.string,
}

Navigation.defaultProps = {
  className: '',
}

export default Navigation


