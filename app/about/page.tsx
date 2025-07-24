// app/about/page.tsx
import { Mail, MapPin, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import mission from "@/assets/mission.avif"
export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">THE FULL STORY</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            About ZobeLab and our vision for the music industry
          </p>
        </div>
      </section>

      {/* About ZobeLab */}
      <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ABOUT <span className='text-purple-600'>ZOBELAB</span></h2>

        <div className="container flex lg:flex-row flex-col gap-5 items-center mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="prose prose- text-gray-700">
              <p className="mb-6 text-lg">
                In this new evolving landscape of the music industry, adaptation, evolution and seizing opportunities are paramount. We address the challenges faced by record labels and the transformation changes, including emerging trends.
              </p>
              <p className="mb-6 text-lg">
                The music industry has undergone a remarkable transformation in recent years, driven by the emergence of digital platforms, streaming services, and the rise of independent artists. This has presented traditional record labels with crucial challenges.
              </p>
              <p className="mb-6 text-lg">
                Record labels have long played a vital role in discovering, nurturing, and promoting talent. However, their traditional business models are now being tested, necessitating a fresh perspective.
              </p>
            </div>
          </div>
          <Image src={mission} alt="img" className='w-full lg:w-1/4 max-h-96 rounded-lg object-cover'></Image>

        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">OUR MISSION</h2>

        <div className="container mx-auto px-4 flex lg:flex-row flex-col gap-5 items-center">
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xl md:text-2xl text-center font-semibold text-gray-800">
                We are dedicated to revolutionizing the music industry through innovative technology solutions.
              </p>
              <p className="text-lg text-center text-gray-600 mt-6">
              Our mission is to seamlessly integrate EdTech, FinTech, AI, and the MetaVerse to empower artists, music professionals, and enthusiasts worldwide. We aim to be the ultimate one-stop-shop, fostering creativity, financial empowerment, and cutting-edge
              experiences in the ever-evolving landscape of music technology.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">OUR VISION</h2>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 md:p-12 rounded-xl">
              <p className="text-xl md:text-2xl text-center font-semibold text-gray-800">
                At ZobeLab, we envision a future where music transcends boundaries.
              </p>
              <p className="text-lg text-center text-gray-600 mt-6">
              At ZobeLab, we envision a future where music
transcends boundaries, powered by a holistic
ecosystem. We aspire to be the catalyst for a
harmonious blend of education, finance, artificial intelligence, and the MetaVerse, creating an unparalleled platform that fuels the passion and prosperity of every individual connected to the world of music. Our
vision is to set new industry standards,
shaping a dynamic and inclusive space where
creativity flourishes and possibilities are limitless.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">COMPANY OVERVIEW</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6">
                ZobeLab, the holding company from Zobe Entertainment, is a comprehensive ecosystem of music delivery services including but not limited to Zobe Records, Zobe Music & Talent Agency, Zobe Magazine, Zobe TV Network, and Zobe Professional services.
              </p>
              <p className="text-gray-700 mb-6">
                Beyond these services, ZobeLab's Technology division deals with software application development. Zobe is based in the Washington DC area and has been in business for over 20 years with experience in the industry.
              </p>
              <p className="text-gray-700">
                Zobe is a one-stop shop for the music, entertainment, and media industry. We provide the tools that matter to make imagination a reality at the fingertips to enhance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">THE CHALLENGE WE SOLVE</h2>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <p className="text-gray-700 mb-4">
                The current music landscape drives many artists to start but many fail due to wanting to be in the music industry without knowing how to handle the music business.
              </p>
              <p className="text-gray-700 mb-4">
                The vast majority of music artists and their labels don't share enough knowledge or resources. There are numerous barriers for artists to capture audiences and there are messages for us concerning a new world music market.
              </p>
              <p className="text-gray-700">
                Breaking an artist into the mainstream music market can be prohibitively expensive without the right tools and platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Newsletter */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">STAY CONNECTED</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5" />
                  <span>info@zobelab.com</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span>Delaware, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <LinkIcon className="h-5 w-5" />
                  <Link href="https://zobelab.com" className="hover:underline">
                    zobelab.com
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">JOIN OUR NEWSLETTER</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email here" 
                    className="flex-grow px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}