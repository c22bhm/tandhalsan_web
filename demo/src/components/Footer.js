import React from 'react';
import logo from '../Images/tandhalsan_ovik_ny_logo.png';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const phoneNumber = '0660-164 00';
const email = 'info@tandhalsanovik.se';

function Footer() {
  return (
    <div className="bg-blue-900">
      <div className="border-solid border-b border-sky-700/[.40]">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center">
            <img className="mt-5 mx-auto" src={logo} alt="Logo" />
            <p className="mt-5 text-white font-system text-sm">
              Tandhälsan erbjuder allmän tandvård och implantatbehandlingar, men även kosmetisk tandvård i form av tandblekningar, kronor, tandfasader och mycket annat.
            </p>
          </div>
        </div>
      </div>

      <div className="border-solid border-b border-sky-700/[.40]">
        <div className="flex flex-wrap justify-center items-center max-w-3xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 place-items-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-4">
            <PhoneIcon className="w-5 h-5 text-white" />
            <a className="block mt-2 text-center text-white font-system font-semibold" href={'tel:0660-164 00'}>
              {phoneNumber}
            </a>
          </div>
          <div className="grid grid-cols-1 place-items-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-4">
            <EnvelopeIcon className="w-5 h-5 text-white" />
            <a className="block mt-2 text-center text-white font-system font-semibold" href={'mailto:info@tandhalsanovik.se'}>
              {email}
            </a>
          </div>
          <div className="grid grid-cols-1 place-items-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-4">
            <MapPinIcon className="w-5 h-5 text-white" />
            <a className="block mt-2 text-center text-white font-system font-semibold" href="/Kontakt & Öppettider">
              Hitta oss
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-5 text-center">
        <p className="text-white font-system text-sm">
          © 2023 Tandhälsan Team Fredrik Hellström. Alla rättigheter reserverade.
        </p>
      </div>
    </div>
  );
}

export default Footer;