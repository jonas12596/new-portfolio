import Image from "next/image";
import logo from "../../../assets/logo.svg";
import skimmerBg from '../../../assets/skimmer-bg.jpg'
import skimmerReport from '../../../assets/skimmers-report.png'
import skimmerMap from '../../../assets/skimmers-map.png'
import skimmersType from '../../../assets/Skimmers-Type.png'
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
                {/* Hero Section with background image */}
                <section
                    className="min-w-full h-screen relative bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${skimmerBg.src})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <h1 className="text-4xl text-[#f9f7eb] absolute left-0 bottom-0 p-8 uppercase font-semibold">Skimmers</h1>
                </section>
                {/* Main Content */}
                <section className="w-full bg-[#f9f7eb] pt-12 px-8 flex justify-center">
                    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
                        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
                            <div className="w-full lg:w-1/2 flex flex-col items-center">
                                <figure className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[400px]">
                                    <Image
                                        src={skimmerMap}
                                        alt="Skimmers App Detection Map"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-auto"
                                    />
                                </figure>
                                <figcaption className="mt-3 text-center text-[#1f4c35] text-base font-medium">
                                    Skimmers App Detection Map
                                </figcaption>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col items-center">
                                <figure className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[400px]">
                                    <Image
                                        src={skimmerReport}
                                        alt="Skimmers App Report Tab"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-auto"
                                    />
                                </figure>
                                <figcaption className="mt-3 text-center text-[#1f4c35] text-base font-medium">
                                    Skimmers App Report Tab
                                </figcaption>
                            </div>
                        </div>
                        <div className="w-full flex items-start flex-col">
                            <div className="w-full flex items-start flex-col">
                                <h1 className="uppercase text-left font-semibold text-xl text-[#1f4c35]">About Project</h1>
                                <p className="mt-4 text-[#1f4c35] leading-relaxed text-base">
                                    I was contracted to handle the early frontend build for <strong>Skimmers</strong>, a mobile app created to
                                    protect people from card skimmer fraud at gas pumps, ATMs, and other everyday payment spots.
                                    My focus was on building out the UI with Expo and React Native, making sure the app had a clean,
                                    fast, and user-friendly experience right from the start. While the project has bigger goals around
                                    AI detection and data reporting, my role was to lock in the foundation — taking the concept from an
                                    idea to something people could actually see and use. This was about more than just screens and buttons;
                                    I helped give the app its first real identity, setting it up to grow and scale with New Yorkers in mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Gallery Section */}
                <section>
                    <div className="w-full flex flex-col p-8 items-center justify-center">
                        <div className="overflow-hidden">
                            <Image
                                src={skimmersType}
                                alt="App concept placeholder"
                                width={400}
                                height={250}
                                className="object-cover w-full h-full"
                            />
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
                    <small className="text-xs tracking-wide font-light opacity-60 text-[#f9f7eb]">© 2025 studio kismo</small>
                </footer>
            </main>
        </div>
    );
}