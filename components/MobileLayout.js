import React from 'react'
import PropTypes from 'prop-types'

export default function MobileLayout ({ children }) {
  return (
    <div className={'flex bg-gray-200 justify-center h-full'}>
      <div className={'w-full md:w-[640px] h-full'}>
        {children}
      </div>
    </div>
  )
}

MobileLayout.propTypes = {
  children: PropTypes.node
}
