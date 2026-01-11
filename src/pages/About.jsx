const About = () => {
	return (
		<section
			name="about"
			className="w-full min-h-screen flex justify-center items-center md:pt-0 pt-20"
		>
			<div className="w-[90%] lg:w-[60%] h-full mx-auto p-5 flex justify-center items-center flex-col">
				<div className="w-full h-fit flex justify-center items-center ">
					<h1 className=" w-fit h-fit text-3xl font-nano tracking-wide text-center border-b-2 border-rose-700 text-white font-bold">
						About
					</h1>
				</div>
				<div className="w-full h-fit p-5 grid grid-cols-2 mt-5 gap-4">
					<div className="flex justify-center items-center">
						<h1 className="font-bold font-nano text-white/90 text-3xl flex justify-end items-satart">
							Hi. I'm Habib, nice to meet you. please take a look around!
						</h1>
					</div>
					<div className="">
						<p className="font-normal font-sarif text-white/70 text-sm ">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
							temporibus corrupti iusto libero sunt ad, ratione amet vel.
							Molestias sapiente dolor illo exercitationem a nobis ipsam
							consequatur harum, totam provident?, ratione amet vel.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
