import React from 'react'
import Header from '../components/Header'
import '../styles/normalize.css'
import '../styles/core.scss'
import './CoreLayout.scss'

// 构建页面主视图
export const CoreLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <div className='core-layout'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
