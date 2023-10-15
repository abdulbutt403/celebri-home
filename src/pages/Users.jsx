import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UsersList from '../components/UsersList'

export default function Users() {
  return (
    <div className="home-page">
    <Navbar />
    <UsersList />
  
    <Footer />
  </div>
  )
}
