import Breadcrumbs from '@/components/commons/Breadcrumbs'
import GalleryComponent from '@/components/gallery/GalleryComponent'

const page = () => {
  return (
    <>
      <Breadcrumbs
        pageName="Our Gallery"
        description="Explore our collection of beautiful images."
      />
      <GalleryComponent />
    </>
  )
}

export default page
