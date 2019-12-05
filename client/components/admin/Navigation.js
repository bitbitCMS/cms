import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Collapse as ReactCollapse } from 'react-collapse'
import ActiveLink from 'components/ActiveLink'
import Mdi from '@mdi/react'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

function isUrlInChildren(parent, href) {
  if (!parent.children) {
    return false
  }

  for (let i = 0; i < parent.children.length; ) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], href)) {
        return false
      }
    }
    if (parent.children[i].href === href || 
      href.includes(parent.children[i].href)
      ) {
        return true
      }
      i += 1
  }
  return false
}

function needsToBeOpened(location, item) {
  return location && isUrlInChildren(item, location.pathname)
}

const Collapse = ({ item, nestedLevel }) => {
  const router = useRouter()
  const [open, setOpen] = useState(() => needsToBeOpened(router, item))
  const paddingLeft = 20 + nestedLevel * 28

  return (
    <>
      <a
        className="nav-link"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <li style={{ paddingLeft }}>
          <div className="d-inline">{item.title}</div>
          <Mdi
            className="icon d-inline"
            style={{ 'marginLeft': 'auto', 'float': 'right' }}
            path={open ? mdiChevronUp : mdiChevronDown}
          />
        </li>
      </a>
      {item.children && (
        <ReactCollapse isOpened={open}>
          <ul className="nav flex-column">
            {item.children.map((child, i) => (
              <Fragment key={i}>
                {child.type === 'collapse' && (
                  <Collapse item={child} nestedLevel={nestedLevel + 1} />
                )}
                {child.type === 'item' && (
                  <Item item={child} nestedLevel={nestedLevel + 1} />
                )}
              </Fragment>
            ))}
          </ul>
        </ReactCollapse>
      )}
      </>
  )
}

Collapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.array,
  }).isRequired,
  nestedLevel: PropTypes.number,
}
Collapse.defaultProps = {
  nestedLevel: 0,
}

const Item = ({ item, nestedLevel }) => {
  const paddingLeft  = 20 + nestedLevel * 28
  return (
    <ActiveLink href={item.href} activeClassName="active">
      <li className={clsx('nav-item')} style={{ paddingLeft }}>
          <div>{item.title}</div>
      </li>
    </ActiveLink>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // icon: PropTypes.string,
    href: PropTypes.string.isRequired,
  }).isRequired,
  nestedLevel: PropTypes.number,
}
Item.defaultProps = {
  nestedLevel: 0,
}

const Navigation = ({ navigation, className }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className={clsx('navbar-nav flex-column', className)}>
        {navigation.map((item, i) => (
          <Fragment key={i}>
            {item.type === 'collapse' && <Collapse item={item} />}
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
