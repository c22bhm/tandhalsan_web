import React from 'react';
import Image from '../Images/Gruppbilder/Tandhälsan_gruppbildv3_highres.jpg';
import FredrikPort from '../Images/PersonalPorträtt/Fredrik1.jpg';
import AngelicaPort from '../Images/PersonalPorträtt/Angelica1.jpg';
import MalinPort from '../Images/PersonalPorträtt/Malin1.jpg';
import MonicaPort from '../Images/PersonalPorträtt/Monica1.jpg';
import FridaPort from '../Images/PersonalPorträtt/Frida1.jpg';
import SallaPort from '../Images/PersonalPorträtt/Salla1.jpg';
const employeeData = [
	{name: 'Fredrik Hellström', role: 'Leg. Tandläkare', imageSrc: FredrikPort,},
	{name: 'Angelica', role: 'Tandsköterska', imageSrc: AngelicaPort,},
	{name: 'Frida', role: 'Tandsköterska', imageSrc: FridaPort,},
	{name: 'Malin', role: 'Tandhygienist', imageSrc: MalinPort,},
	{name: 'Monica', role: 'Tandsköterska', imageSrc: MonicaPort,},
	{name: 'Salla', role: 'Leg. Tandläkare', imageSrc: SallaPort,},
]

export default function Info() {
  return (
    <div className="bg-gray-100">
      <div className="bg-white w-full p-4 md:p-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex-1 md:max-w-[400px] mx-4 my-4">
              <img className="object-cover h-auto w-full" src={Image} alt="image" />
            </div>
            <div className="flex-1 md:max-w-[400px] mx-4 my-4">
              <h2 className="font-bold text-xl font-system text-blue-600 mb-3">
                Tandhälsan Team Fredrik Hellström
              </h2>
              <div className="mt-3">
                <h3 className="text-gray-400 font-bold text-lg font-system">
                  Adress
                </h3>
                <p className="text-gray-400 font-normal text-base font-system">
                  Nygatan 2, 891 64
                </p>
                <p className="text-gray-400 font-normal text-base font-system">
                  Örnsköldsvik
                </p>
              </div>
              <div className="mt-3">
                <h3 className="text-gray-400 font-bold text-lg font-system">
                  Telefon
                </h3>
                <p className="text-gray-400 font-normal text-base font-system">
                  0660-164 00
                </p>
              </div>
              <div className="mt-3">
                <h3 className="text-gray-400 font-bold text-lg font-system">
                  Telefontider
                </h3>
                <p className="text-gray-400 font-normal text-base font-system">
                  mån-tor 8:00-15:30
                </p>
                <p className="text-gray-400 font-normal text-base font-system">
                  fre 8:00-12:00
                </p>
              </div>
              <div className="mt-3">
                <h3 className="text-gray-400 font-bold text-lg font-system">
                  Epost
                </h3>
                <p className="text-gray-400 font-normal text-base font-system">
                  info@tandhalsanovik.se
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-blue-900 font-semibold text-xl font-system">
              En grupp på företaget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {employeeData.map((employee, index) => (
              <div key={index} className="w-full max-w-xs mx-auto my-5 flex flex-col items-center">
                <img className="rounded-[50%] w-3/5" src={employee.imageSrc} alt="user" />
                <h3 className="text-blue-900 font-semibold text-lg font-system mt-2">
                  {employee.name}
                </h3>
                <p className="text-gray-400 font-normal text-base font-system">
                  {employee.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}