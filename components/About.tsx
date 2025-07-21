import Image from "next/image";

import about from "@/assets/about.jpg"
export default function About() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 text-gray-900 mb-6">ZOBELAB</h2>
            <p className="text-xl text-gray-600 mb-4">
              Cutting edge music and development platform
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Zobelab is the ultimate one-step technology application software for the independent music industry. We are creating a revolutionary platform that provides all the resources you need to succeed in the competitive music industry.
              </p>
              <p className="text-gray-700 mb-6">
                Our goal is to provide music talents worldwide with the resources they need to thrive in their careers. We believe that every talented artist deserves a chance to succeed regardless of their background or resources.
              </p>
              <p className="text-gray-700">
                With Zobelab, we want to shape the future of the music industry and create a platform that truly supports and nurtures talent.
              </p>
            </div>
          
            <div className="  bg-gradient-to-b from-purple-500 to-purple-900 rounded-full p-3 border-purple-400 border-4  flex items-center justify-center">
            <Image src={about} alt="about" className="w-full rounded-full aspect-video"></Image>
            </div>
          </div>
        </div>
      </section>
    )
  }