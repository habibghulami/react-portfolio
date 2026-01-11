import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
	return (
		<section className="bg-slate-900 w-full min-h-screen ">
			<div className=" max-w-7xl mx-auto relative ">
				<div className="fixed left-0 top-1/2 w-32 h-40 hidden lg:flex ustify-center items-center flex-col -translate-x-[80px]">
					<div className="flex justify-between items-center px-3 bg-blue-700 text-white font-bold font-nano w-full h-full hover:translate-x-[80px] transition-all duration-500 cursor-pointer">
						<span>Linkedin</span>
						<Linkedin />
					</div>
					<div className="flex justify-between items-center px-3 bg-gray-700 text-white font-bold font-nano w-full h-full hover:translate-x-[80px] transition-all duration-500 cursor-pointer">
						<span>Github</span>
						<Github />
					</div>
					<div className="flex justify-between items-center px-3 bg-green-400 text-white font-bold font-nano w-full h-full hover:translate-x-[80px] transition-all duration-500 cursor-pointer">
						<span>Email</span>
						<Mail />
					</div>
					<div className="flex justify-between items-center px-3 bg-blue-500 text-white font-bold font-nano w-full h-full hover:translate-x-[80px] transition-all duration-500 cursor-pointer">
						<span>Facebook</span>
						<Facebook />
					</div>
				</div>

				<Header />
				<Home />
				<About />
				<Skills />
				<Work />
				<Contact />
			</div>
		</section>
	);
}

export default App;
