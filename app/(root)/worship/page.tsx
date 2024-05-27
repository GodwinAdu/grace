import Breadcrumbs from '@/components/commons/Breadcrumbs'

const page = () => {
    return (
        <>
        <Breadcrumbs
        pageName="Worship"
        description="At Altar of Grace Ministry, we believe that worship is the heart's response to the infinite love of the divine. More than just a place of prayer, we are a community bound by faith, love, and a shared journey towards spiritual enlightenment. "
      />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
            <div className="dark:bg-dark bg-primary/[3%] p-8 rounded-lg shadow-md space-y-6">
                    <h1 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Finding Connection Through Devotion</h1>
                    
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        In the fast-paced world we live in, it&apos;s essential to find moments of connection, reflection, and peace. Worship is more than just a routine; it&apos;s a deeply personal journey to connect with the divine and discover the purpose that binds us all.
                    </p>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Weekly Services</h2>
                        <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                            Join us every Sunday at 9:30 AM for our main worship service. Experience heartfelt worship, profound teachings, and a community eager to grow in faith together.
                        </p>
                        <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                            Midweek Praise: Every Wednesday at 7:00 PM, refresh your spirit with songs, prayers, and meditation.
                        </p>
                    </div>

                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Music Ministry</h2>
                    <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Our choir and musicians lead us into worship with contemporary songs and timeless hymns, creating an environment of genuine praise. Whether you&apos;re a singer or an instrumentalist, or just someone who appreciates good music, there&apos;s a place for you in our music ministry.
                    </p>

                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Prayer Circle</h2>
                    <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Every first Saturday of the month, our community gathers for a special prayer circle at 6:00 PM. It&apos;s a moment to share our burdens, hopes, and testimonies.
                    </p>

                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Children&apos;s Worship</h2>
                    <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        For our younger worshippers, we offer a dynamic children&apos;s worship experience where they can learn about faith in an environment tailored to their needs.
                    </p>

                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Worship Workshops</h2>
                    <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Throughout the year, we offer workshops aimed at enhancing our understanding and practice of worship. From music workshops to sessions on deepening our prayer life, there&apos;s always something to look forward to.
                    </p>

                    <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Get Involved</h2>
                    <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Worship is a communal experience, and we encourage everyone to play a part. Whether you&apos;re interested in joining the choir, volunteering for our audio-visual team, or assisting in organizing worship events, we welcome your gifts and talents.
                    </p>

                    <div className="border-t border-gray-200 pt-4">
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Contact Us</h2>
                        <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                            For more information about our worship services, music ministry, or any other queries, please get in touch with our Worship Coordinator at <a href="mailto:worship@yourchurchemail.com" className="text-blue-500 underline">worship@yourchurchemail.com</a> or call us at <span className="font-medium">(123) 456-7890</span>.
                        </p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default page
