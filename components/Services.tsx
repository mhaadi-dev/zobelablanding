// components/Services.tsx
export default function Services() {
    const services = [
      {
        title: "EDUCATION",
        subtitle: "Unlock Your Full Potential",
        description: "Zobelab is committed to empowering musicians worldwide with the knowledge and skills they need to succeed. Our education services provide the foundation you need to take your career to the next level."
      },
      {
        title: "MUSIC CREATION",
        subtitle: "Innovative and Creative Solutions",
        description: "We're passionate about music and dedicated to helping you create the best possible sound. Our services include songwriting, audio production, mixing, mastering and more."
      },
      {
        title: "OPPORTUNITIES",
        subtitle: "Connecting You With the Community",
        description: "We understand the music industry can be tough to break into. That's why we provide opportunities to help you get your foot in the door, whether you're looking for gigs, tools, or a team."
      },
      {
        title: "EXPERIENCE",
        subtitle: "Immerse Yourself in the Industry",
        description: "We put the music industry in your pocket. Whether you're looking for gigs, collaborations or networking events, we've got you covered."
      }
    ]
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-purple-600 font-bold text-center mb-16">OUR SERVICES</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">{service.title}</h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.subtitle}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }