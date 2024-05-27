import Breadcrumbs from '@/components/commons/Breadcrumbs'

const page = () => {
  return (
    <>
      <Breadcrumbs
        pageName="Our Events"
        description="Our community thrives on coming together, celebrating our shared faith, learning from one another, and reaching out to those in need. Here, you'll find a compilation of all our upcoming events, workshops, and fellowship opportunities."
      />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
            <div className="bg-primary/[3%] dark:bg-dark p-8 space-y-8">
                    <h1 className="mb-4 mt-4 text-xl text-center font-bold !leading-tight text-black dark:text-white sm:text-4xl ">Upcoming Events at Altar of Grace Ministry</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Event 1 */}
                        <div className="dark:bg-primary/10 bg-primary/[3%] rounded-lg shadow-md p-6 space-y-4">
                            <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Annual Fellowship Dinner</h2>
                            <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Join us for an evening of fellowship, worship, and dining as we celebrate the blessings of the year.</p>
                            <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Date: 15th September | Time: 6:00 PM</p>
                           
                        </div>
                        
                        {/* Event 2 */}
                        <div className="dark:bg-primary/10 bg-primary/[3%]rounded-lg shadow-md p-6 space-y-4">
                            <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Youth Summer Camp</h2>
                            <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">A week-long camp for youths aged 13-18. Filled with fun activities, worship sessions, and spiritual growth.</p>
                            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Date: 5th - 10th August | Time: Starts at 8:00 AM</p>
                           
                        </div>
                        
                        {/* Event 3 */}
                        <div className="dark:bg-primary/10 bg-primary/[3%] rounded-lg shadow-md p-6 space-y-4">
                            <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Women's Prayer Breakfast</h2>
                            <p  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">A morning dedicated to the women of our ministry to come together in prayer and share testimonies.</p>
                            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Date: 20th July | Time: 9:00 AM</p>
                            
                        </div>

                        {/* ... Add more events as needed */}
                        
                    </div>

                    <div className="text-center">
                        <button className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-800">View All Events</button>
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
