import React from 'react'

const LandingPageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-screen w-screen'>
      {children}
    </div>
  )
}

export default LandingPageLayout