import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Users, Target, Zap, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
// import RehmanGroupCircle from "./rehman-group-circle";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                About Exalted Systems
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Pioneering innovative software solutions to elevate businesses
                in the digital era
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2010, Exalted Systems began with a vision to
                  transform the IT landscape. Our journey started with a small
                  team of passionate developers and has grown into a leading
                  force in software innovation.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today, we&apos;re proud to be a part of the Rehman Group of
                  Companies, leveraging our combined strengths to deliver
                  unparalleled solutions across industries.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Exalted Systems team"
                  className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Innovation",
                  description:
                    "Pushing boundaries to create cutting-edge solutions",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "Working together to achieve exceptional results",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "Committed to delivering the highest quality in everything we do",
                },
              ].map((value, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <value.icon className="h-12 w-12 mb-4 text-blue-600" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-500">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Clients Served" },
                { number: "1000+", label: "Projects Completed" },
                { number: "50+", label: "Awards Won" },
                { number: "15+", label: "Years of Excellence" },
              ].map((stat, index) => (
                <Card key={index} className="bg-blue-600 text-white">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <span className="text-4xl font-bold mb-2">
                      {stat.number}
                    </span>
                    <span className="text-sm uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Part of Something Bigger
            </h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
              Exalted Systems is proud to be a part of the Rehman Group of
              Companies, a diverse conglomerate committed to excellence across
              multiple industries.
            </p>
            {/* <RehmanGroupCircle /> */}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Journey
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be a part of our mission to shape the future of technology.
                Let&apos;s create something extraordinary together.
              </p>
              <div className="space-x-4">
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  size="lg"
                >
                  Contact Us
                </Button>
                <Button variant="outline" size="lg">
                  View Careers
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
