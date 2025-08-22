import Image from "next/image";
import logo from "../../../assets/logo.svg";
import skimmersLogo from "../../../assets/Skimmers_Type_Logo_2.png"; // <-- Add your Skimmers logo here
import Link from "next/link";

export default function Skimmers() {
    return (
        <div className="min-w-full h-auto bg-[#f9f7eb]">
            {/* Nav copied from app/page.js */}
            <nav className="fixed w-full left-0 top-0 bg-[#1f4c35ee] px-4 py-3 flex items-center justify-between z-50">
                <Link href='/'>
                    <Image src={logo} width={25} height={25} alt="Jonas Guzman portfolio" />
                </Link>
                <a
                    href="mailto:jonas12596@gmail.com"
                    className="uppercase text-[#f9f7eb] text-sm sm:text-base"
                >
                    PDF Resume
                </a>
            </nav>
            <main className="w-full">
                <section className="relative mt-4 w-full min-h-screen flex flex-col items-center justify-start px-4 py-12 sm:p-12">
                    <div className="w-full max-w-3xl flex flex-col items-center gap-6">
                        {/* Skimmers Logo */}
                        <figure className="flex items-center justify-center">
                            <Image
                                src={skimmersLogo}
                                alt="Skimmers Logo"
                                width={180}
                                height={180}
                                className="rounded-full"
                                priority
                            />
                        </figure>
                        <h1 className="text-2xl sm:text-4xl font-semibold text-[#1f4c35] uppercase text-center">
                            Skimmers
                        </h1>
                        <div className="w-full h-[1px] bg-[#1f4c35] my-3 rounded-full"></div>
                        <div className="flex flex-col gap-4 text-[#1f4c35] text-base sm:text-lg">
                            <p>
                                <span className="font-semibold">Skimmers</span> is an NYC-based app concept designed to 
                                protect consumers from hidden fees and deceptive charges. The platform empowers 
                                users by scanning receipts and transactions, flagging unnecessary fees, and 
                                building a shared database of “skimming” practices. 
                            </p>
                            <p>
                                I contributed to the early-stage branding, content strategy, and web presence. 
                                My role included designing simple landing pages, writing copy that communicates 
                                the mission clearly, and shaping how the app is positioned as both practical 
                                and socially impactful.
                            </p>
                            <p>
                                <span className="font-semibold">Role:</span> Independent Creator — Branding, Content Strategy, Web Design
                            </p>
                            <p>
                                <span className="font-semibold">Year:</span> 2025 (In Progress)
                            </p>
                        </div>

                        {/* Image gallery */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <Image 
                                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                                    alt="App concept placeholder"
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <Image 
                                    src="https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg"
                                    alt="User experience brainstorming"
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <Image 
                                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                                    alt="Collaboration and design process"
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer copied from app/page.js */}
                <footer className="w-full h-auto p-4 z-50 bg-[#1f4c35] flex items-center justify-center flex-col">
                    <div className="w-full max-w-3xl flex flex-col justify-center items-center sm:gap-0 mb-4">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="uppercase text-sm font-semibold tracking-wider text-[#f9f7eb]">Location</h2>
                            <p className="text-base font-light text-[#f9f7eb]">New York City</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="uppercase text-sm font-semibold tracking-wider pt-2 text-[#f9f7eb]">Contact</h2>
                            <a href="mailto:jonas12596@gmail.com" className="text-base font-light text-[#f9f7eb] hover:underline transition">jonas12596@gmail.com</a>
                            <a href="tel:6462001168" className="text-base font-light text-[#f9f7eb] hover:underline transition">646-200-1168</a>
                        </div>
                    </div>
                    <small className="text-xs tracking-wide font-light opacity-80 text-[#f9f7eb]">© 2025 studio kismo</small>
                </footer>
            </main>
        </div>
    );
}