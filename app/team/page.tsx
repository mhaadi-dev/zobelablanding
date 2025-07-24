// app/team/page.tsx
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import alonzo from "@/assets/AlonzoBlack-ZobeLab (2).avif"
import team2 from "@/assets/James _Jim_ Carroll - ZobeLab (1).avif"
import team3 from "@/assets/Joel Layton - ZobeLab.avif"
import team4 from "@/assets/KrunalPatel - ZobeLab.avif"
import team5 from "@/assets/1516242843044_edited.avif"
import Image from 'next/image';
export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Alonzo Black",
      title: "Founder & CEO",
      bio: "20+ years in the entertainment and music industry with leadership experience as a business owner of a record label, music publishing company, and talent agency with a focus on marketing, promotions, management, media, and talent development.",
      image:alonzo
    },
    {
      id: 2,
      name: "James 'Jim' Carroll",
      title: "Chief Strategy Officer (CSO)",
      bio: "30+ years in global sales management, strategy, transformation, operations, and enablement. BA in Communications/Journalism from Bridgewater State University, MBA from Southern New Hampshire University, and attended Harvard Business School. Advisory Council Member of the Harvard Business Review.",
      image: team2
    },
    {
      id: 3,
      name: "Joel Layton",
      title: "Chief Marketing Officer (CMO)",
      bio: "20+ years in web and mobile marketing expertise including Analytics, SEO, Social Media, Digital Marketing, Brand Building, and User Experience. Skilled in Wire-framing, Focus Groups, and Usability Studies with proven record of driving significant ROI. BBA in Finance from Hofstra University.",
      image: team3
    },
    {
      id: 4,
      name: "Krunal Patel",
      title: "Chief Financial Officer (CFO)",
      bio: "15+ years in financial management, accounting, and strategic planning. Expertise in GAAP compliance, financial reporting, and profitability optimization. Strong background in investor relations and capital raising. BS in Business Administration from California State University and MBA from Santa Clara University. Pursuing CPA certification.",
      image: team4
    },
    {
      id: 5,
      name: "ANKUR GARG",
      title: "Chief Technology Officer (CTO)",
      bio: "25+ years as a senior global technology leader with experience across IT security and business strategy. Expertise in cloud migration, IT security controls, virtualization, and agile development. B.A.Sc. in Computer Science from CCNY and Executive MBA from Rutgers Business School.",
      image: team5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MEET OUR TEAM</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            The visionary leaders driving ZobeLab's innovation in the music industry
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4 text-purple-600">EXECUTIVE LEADERSHIP</h2>
            <p className="text-xl text-gray-600">
              Seasoned professionals with decades of combined experience transforming the music industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-4xl font-bold text-white">
                    <Image src={member.image} alt='member' className='rounded-full h-30 w-30 object-cover aspect-square'></Image>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 line-clamp-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-purple-600">TECHNOLOGY TEAM</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Our current technology development team located off-shore is responsible for the development and execution of our technology strategy in alignment with our business objectives.
                </p>
                <p className="mb-4">
                  The 10+ team oversees the design, development, and deployment of our platform, ensuring scalability, reliability, and security. Their goal is to drive innovation and continuous improvement in our technology stack and development processes.
                </p>
                <p className="mb-4">
                  Our team is led by our CTO who manages and mentors our team of talented engineers and designers. Our development team meets regularly with our CTO and executive staff here at ZobeLab to collaborate closely with cross-functional teams to integrate technology seamlessly into our product offerings.
                </p>
                <p>
                  Our technology team developed our prototype demo and the development of our MVP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">CONTACT OUR TEAM</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-5 w-5" />
                  <span>1-202-555-0100</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5" />
                  <span>info@zobelab.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>Delaware, USA</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">STAY CONNECTED</h3>
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