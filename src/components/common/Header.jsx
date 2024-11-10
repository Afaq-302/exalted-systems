"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cpu, Menu, X } from "lucide-react";
import Link from "next/link";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div>
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
                href="/services"
                className="font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
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
                href="/services"
                className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
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
      </div>
    </>
  );
}

export default Header;
