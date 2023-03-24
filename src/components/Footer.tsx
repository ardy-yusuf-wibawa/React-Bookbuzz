import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="p-10 bg-gray-300 text-black">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
              <div class="mb-5 lg:col-span-3">
                <h1 class="pb-4 text-3xl text-black font-bold">BOOKBUZZ</h1>
                <div class="pb-3">
                  ipsum dolor sit, amet consectetur adipisicing elit. Totam delectus repudiandae facere.
                </div>
                <div class="pb-3">Address : No. 96, Cengkareng, Jakarta, Indonesia</div>
                <div class="pb-3">phone : +1 1234 1234 1234</div>
                <div class="pb-3">Email : support@example.com</div>
              </div>
              <div class="mb-5 lg:col-span-1">
                <h3 class="pb-4 text-black font-bold">Business Hour</h3>
                <div class="pb-3">Mon - Fri : 8AM - 10PM</div>
                <div class="pb-3">Sat : 9AM - 8PM</div>
                <div class="pb-3">Sun : Closed</div>
              </div>
              <div class="mb-5 lg:col-span-1">
                <h1 class="mb-4 text-black font-bold">Footer Menu</h1>
                <ul>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Home
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Shop
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Subscribe
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      About
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-5 lg:col-span-1">
                <h3 class="mb-4 text-black font-bold">Extras Menu</h3>
                <ul>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      About Us
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Our Office
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Delivery
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Our Store
                    </a>
                  </li>
                  <li class="pb-3">
                    <a href="#" class="hover:text-gray-50">
                      Guarantee
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center bg-gray-300 gap-8">
          <a href="#" class="w-10 h-10">
            <img src={facebook} alt="" />
          </a>
          <a href="#" class="w-10 h-10">
            <img src={instagram} alt="" />
          </a>
          <a href="#" class="w-10 h-10">
            <img src={twitter} alt="" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
