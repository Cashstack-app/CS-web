import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen sm:h-[800px] md:h-[1000px] lg:h-[1300px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero2.png"
          alt="Hero"
          fill
          className="object-cover scale-100"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start items-center h-full px-6 sm:px-12 md:px-16 lg:px-24 pt-20 sm:pt-28 md:pt-32 lg:pt-36">
        {/* Text Content */}
        <div className="max-w-5xl mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
            Empowering your <span className="font-bold italic">Gateway</span> to
            financial freedom
          </h1>
          <p className="text-md sm:text-xl text-[#C5C5C5] leading-relaxed max-w-3xl mx-auto">
            We is the next generation fin-tech app that empower user with
            unlimited financial freedom.
          </p>
          <button className="bg-black border border-[#383838] text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all duration-300 mt-8  hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30 flex items-center gap-2 justify-center mx-auto">
            Download
            <Image src="/Social-Icon-apple.png" alt="Download" width={20} height={20} />
            <Image src="/Social-Icon-google.png" alt="Download" width={18} height={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
