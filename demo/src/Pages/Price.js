import Image from '../Images/Gruppbilder/Tandhälsan_gruppbild2024v2_1.jpg';

export default function Price() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
		<div className="w-full max-w-screen-lg p-10">
			<div className="flex flex-col space-y-10">
				<div className="flex-1 ">
				<img className="object-cover h-auto w-full" src={Image} alt="image" />
				</div>
				<div className="flex-1 ">
					<div>
						<h1 className="text-gray-500 font-semibold text-sm font-system">
						Priser hos Tandhälsan
						</h1>
						<p className="text-gray-400 font-normal text-sm font-system">
						Du får alltid ett kostnadsförslag av oss 
						innan varje behandling. <br /><br />
						Vi är en kontantfri mottagning. Betalning 
						sker efter varje besök med kort, swish eller 
						faktura via Walley och deras fakturatjänst. 
						</p>
					</div>
					<div>
						<h1 className="text-gray-500 font-semibold text-sm font-system pt-5">
						Tandvårdsstöd och högkostnadsskydd
						</h1>
						<p className="text-gray-400 font-normal text-sm font-system">
						Hos oss får du kostnadsfri tandvård 
						till och med det år du fyller 20 år. 
						Därefter kan du ta del av tandvårdsbidrag 
						och högkostnadsskyddet via Försäkringskassan. 
						<br /> <br />
 						Högkostnadsskyddet innebär att du själv 
						betalar kostnader som under ett år är 
						sammanlagt 3000 kronor enligt statens 
						referenspriser. Sedan får du ersättning 
						för
						<br /><br />
 						50 procent av kostnader som överstiger 
						3 000 kronor
						<br/>
						85 procent av kostnader som översitger 
						15 000 kronor
						<br /><br />
 						Högkostnadsskyddet beräknas per år, det 
						betyder att alla åtgärder som görs under 
						en period på tolv månader räknas in i skyddet.
						<br /><br />
						Tänk på att du själv kan bestämma om du vill 
						påbörja en ny ersättningsperiod innan den 
						tidigare löpt ut, det kan vara bra om du står 
						inför en större behandling. 
						<br /><br />
 						Läs gärna mer om tandvårdsstöd och 
						högkostnadsskydd på Försäkringskassans 
						webbplats.
						</p>
						<a className="hover:underline text-gray-500 font-normal text-sm font-system" href="https://www.forsakringskassan.se/" target="_blank" rel="noopener noreferrer" >
						www.forsakringskassan.se
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	)
}