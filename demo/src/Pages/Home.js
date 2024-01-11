import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import InvisLogo from '../Images/invisalign-logo.jpg';
import StraumannLogo from '../Images/straumann.jpg';
import GroupImage from '../Images/Gruppbilder/Tandhälsan_gruppbild2v3__highres.jpg';
import Vantrum from '../Images/tandhalsan_vantrum.jpg';

function Home() {
	return (
		<div className="min-h-screen">
			<div className="relative mb-16 sm:mb-0">
				<img className="w-full h-auto" src={Vantrum} alt="image" />
				<div className="p-5 bg-zinc-900 w-full absolute text-white justify-center 
				sm:bg-transparent sm:bottom-0 sm:left-0 sm:right-0 p-2 flex
				md:justify-end md:items-end md:bottom-10 md:pr-10">
					<h1 className="text-base text-center font-system font-semibold 
					sm:text-2xl 
					md:text-2xl 
					lg:text-4xl">
						Hela Familjens Tandläkare
					</h1>
				</div>
			</div>

			<div className="flex flex-wrap justify-center p-4 md:p-10">
	<div className="flex-auto min-w-[250px] max-w-md p-4 md:p-10 text-center m-0">
		<NavLink to="/Kontakt & Öppettider" className="flex flex-col items-center justify-center">
			<ClockIcon className="h-16 w-16 md:h-20 md:w-20 text-blue-900" />
			<h3 className="font-bold font-system text-blue-600 mt-3">
				Våra öppettider
			</h3>
			<p className="text-gray-400 font-normal text-sm font-system mt-1">
				Här hittar du våra öppettider, se även avvikande öppettider.
			</p>
		</NavLink>
	</div>
	<div className="flex-auto min-w-[250px] max-w-md p-4 md:p-10 text-center m-0">
		<NavLink to="/Kontakt & Öppettider" className="flex flex-col items-center justify-center">
			<MapPinIcon className="h-16 w-16 md:h-20 md:w-20 text-blue-900" />
			<h3 className="font-bold font-system text-blue-600 mt-3">
				Hitta till oss
			</h3>
			<p className="text-gray-400 font-normal text-sm font-system mt-1">
				Besök oss på Nygatan 2, samma ingång som Strand City Hotel.
			</p>
		</NavLink>
	</div>
			</div>

			<div className="bg-gray-100 py-10">
	<div className="max-w-screen-lg mx-auto px-4">
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<img className="object-cover h-auto w-full" src={InvisLogo} alt="image" />
			</div>
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<h3 className="font-bold font-system text-blue-600 mt-4 md:mt-0">
		Invisalign
				</h3>
				<p className="text-gray-400 font-normal text-sm font-system mt-2">
				Ett vackrare leende, bättre 
				tuggfunktion eller minskat slitage 
				- det finns många anledningar till 
				att rätta till sneda tänder, även 
				som vuxen. Vi arbetar med 
				nvisalign-systemet.
				</p>
				<NavLink
		to="https://www.invisalign.se/"
		className="bg-blue-900 text-white font-bold opacity-80 hover:opacity-100 inline-block py-2 px-6 mt-3 rounded text-center transition duration-300"
				>
		Läs mer
				</NavLink>
			</div>
		</div>
	</div>
			</div>

			<div className=" py-10">
	<div className="max-w-screen-lg mx-auto px-4">
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<img className="object-cover h-auto w-full" src={StraumannLogo} alt="image" />
			</div>
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<h3 className="font-bold font-system text-blue-600 mt-4 md:mt-0">
		Straumann 
				</h3>
				<p className="text-gray-400 font-normal text-sm font-system mt-2">
				Ett vackrare leende, bättre 
				tuggfunktion eller minskat slitage 
				- det finns många anledningar till 
				att rätta till sneda tänder, även 
				som vuxen. Vi arbetar med 
				nvisalign-systemet.
				</p>
				<NavLink
		to="https://www.straumann.com/en/dental-professionals.html"
		className="bg-blue-900 text-white font-bold opacity-80 hover:opacity-100 inline-block py-2 px-6 mt-3 rounded text-center transition duration-300"
				>
		Läs mer
				</NavLink>
			</div>
		</div>
	</div>
			</div>

			<div className="bg-gray-100 py-10">
	<div className="max-w-screen-lg mx-auto px-4">
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<img className="object-cover h-auto w-full" src={GroupImage} alt="image" />
			</div>
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<h3 className="font-bold font-system text-blue-600 mt-4 md:mt-0">
		Tandhälsan Team Fredrik Hellström
				</h3>
				<p className="text-gray-400 font-normal text-sm font-system mt-2">
		Hos Tandhälsan får du kvalitativ tandvård i en avkopplande och trygg miljö. Du tas väl omhand av ett engagerat team som består av erfarna tandläkare, tandsköterskor och en tandhygienist som alla arbetar för att erbjuda bästa möjliga tandvård.
				</p>
				<NavLink
		to="/Om oss"
		className="bg-blue-900 text-white font-bold opacity-80 hover:opacity-100 inline-block py-2 px-6 mt-3 rounded text-center transition duration-300"
				>
		Läs mer
				</NavLink>
			</div>
		</div>
	</div>
			</div>
		</div>
	);
}

export default Home;
