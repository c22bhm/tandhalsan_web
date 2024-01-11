import Image from '../Images/Gruppbilder/Tandhälsan_gruppbildv3_highres.jpg';

export default function AboutUs() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
		<div className="w-full max-w-screen-lg p-10">
			<div className="flex flex-col space-y-10">
				<div className="flex-1 ">
				<img className="object-cover h-auto w-full" src={Image} alt="image" />
				</div>
				<div className="flex-1 ">
				<p className="text-gray-400 font-normal text-sm font-system">
				Hos Tandhälsan får du kvalitativ tandvård i en avkopplande och trygg 
				miljö. Du tas väl omhand av ett engagerat team  som består av erfarna 
				tandläkare, tandsköterskor och en tandhygienist 
				som alla arbetar för att erbjuda dig bästa möjliga tandvård.
				Tandhälsan Team Fredrik Hellström är en privat tandvårdsklinik 
				som etablerades 2001. Under åren har vi vuxit oss större och blivit 
				fler här på kliniken, samtidigt finns det mycket som inte förändrats. 
				Att alltid finnas nära våra patienter. Att att hela tiden vidareutbilda 
				oss själva för att kunna erbjuda bästa möjliga tandvård. Att alltid arbeta 
				med patientens önskemål i centrum. Det är några av de saker som alltid varit 
				viktiga för oss. Precis som det ska vara.
				 
				</p>
				<p className="text-gray-400 font-normal text-sm font-system mt-5">
				Vill du kontakta oss för att boka en undersökning?
				Klicka {" "}
				<a className="underline" href="https://boka.frenda.se/337741" target="_blank" rel="noopener noreferrer" >
					här
				</a>
				{" "}för att komma till bokningsformuläret.
				</p>
				</div>
			</div>
		</div>
	</div>
	

	)
}