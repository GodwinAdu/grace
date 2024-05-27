import SlidingImage from "../sliding/SlidingImage";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto w-full h-[450px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <SlidingImage />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Altar Of Grace Ministry, our mission is to create a vibrant
                  and inclusive community where individuals can encounter God&apos;s
                  transforming love and grace. Through inspiring worship,
                  meaningful connections, and compassionate outreach, we aim to
                  empower lives and foster personal growth. We strive to be a
                  beacon of hope, shining God&apos;s light in our local community and
                  beyond.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our vision at Altar Of Grace Ministry is to be a place where
                  hearts are lifted through authentic worship experiences, where
                  lives are transformed by the power of God&apos;s Word, and where
                  individuals are equipped to make a positive impact in the
                  world. We envision a diverse community united in love, growing
                  together in faith, and reaching out with compassion to bring
                  about positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
