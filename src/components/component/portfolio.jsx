/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2KsuSJMLRno
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 text-gray-50 shadow">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">John Doe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y bg-gray-950 text-gray-50">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  John Doe
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Software Engineer</h2>
                <p className="mt-4 max-w-[700px] text-gray-300 md:text-xl">
                  I'm a passionate software engineer with a love for building innovative and user-friendly applications.
                  I specialize in full-stack development, with a strong focus on modern JavaScript frameworks and
                  cloud-based solutions.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b894] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Projects
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-[#00b894] bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#00b894]/10 hover:text-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my recent and most notable projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 bg-gray-950 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden object-cover object-center"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-50">Project 1</h3>
                  <p className="text-sm text-gray-400">
                    A web application that helps users manage their tasks and projects.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#00b894] px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 bg-gray-950 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden object-cover object-center"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-50">Project 2</h3>
                  <p className="text-sm text-gray-400">
                    A mobile app that helps users track their fitness goals and activities.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#00b894] px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 bg-gray-950 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden object-cover object-center"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-50">Project 3</h3>
                  <p className="text-sm text-gray-400">
                    A web-based data visualization tool for analyzing complex datasets.
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#00b894] px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm a passionate software engineer with a strong background in full-stack development. I love creating
                innovative and user-friendly applications that solve real-world problems. In my free time, I enjoy
                exploring new technologies, contributing to open-source projects, and mentoring aspiring developers.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <img src="/placeholder.svg" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-xs">
                  <div className="font-medium">John Doe</div>
                  <div className="text-gray-500 dark:text-gray-400">john.doe@example.com</div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-950 text-gray-50" id="contact">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#00b894] px-3 py-1 text-sm">Get in Touch</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Let's Work Together
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
                  I'm always excited to collaborate on new projects or discuss potential opportunities. Feel free to
                  reach out to me through the contact form or any of the available channels.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <form className="w-full max-w-md space-y-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-gray-800 border-gray-700 text-gray-50 focus-visible:ring-[#00b894]"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-800 border-gray-700 text-gray-50 focus-visible:ring-[#00b894]"
                  />
                  <Textarea
                    placeholder="Message"
                    className="w-full bg-gray-800 border-gray-700 text-gray-50 focus-visible:ring-[#00b894]"
                    rows={5}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#00b894] text-gray-50 hover:bg-[#00b894]/90 focus-visible:ring-[#00b894]"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-950 text-gray-50">
        <p className="text-xs text-gray-400">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}