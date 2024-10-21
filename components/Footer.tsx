import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants/constants";

const Footer = () => (
  <footer className='max-w-[1440px] mx-auto flex justify-center flex-col border-t border-gray-200'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className="flex justify-center items-start gap-10 w-full">
        <div className='flex flex-col items-start gap-6 justify-center mr-56'>
          <Image src='/EAIS.svg' alt='EAIS' width={80} height={18} className='object-contain' />
        </div>

        <div className="flex flex-row gap-28 justify-start mr-20">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <span key={link.title} className="text-gray-500 text-sm"> 
                    <Link href={link.url}>
                      {link.title}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <Link href="https://www.linkedin.com/company/eaiservice/" target="_blank" className="flex items-center space-x-2 text-blue-600">
        <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        <span className="text-sm">LinkedIn</span>
      </Link>
      <p>@2024 EAIS. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
