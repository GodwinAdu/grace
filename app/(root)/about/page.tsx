import AboutSectionOne from '@/components/about/AboutSectionOne'
import AboutSectionTwo from '@/components/about/AboutSectionTwo'
import ChurchServices from '@/components/church/ChurchService'
import Breadcrumbs from '@/components/commons/Breadcrumbs'
import React from 'react'

const page = () => {
  return (
    <>
      <Breadcrumbs
        pageName="About Us"
        description="Altar of Grace Pentecostal Ministry is a place where people from all walks of life can come together to worship, learn, and serve the Lord. Our church was founded on the principles of love, grace, and inclusivity, and we strive to make a positive impact in the lives of individuals and the community.."
      />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              <h2 className="mb-4 mt-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                WHAT WE BELIEVE
              </h2>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  GOD ALMIGHTY AND THE TRINITY
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We at Altar of Grace Pentecostal ministry believe in the Lord
                  God Almighty as the only God and there is no any other God. We
                  believe in the Holy Trinity of the Almighty God. His three
                  personalities. God the father, God the Son and God the holy
                  Spirit.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  THE SCRIPTURES (THE HOLY BIBLE)
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We believe that the bible is inspired by god. We believe God
                  the son is the word. The Bible At the altar of grace
                  Pentecostal ministry we base all of our beliefs on the
                  authority of the scriptures through the Holy Spirit who
                  interpret and gives us directions. It is the authority on
                  which we base our faith, conduct and doctrine The scriptures
                  influence every aspects of our worship and fellowship and
                  there is nothing that we do without considering the direction
                  of the scriptures by depending on the Holy Spirit to direct
                  us.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  THE HOLY SPIRIT
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  As followers and children of God, we were promised ‘the
                  helper’ by our saviour Jesus Christ before he went to heaven.
                  The holy spirit came as was promised and we believe in Him as
                  God, occupying out bodies which we have set apart as holy
                  temples for Him. We rely on him to reveal all truths to us, to
                  be our strength and the one who orders our daily steps. We
                  believe that for by strength shall no man prevail. And Except
                  the Lord build the house, they labour in vain that build it.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  BAPTISM
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Therefore go and make disciples of all nations, baptizing them
                  in the name of the Father and of the Son and of the Holy
                  Spirit, 20 and teaching them to obey everything I have
                  commanded you. And surely I am with you always, to the very
                  end of the age.” Matthew 28:19-20
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  THE HOLY COMUNION
                </h3>
                <p>1 Corinthians 11:24-26</p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  and when he had given thanks, he broke it and said, This is my
                  body, which is for you; do this in remembrance of me. In the
                  same way, after supper he took the cup, saying, This cup is
                  the new covenant in my blood; do this, whenever you drink it,
                  in remembrance of me. For whenever you eat this bread and
                  drink this cup, you proclaim the Lords death until he comes.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  SALVATION
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We believe free salvation made available to everyone through
                  the price that Jesus Christ came to pay on the cross for our
                  sins. Through is death we have hope that when anyone believes
                  in him as he himself stated in John 3:16, that person would be
                  saved from death. And the bondage of satan. We believe in his
                  promise to come back and bring judgement to the world. Romans
                  5:1-11
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChurchServices />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  )
}

export default page
