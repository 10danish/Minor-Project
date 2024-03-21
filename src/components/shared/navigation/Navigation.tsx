import React from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import getCurrentSubscriptions from '@/actions/getCurrentSubscriptions'

const Navigation = async() => {
  const subscriptions = await getCurrentSubscriptions();
  return (
    <>
      <Sidebar subscribedChannels={subscriptions}/>
      <Navbar />
    </>
  )
}

export default Navigation