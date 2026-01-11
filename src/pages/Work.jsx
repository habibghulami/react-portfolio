import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
import four from "../img/4.jpg";
import five from "../img/5.jpg";
import six from "../img/6.jpg";

const Work = () => {
	const Works = [
		{
			src: one,
		},
		{
			src: two,
		},
		{
			src: three,
		},
		{
			src: four,
		},
		{
			src: five,
		},
		{
			src: six,
		},
	];

	return (
		<section
			name="work"
			className="w-full min-h-screen flex justify-center items-center py-16 md:py-0"
		>
			<div className="w-[90%] lg:w-[60%] h-full mx-auto p-5">
				<div className="flex justify-center items-start flex-col gap-2 w-full h-fit my-4 pl-3">
					<h1 className=" w-fit h-fit text-3xl font-nano tracking-wide border-b-2 border-rose-700 text-white font-bold ">
						Work
					</h1>
					<p className="font-normal font-sarif text-white/70 text-xs md:text-sm ">
						<span className="text-rose-700">// </span>Check out some of my
						recent work.
					</p>
				</div>

				<div className="w-full h-fit p-3 grid grid-cols-1 md:grid-cols-3 gap-6">
					{Works.map((work, idx) => (
						<div
							key={idx}
							className="relative flex justify-center items-center rounded-md overflow-hidden shadow-lg shadow-slate-700 group"
						>
							<img
								src={work.src}
								alt={work.src}
								className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
							/>
							<div className="absolute top-0 left-0 w-full h-full z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center gap-1">
								<span className="text-white font-medium text-xs bg-black w-fit h-fit rounded-md p-1 cursor-pointer">
									Github
								</span>
								<span className="text-white font-medium text-xs bg-black w-fit h-fit rounded-md p-1 cursor-pointer">
									Demo
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Work;
