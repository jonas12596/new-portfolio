import Link from "next/link";
import Image from "next/image";
import Jonas from '../assets/Jonas.jpeg'
import logo from "../assets/logo.svg"
import skimmersLogo from '../assets/Skimmers_Type_Logo_2.png'
import wizmatikLogo from '../assets/wizmatik_logo.jpg'
import pleLogo from '../assets/PLELogo-removebg-preview.png'

export default function Home() {
  return (
    <div className="min-w-full h-auto">
      <nav className="fixed w-full left-0 top-0 bg-[#1f4c35ee] px-4 py-3 flex items-center justify-between z-50">
        <Image src={logo} width={25} height={25} alt="Jonas Guzman portfolio" />
        <a
          href="mailto:jonas12596@gmail.com"
          className="uppercase text-[#f9f7eb] text-sm sm:text-base"
        >
          PDF Resume
        </a>
      </nav>
      <main className="w-full">
        <section className="fixed inset-0 w-full h-screen bg-gradient-to-br from-[#1f4c35] via-[#276b4a] to-[#3a8c6e] flex items-center justify-center text-center flex-col gap-4 sm:gap-6 z-10 px-4">
          <h1 className="font-medium text-2xl sm:text-4xl text-[#f9f7eb]">Jonas Guzman</h1>
          <div className="flex justify-center items-center">
            <Image
              src={Jonas}
              alt="Jonas Guzman"
              width={180}
              height={180}
              className="object-cover w-[380px] h-[380px]"
              priority
            />
          </div>
          <p className="font-light text-[#f9f7eb] text-base sm:text-lg">
            Frontend Developer and <br />
            Content Manager
          </p>
        </section>
        <section className="relative w-full min-h-screen bg-[#f9f7eb] mt-[100vh] z-20">
          <div className="px-4 py-8 sm:p-8 lg:w-full lg:flex lg:justify-center">
            <div className="w-full lg:max-w-3xl">
              <h2 className="text-xl sm:text-2xl uppercase font-semibold text-[#1f4c35]">About</h2>
              <div className="w-full h-[1px] bg-[#1f4c35] my-3 sm:my-4 rounded-full"></div>
              <div className="flex items-center justify-center flex-col gap-3 sm:gap-4">
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  Jonas is a content creator and digital storyteller with experience producing social media campaigns, independent blogs, and multimedia projects that make complex topics engaging and accessible. His work includes documenting NYC graffiti culture, developing civic-focused app content, and publishing research-driven articles on social and economic trends.
                </p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  He thrives at the intersection of research, writing, and web publishing, creating content that informs, engages, and resonates with audiences. Jonas is drawn to projects that allow him to help organizations communicate clearly and tell stories that matter to their communities.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 sm:p-8 lg:w-full lg:flex lg:justify-center">
            <div className="w-full lg:max-w-3xl">
              <h2 className="text-xl sm:text-2xl uppercase font-semibold text-[#1f4c35]">Experience</h2>
              <div className="w-full h-[1px] bg-[#1f4c35] my-3 sm:my-4 rounded-full"></div>

              <div className="flex items-start justify-center flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#1f4c35]">CodeNoir</p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  <span className="font-medium">Frontend Developer</span> | Feb 2022 - July 2024
                </p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  Built and maintained responsive web apps using React and Next.js, making sure they looked great and worked smoothly across devices.
                  Worked closely with designers and backend developers to create interfaces that were both functional and user-friendly.
                  Focused on clean code, accessibility, and solid performance to deliver digital experiences people actually enjoy using.
                </p>
              </div>

              <div className="mt-6 flex items-start justify-center flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#1f4c35]">Contracted Work</p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  <span className="font-medium">Digital Content Producer</span> | Aug 2024 - Present
                </p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  Created and managed content for web and social platforms, from blogs and videos to short campaigns.
                  My focus is on making information clear, engaging, and easy to navigate for any audience.
                  I handle content layout, visuals, and strategy while working with designers and developers to make sure everything looks polished and professional.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 sm:p-8 lg:w-full lg:flex lg:justify-center">
            <div className="w-full lg:max-w-3xl">
              <h2 className="text-xl sm:text-2xl uppercase font-semibold text-[#1f4c35]">Featured Projects</h2>
              <div className="w-full h-[1px] bg-[#1f4c35] my-3 sm:my-4 rounded-full"></div>

              <div className="w-full flex flex-col sm:flex-row items-center gap-6">
                <figure className="w-full sm:w-1/2 flex items-center justify-center mb-4 sm:mb-0">
                  <Image src={wizmatikLogo} alt="Wizmatik Logo" width={180} height={180} className="rounded-full" />
                </figure>
                <div className="w-full sm:w-1/2 flex items-start justify-center flex-col gap-2">
                  <p className="font-semibold text-[#1f4c35] text-sm sm:text-base">
                    Wizmatik - 2025
                  </p>
                  <p className="text-[#1f4c35] text-sm sm:text-base">
                    Collaborated with Wizmatik, a NYC-based creative collective, to produce branded
                    digital content and storytelling campaigns. Directed and shot a mini-documentary
                    using the Blackmagic Pocket Cinema Camera 4K, while also developing social media
                    content that organically grew the platform’s audience. Focused on blending NYC
                    graffiti culture and street art history with modern digital media to drive
                    engagement and cultural relevance.
                  </p>
                  <Link href='/' className="text-[#1f4c35] font-semibold underline">Read More</Link>
                </div>
              </div>

              <div className="mt-12 w-full flex flex-col sm:flex-row items-center gap-6">
                <figure className="w-full sm:w-1/2 flex items-center justify-center mb-4 sm:mb-0">
                  <Image src={skimmersLogo} alt="Skimmer App Logo" width={150} height={150} />
                </figure>
                <div className="w-full sm:w-1/2 flex items-start justify-center flex-col gap-2">
                  <p className="font-semibold text-[#1f4c35] text-sm sm:text-base">
                    Skimmers App - In Progress
                  </p>
                  <p className="text-[#1f4c35] text-sm sm:text-base">
                    Assisted in the development of Skimmers, a NYC-based mobile app
                    designed to detect and prevent card skimmer fraud at gas pumps, ATMs, and
                    POS systems. Led UX/UI design and full-stack development, while also
                    creating branded visuals and community-driven safety content.
                  </p>
                  <Link href='/' className="text-[#1f4c35] font-semibold underline">Read More</Link>
                </div>
              </div>

              <div className="mt-12 w-full flex flex-col sm:flex-row items-center gap-6">
                <figure className="w-full sm:w-1/2 flex items-center justify-center mb-4 sm:mb-0">
                  <Image src={pleLogo} alt="Post Labor Economy Logo" width={250} height={250} />
                </figure>
                <div className="w-full sm:w-1/2 flex items-start justify-center flex-col gap-2">
                  <p className="font-semibold text-[#1f4c35] text-sm sm:text-base">
                    Post Labor Times - 2025
                  </p>
                  <p className="text-[#1f4c35] text-sm sm:text-base">
                    A long-form editorial and research-driven blog exploring the future of work,
                    automation, and society in a world where AI and technology are redefining labor.
                    Designed in the spirit of publications like The New York Times and The Atlantic,
                    the site blends opinion, analysis, and narrative journalism.
                  </p>
                  <Link href='/' className="text-[#1f4c35] font-semibold underline">Read More</Link>
                </div>
              </div>

              {/* <div className="mt-12 w-full flex items-center gap-6">
                  <figure className="w-1/2 flex items-center justify-center">
                    <Image src={skimmersLogo} alt="Post Labor Economy Logo" width={200} height={200} />
                  </figure>
                  <div className="w-1/2 flex items-start justify-center flex-col gap-2">
                    <p className="font-semibold text-[#1f4c35] text-sm sm:text-base">
                      Post Labor Economy - 2025
                    </p>
                    <p className="text-[#1f4c35] text-sm sm:text-base">
                      A long-form editorial and research-driven blog exploring the future of work,
                      automation, and society in a world where AI and technology are redefining labor.
                      Designed in the spirit of publications like The New York Times and The Atlantic,
                      the site blends opinion, analysis, and narrative journalism.
                    </p>
                    <Link href='/' className="text-[#1f4c35] font-semibold">Read More</Link>
                  </div>
                </div> */}
            </div>
          </div>
          <div className="px-4 py-8 sm:p-8 lg:w-full lg:flex lg:justify-center">
            <div className="w-full lg:max-w-3xl">
              <h2 className="text-xl sm:text-2xl uppercase font-semibold text-[#1f4c35]">Skills</h2>
              <div className="w-full h-[1px] bg-[#1f4c35] my-3 sm:my-4 rounded-full"></div>

              <div className="mt-4 flex items-start justify-center flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#1f4c35]">Technical Stack:</p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Next.js, Sanity.io,
                  Adobe Creative Cloud, Social Media Platforms (TikTok, Instagram, YouTube)
                </p>
              </div>

              <div className="mt-4 flex items-start justify-center flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#1f4c35]">Content Development & Editing:</p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  Web copywriting, editorial calendars, SEO optimization, fact-checking, and tone/voice consistency.
                </p>
              </div>

              <div className="mt-4 flex items-start justify-center flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#1f4c35]">Digital Publishing & CMS:</p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  Content management systems, multimedia integration, responsive formatting, and accessibility standards.
                </p>
              </div>

              <div className="mt-4 flex items-start justify-center flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-[#1f4c35]">Branding & Storytelling:</p>
                <p className="text-[#1f4c35] text-sm sm:text-base">
                  Visual identity alignment, digital storytelling, audience engagement, and cross-platform campaigns.
                </p>
              </div>
            </div>
          </div>
          <footer className="mt-4 w-full h-auto p-4 z-50 bg-[#1f4c35] flex items-center justify-center flex-col">
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
        </section>
      </main>
    </div>
  );
}
