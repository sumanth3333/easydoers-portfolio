export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start space-y-6 md:space-y-0">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">EasyDoers</h3>
            <p>Professional Business Solutions</p>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: info@easydoers.com</p>
            <p>Phone: (814) 218-7667</p>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} EasyDoers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

