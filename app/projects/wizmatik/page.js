import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.svg";
import artIsAlive from '../../../assets/art-is-alive.jpg'
import wizmatikIg from '../../../assets/wizmatik-ig.png'
import wizmatikTt from '../../../assets/wizmatik-tt.png'

export default function Wizmatik() {
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
                <section className="min-w-full h-auto">
                    <div
                        className="min-w-full h-screen relative bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${artIsAlive.src})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                    <h1 className="text-4xl text-[#f9f7eb] absolute left-0 bottom-0 p-8">Wizmatik</h1>
                </section>
                <section className="w-full bg-[#f9f7eb] py-12 px-8 flex justify-center">
                    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
                        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
                            <div className="w-full lg:w-1/2 flex flex-col items-center">
                                <figure className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[400px]">
                                    <Image
                                        src={wizmatikIg}
                                        width={600}
                                        height={600}
                                        alt="Wizmatik Instagram"
                                        className="object-cover w-full h-auto"
                                    />
                                </figure>
                                <figcaption className="mt-3 text-center text-[#1f4c35] text-base font-medium">
                                    Instagram: <Link href='https://www.instagram.com/wizmatikk' target="_blank" className="font-normal">@wizmatikk</Link>
                                </figcaption>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col items-center">
                                <figure className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[400px]">
                                    <Image
                                        src={wizmatikTt}
                                        width={600}
                                        height={600}
                                        alt="Wizmatik TikTok"
                                        className="object-cover w-full h-auto"
                                    />
                                </figure>
                                <figcaption className="mt-3 text-center text-[#1f4c35] text-base font-medium">
                                    TikTok: <Link href='https://www.tiktok.com/@wizmatik' target="_blank" className="font-normal">@wizmatik</Link>
                                </figcaption>
                            </div>
                        </div>
                        <div className="w-full flex items-start flex-col">
                            <h1 className="uppercase text-left font-semibold text-xl text-[#1f4c35]">About Project</h1>
                            <p className="mt-4 text-[#1f4c35] leading-relaxed text-base">
                                I shot and directed a mini doc on Bronx graffiti legend <strong>BAN2</strong>, capturing the story with a real NYC feel.
                                I also produced and edited short-form videos that blew up on social media — getting reposted by New Yorkers all over and
                                even catching attention from big pages like <strong>@newyorkers (1M+ followers)</strong>. One clip even had
                                <strong> Fat Joe</strong> drop a comment, which gave Wizmatik instant credibility. My work helped shape Wizmatik’s
                                visual identity, tying it back to hip-hop and graffiti culture while pushing the brand deeper into the NYC creative scene.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                <div className="w-full flex flex-col p-8 items-center justify-center py-8">
                    <div className="w-full max-w-4xl aspect-video rounded overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/kW3fKzvecIs"
                            title="Wizmatik Bronx Graffiti Story"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full aspect-video"
                        ></iframe>
                    </div>
                </div>
                </section>
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