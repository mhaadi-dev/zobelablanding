// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ZOBELAB</h3>
              <p className="text-gray-400">Empowering music talents worldwide with cutting-edge technology.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Academy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@zobelab.com</li>
                <li>+1 (123) 456-7890</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">FB</a>
                <a href="#" className="text-gray-400 hover:text-white transition">IG</a>
                <a href="#" className="text-gray-400 hover:text-white transition">TW</a>
                <a href="#" className="text-gray-400 hover:text-white transition">YT</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Zobelab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }