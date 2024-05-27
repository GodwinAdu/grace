import React from 'react';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

function ChurchServices() {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary2 bg-opacity-10 text-primary2">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <div className="bg-blue p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sunday Service */}
        <div className="shadow-xl rounded-lg p-4">
          <h3 className="  mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Address</h3>
          <List text="Curtis Building " />
          <List text="4 Berking Avenue" />
          <List text="Leeds, LS9 9DZ" />
        </div>

        {/* Online Evening Prayers */}
        <div className="shadow-xl rounded-lg p-4">
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Phone</h3>
          <List text="+44 7400673973" />
          <List text="+44 7448017144" />
          {/* <List text="Counseling " /> */}
        </div>

        {/* Wednesday Bible Studies */}
        <div className="shadow-xl rounded-lg p-4">
          <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl mb-2">Emails</h3>
          <List text="info@altarofgrace.org" />
          <List text="admin@altarofgrace.org " />
          <List text="altarofgrace@gmail.com" />
        </div>
      </div>
    </div>
  );
}

export default ChurchServices;
