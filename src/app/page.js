"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, Globe, Laptop, LayoutGrid, Rocket, Users } from "lucide-react";
import Link from "next/link";

import Man1 from "@assets/man1.jpg";
import Man2 from "@assets/man2.jpg";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/path-to-your-background-pattern.svg')] opacity-10 bg-center bg-cover pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                  Elevate Your Digital Presence
                </h1>
                <p className="mx-auto max-w-2xl text-blue-100 md:text-lg lg:text-xl font-light tracking-wide">
                  Transform your ideas into impactful digital solutions. Partner
                  with us for innovative, custom software tailored to drive your
                  success.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button
                  className="px-8 py-3 text-lg bg-white text-blue-700 font-semibold rounded-full shadow-md transition-all hover:bg-blue-50 hover:scale-105"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg border border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all hover:scale-105"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-800 via-transparent"></div>
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
                  image: Man1,
                },
                {
                  quote:
                    "Working with Exalted Systems was a game-changer for our startup. They delivered a high-quality product on time and within budget.",
                  author: "John Smith",
                  position: "Founder, InnovateCo",
                  image: Man2,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-4">
                      <Image src={testimonial.image} alt="avatar" />
                    </div>
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
    </div>
  );
}
