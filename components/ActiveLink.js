import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const ActiveLink = ({ href, activeClassName, children }) => {
  const router = useRouter()

  const child = React.Children.only(children)

  let className = child.props.className || ''
  if (
    (router.pathname === href || router.pathname.includes(href)) &&
    activeClassName
  ) {
    className = `${className} ${activeClassName}`.trim()
  }

  return (
    <Link href={href}>
      <a className="nav-link">{React.cloneElement(child, { className })}</a>
    </Link>
  )
}

ActiveLink.propTypes = {
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}
ActiveLink.defaultProps = {
  href: '',
  activeClassName: '',
}

export default ActiveLink
