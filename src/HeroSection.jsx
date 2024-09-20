import Particles from "./Particles"; // Ensure the path is correct

function HeroSection() {
  return (
    <section
      className="pt-20 relative bg-main text-main-text xl:h-[85vh]"
      dir="rtl"
    >
      {/* Particles Background */}
      <Particles id="particles" className="absolute inset-0 -z-50" />

      <div className="relative z-10">
        <div
          className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          dir="rtl"
        >
          <div className="text-right mx-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-secondary-text">
              شركة Venko Media للدعايا والإعلان
            </h1>
            <p className="max-w-2xl mb-6 font-light font-expoBook text-main-text lg:mb-8 md:text-lg lg:text-xl">
              الدعاية الجامدة بتبدأ عندنا.
              <br /> مع فريقنا، الابتكار والجاذبية والنجاح مضمونين.
              <br /> تصاميم تخطف الأنظار، محتوى مميز وخطط تسويقية تزود أرباحك.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-main rounded-lg bg-secondary-text hover:bg-main-hover focus:ring-4 focus:ring-main-hover transition-colors"
              >
                عرض جميع خدماتنا
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
            <img
              src="/src/assets/v2.gif"
              alt="Logo"
              className="w-auto h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
