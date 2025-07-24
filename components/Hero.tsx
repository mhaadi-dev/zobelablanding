import Image from "next/image";
export default function Hero() {
    return (
      <section className=" relative bg-black/50 text-white h-auto lg:min-h-[80vh] pb-10  md:py-32">
        <video src={"./video.mp4"} autoPlay={true} loop    muted
        playsInline  className=" absolute top-0 object-cover h-full   w-full -z-1"/>
        <div className="container pt-14 lg:pt-0  lg:mt-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            EMPOWERING MUSIC TALENTS
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Tools, services and connections to join the revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-medium hover:bg-indigo-100 transition">
              Join Waitlist
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    )
  }