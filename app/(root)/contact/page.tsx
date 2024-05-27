import Breadcrumbs from '@/components/commons/Breadcrumbs'
import Contact from '@/components/contact/Contact'
import ChurchServices from '@/components/contact/ContactUs'
import React from 'react'

const page = () => {
  return (
    <>

      <Breadcrumbs
        pageName="Contact Us"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <ChurchServices />

      <Contact />
    </>
  )
}

export default page
