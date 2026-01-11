import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.jpg";
import ts from "../assets/ts.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
const Skills = () => {
	const Img = [
		{
			name: "HTML",
			src: html,
		},
		{
			name: "CSS",
			src: css,
		},
		{
			name: "JavaScript",
			src: js,
		},
		{
			name: "TypeScript",
			src: ts,
		},
		{
			name: "TailwindCss",
			src: tailwind,
		},
		{
			name: "React Js",
			src: react,
		},
		{
			name: "Next Js",
			src: nextjs,
		},
		{
			name: "Github",
			src: github,
		},
	];

	return (
		<section
			name="skills"
			className="w-full min-h-screen flex justify-center items-center py-16 md:py-0"
		>
			<div className="w-[90%] lg:w-[60%] h-full mx-auto p-5 ">
				<div className="flex justify-center items-start flex-col gap-2 w-full h-fit my-4 pl-3">
					<h1 className=" w-fit h-fit text-3xl font-nano tracking-wide border-b-2 border-rose-700 text-white font-bold ">
						Skills
					</h1>
					<p className="font-normal font-sarif text-white/70 text-xs md:text-sm ">
						<span className="text-rose-700">// </span>These are the technologies
						I've worked with.
					</p>
				</div>

				<div className="w-full h-fit px-3 grid grid-cols-2 md:grid-cols-4 gap-5">
					{Img.map((img, idx) => (
						<div
							className="flex justify-center items-center flex-col gap-6 group bg-slate-900 shadow-lg shadow-slate-700 rounded-md py-5"
							key={idx}
						>
							<img
								src={img.src}
								alt={img.name}
								className=" w-16 md:w-20 h-18 md:h-20 bg-center bg-cover object-cover group-hover:scale-105 transition-all duration-300"
							/>
							<h2 className="font-medium font-mono text-white/80 text-xs md:text-sm">
								{img.name}
							</h2>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
