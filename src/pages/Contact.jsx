import { Check, X } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
	const [ismodal, setIsModeal] = useState(false);

	const handleSubmit = () => {
		setIsModeal(true);

		setTimeout(() => {
			setIsModeal(false);
		}, 6000);
	};

	return (
		<section
			name="contact"
			className="w-full min-h-screen flex justify-center items-center py-16 md:py-0 relative"
		>
			<div className="w-[90%] lg:w-[60%] h-full mx-auto p-5 flex justify-center items-center flex-col">
				<div className="flex justify-center items-start flex-col gap-2 w-full h-fit my-2 pl-4">
					<h1 className=" w-fit h-fit text-3xl font-nano tracking-wide border-b-2 border-rose-700 text-white font-bold ">
						Contact
					</h1>
					<p className="font-normal font-sarif text-white/70 text-xs md:text-sm ">
						<span className="text-rose-700">// </span>Submit the form below or
						shoot me an email - myself@gmail.com
					</p>
				</div>

				<form
					className="w-full h-fit flex justify-center items-center flex-col gap-4 p-5"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						required
						placeholder="Name"
						defaultValue=""
						className="w-full h-6 text-[13px] md:text-sm rounded-sm text-white/90 bg-gray-700 py-4 px-2 outline-none focus:border border-white/70"
					/>
					<input
						type="email"
						required
						placeholder="Email"
						className="w-full h-6 text-[13px] md:text-sm rounded-sm text-white/90 bg-gray-700 py-4 px-2 outline-none focus:border border-white/70"
					/>
					<textarea
						placeholder="Message"
						className="w-full h-32 text-[13px] md:text-sm rounded-sm text-white/90 bg-gray-700 py-1 px-2 outline-none focus:border border-white/70"
					></textarea>

					<button
						type="submit"
						className="w-28 md:w-32 h-9 md:h-10 mt-2 flex justify-center items-center p-2 group transition-all duration-300 border-2 border-white/80 hover:border-rose-700 tracking-wide capitalize text-white/80 text-sm font-bold cursor-pointer "
					>
						Submit
					</button>
				</form>
			</div>

			<div
				className={`w-[60%] lg:w-[30%] h-12 lg:h-14 transition-all duration-300  text-white font-bold bg-green-300 rounded-md fixed bottom-4 mx-auto flex justify-between items-center px-5 ${
					ismodal ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
				}`}
			>
				<div className="w-fit h-full flex justify-center items-center gap-2">
					<div className="w-fit h-fit bg-green-600 rounded-full text-white font-bold p-[2px]">
						<Check />
					</div>
					Success!
				</div>
				<div
					className="w-fit h-fit text-white font-bold cursor-pointer"
					onClick={() => {
						setIsModeal(false);
					}}
				>
					<X />
				</div>
			</div>
		</section>
	);
};

export default Contact;
