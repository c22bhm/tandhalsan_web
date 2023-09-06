import InvisLogo from '../Images/invisalign-logo.jpg';
import StraumannLogo from '../Images/straumann.jpg';
import ChildPicture from '../Images/Child.jpg';
import { NavLink } from 'react-router-dom';



export default function Treatments() {
	return (
		<div className="min-h-screen">

<div className="py-10">
	<div className="max-w-screen-lg mx-auto px-4">
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<img className="object-cover h-auto w-full" src={ChildPicture} alt="image" />
			</div>
			<div className="flex-1 md:max-w-[400px] mx-4 my-4">
				<h3 className="font-bold font-system text-blue-600 mt-4 md:mt-0">
				Barn- och ungdomstandvård
				</h3>
				<p className="text-gray-400 font-normal text-sm font-system mt-2">
				Hos oss är alla barn och ungdomar välkomna 
				under samma regler som hos folktandvården. 
				Klicka { }
				<a className="hover:underline text-gray-500 font-normal text-sm font-system" href="https://www.rvn.se/globalassets/_vardgivarwebb/vardval-och-privata-vardgivare/vardval-tandvard-for-barn-och-ungdom/blanketter/vardgivaranmalan-blankett.pdf" target="_blank" rel="noopener noreferrer" >
						här
						</a> 
				{ } för att fylla i vårdgivaranmälan som skall 
				lämnas in till oss.
				</p>

			</div>
		</div>
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
				Implantat ersätter en eller flera förlorade 
				tänder med en konstgjord rot i titan. Vi 
				utför hela behandlingen från operation 
				till färdig tand här på kliniken.
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
		</div>
	);
}