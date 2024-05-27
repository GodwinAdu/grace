import Breadcrumbs from '@/components/commons/Breadcrumbs'
import Section from '@/components/sermon/Section'
import React from 'react'

const page = () => {
  return (
    <>
       <Breadcrumbs
        pageName="Sermons"
        description="At Altar of Grace, our sermons serve as a bridge between God&apos;s timeless word and our daily lives. They&pos;re designed not only to provide spiritual nourishment but also to inspire action, introspection, and a deeper understanding of God’s love for us. Whether you're a long-time member or a first-time visitor, our sermons aim to touch your heart and mind."
      />
      <Section />
    </>
  )
}

export default page
