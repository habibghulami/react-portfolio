import { TextAlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
	const [ismenuopen, setIsMenuOpen] = useState(false);

	const Links = [
		{
			label: "home",
			link: "home",
		},
		{
			label: "about",
			link: "about",
		},
		{
			label: "skills",
			link: "skills",
		},
		{
			label: "work",
			link: "work",
		},
		{
			label: "contact",
			link: "contact",
		},
	];

	return (
		<header className="w-full h-14 bg-transparent border-b border-white/10 backdrop-blur-md fixed top-0 left-0 z-[100] ">
			<nav className="max-w-7xl h-full mx-auto flex justify-between items-center px-8 py-2 bg-transparent ">
				<div
					onClick={() => {
						setIsMenuOpen(!ismenuopen);
					}}
					className="w-6 h-6 flex lg:hidden justify-center items-center absolute right-6 top-5 cursor-pointer z-[105]"
				>
					{ismenuopen ? (
						<X className="text-white/70 " />
					) : (
						<TextAlignJustify className="text-white/70 " />
					)}
				</div>
				<a
					href="/"
					className="logo text-4xl md:text-4xl italic font-semi-bold text-rose-700"
				>
					HZ
				</a>
				<div className="w-auto h-auto hidden lg:flex justify-between items-center gap-0 md:gap-10">
					{Links.map(({ label, link }) => (
						<Link
							key={label}
							className="text-white/70 text-[15px] capitalize relative links cursor-pointer"
							to={link}
							smooth={true}
							duration={500}
							spy={true}
							activeClass="active"
							activeStyle={{
								color: "white",
								borderBottom: "2px solid #be123c",
							}}
						>
							{label}
						</Link>
					))}
				</div>

				<div
					className={`absolute w-full h-screen bg-gray-900 flex flex-col justify-center items-center gap-8  top-0 transition-all duration-500 ${
						ismenuopen
							? "left-0 translate-x-0 opacity-100"
							: "translate-x-full opacity-0"
					}`}
				>
					<a
						onClick={() => {
							setIsMenuOpen(!ismenuopen);
						}}
						href="/"
						className="logo text-4xl md:text-4xl italic font-bold text-rose-700 absolute top-2 left-7"
					>
						HZ
					</a>
					{Links.map(({ label, link }) => (
						<Link
							onClick={() => {
								setIsMenuOpen(!ismenuopen);
							}}
							key={label}
							className="text-white/70 text-[15px] capitalize relative links cursor-pointer"
							to={link}
							smooth={true}
							duration={500}
							spy={true}
							activeClass="active"
							activeStyle={{
								color: "white",
								borderBottom: "2px solid #be123c",
							}}
						>
							{label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Header;
