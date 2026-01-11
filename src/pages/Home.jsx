import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<section
			name="home"
			className="w-full min-h-screen flex justify-center items-center pl-10 md:pl-0 sm:pt-0 pt-10 "
		>
			<div className="w-[90%] lg:w-[60%] h-full mx-auto py-5 md:pl-10 flex justify-center flex-col">
				<p className="font-sans text-xs font-semibold text-rose-700 italic">
					Hi my name is
				</p>
				<h1 className=" tracking-wide font-nano text-4xl md:text-[50px] lg:text-[55px] font-bold text-white md:my-2 ">
					Habib Hazara
				</h1>
				<h1 className="font-nano tracking-wide text-4xl md:text-[50px] lg:text-[55px] font-bold text-white/50 md:my-2">
					I'm a Front End Developer.
				</h1>
				<p className="text-sm tracking-wide text-white/50 max-w-lg  my-2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
					optio facere soluta, dicta ea ducimus accusantium vitae eveniet
					distinctio,dicta ea ducimus accusantium vitae eveniet!
				</p>
				<button className="w-28 md:w-32 h-9 md:h-10 mt-2 flex justify-center items-center p-2 group transition-all duration-300 border-2 border-white/80 hover:border-rose-700">
					<Link
						className="tracking-wide capitalize text-white/80 w-full h-full flex justify-center items-center text-xs font-bold gap-1 cursor-pointer "
						to="work"
						smooth={true}
						duration={500}
					>
						view work
						<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 " />
					</Link>
				</button>
			</div>
		</section>
	);
};

export default Home;
