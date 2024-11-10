"use client";
import Image from "next/image";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Cpu,
  Globe,
  Laptop,
  LayoutGrid,
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="px-4 md:px-6 sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cpu className="h-10 w-10 text-blue-600" />
            <span className="hidden sm:inline-block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Exalted Systems
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-white">
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Elevate Your Digital Presence
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cutting-edge software solutions tailored to your business
                  needs. We turn your ideas into reality.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Custom Software",
                  description: "Tailored solutions for your unique needs",
                },
                {
                  icon: Globe,
                  title: "Web Applications",
                  description: "Scalable and responsive web experiences",
                },
                {
                  icon: Laptop,
                  title: "Mobile Development",
                  description: "Cross-platform apps that delight users",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <service.icon className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Why Choose Exalted Systems?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine technical expertise with creative problem-solving
                  to deliver exceptional software solutions that drive your
                  business forward.
                </p>
                <ul className="grid gap-4">
                  {[
                    { icon: Users, text: "Expert Team of Developers" },
                    { icon: Rocket, text: "Cutting-edge Technologies" },
                    {
                      icon: LayoutGrid,
                      text: "Scalable and Flexible Solutions",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="bg-blue-600 rounded-full p-1">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-gray-800 font-medium">
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute w-full md:w-[75%] inset-0 bg-gradient-to-r from-blue-400/50 to-cyan-500/40 rounded-lg transform rotate-3"></div>
                <Image
                  src="/pic.svg"
                  alt="Team working on a project"
                  className=" relative z-10 rounded-lg shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We analyze your needs and define project scope.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "We create wireframes and prototypes for your approval.",
                },
                {
                  number: "03",
                  title: "Development",
                  description: "Our expert team brings your vision to life.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  description:
                    "We launch your project and provide ongoing support.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Exalted Systems transformed our business with their innovative software solutions. Their team's expertise and dedication are unmatched.",
                  author: "Jane Doe",
                  position: "CEO, TechCorp",
                },
                {
                  quote:
                    "Working with Exalted Systems was a game-changer for our startup. They delivered a high-quality product on time and within budget.",
                  author: "John Smith",
                  position: "Founder, InnovateCo",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Ready to Elevate Your Business?
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  Let&apos;s discuss how we can help you achieve your goals.
                  Fill out the form, and we&apos;ll get back to you shortly.
                </p>
              </div>
              <div className="space-y-4">
                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                  <Input
                    placeholder="Your Message"
                    required
                    className="border-blue-300 focus:border-blue-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            © {new Date().getFullYear()} Exalted Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
