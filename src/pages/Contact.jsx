import React from "react";

const Contact = () => {
	return (
		<section
			name="contact"
			className="w-full min-h-screen flex justify-center items-center py-16 md:py-0"
		>
			<div className="w-[90%] lg:w-[60%] h-full mx-auto p-5 flex justify-center items-center flex-col">
				<div className="flex justify-center items-center flex-col gap-2 w-full h-fit my-4 pl-3">
					<h1 className=" w-fit h-fit text-3xl font-nano tracking-wide border-b-2 border-rose-700 text-white font-bold ">
						Contact
					</h1>
					<p className="font-normal font-sarif text-white/70 text-xs md:text-sm ">
						<span className="text-rose-700">// </span>Submit the form below or
						shoot me an email - myself@gmail.com
					</p>
				</div>

				<form
					method="POST"
					className="w-full h-fit flex justify-center items-center flex-col gap-3 mt-6"
				>
					<input
						type="text"
						required
						placeholder="Name"
						className="w-full lg:w-[80%] h-6 rounded-sm text-white/90 bg-gray-700 py-4 px-2 outline-none focus:border border-white/70"
					/>
					<input
						type="email"
						required
						placeholder="Email"
						className="w-full lg:w-[80%] h-6 rounded-sm text-white/90 bg-gray-700 py-4 px-2 outline-none focus:border border-white/70"
					/>
					<textarea
						placeholder="Message"
						className="w-full lg:w-[80%] h-32 rounded-sm text-white/90 bg-gray-700 py-1 px-2 outline-none focus:border border-white/70"
					></textarea>

					<button className="w-28 md:w-32 h-9 md:h-10 mt-2 flex justify-center items-center p-2 group transition-all duration-300 border-2 border-white/80 hover:border-rose-700 tracking-wide capitalize text-white/80 text-sm font-bold cursor-pointer mt-2 ">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
