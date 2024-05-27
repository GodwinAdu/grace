import React from 'react';

function ChurchServices() {
  return (
    <div className="bg-blue p-6 rounded-lg shadow-md">
      <h2  className="mb-4 mt-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Join Us for Worship and Fellowship</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sunday Service */}
        <div className="bg-black/40 rounded-lg p-4">
          <h3 className="  mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">SUNDAY SERVICE</h3>
          <p className="text-base font-medium leading-relaxed dark:text-white/60 sm:text-lg sm:leading-relaxed">We invite you to worship and fellowship with us every Sunday from 11:00am - 2:30pm</p>
        </div>

        {/* Online Evening Prayers */}
        <div className="bg-black/40 rounded-lg p-4">
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">ONLINE EVENING PRAYERS</h3>
          <p className="text-base font-medium leading-relaxed dark:text-white/60 sm:text-lg sm:leading-relaxed">Join us every Mondays, Tuesdays, and Thursdays for a one-hour intense prayer session from 7:00pm - 8:00pm</p>
        </div>

        {/* Wednesday Bible Studies */}
        <div className="bg-black/40 rounded-lg p-4">
          <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl mb-2">WEDNESDAYS BIBLE STUDIES</h3>
          <p className="text-base font-medium leading-relaxed dark:text-white/60 sm:text-lg sm:leading-relaxed">We devote every midweek for interactive Bible discussions and studies</p>
        </div>
      </div>
    </div>
  );
}

export default ChurchServices;
