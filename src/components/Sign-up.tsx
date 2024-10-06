"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Goggle from "../assets/google-icon.svg";
import Astronot from "../assets/astro.jpg";

export function SpaceSignUpComponent() {
  const [isLogin, setIsLogin] = useState(false); // Default to Sign Up mode

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const SignUpEmailPassword = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div className="min-h-screen gradient-animation flex items-center justify-center pt-20 pb-5">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Sign Up Form */}
        <div className="flex flex-col justify-center w-1/2 p-12 bg-white">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">GALAXO</h1>
          </div>
          <h2 className="mb-2 text-5xl font-bold">Join us!</h2>
          <p className="mb-8 text-lg text-gray-600">
            Welcome to Space, the ultimate Community Dashboard
          </p>
          <Button variant="outline" className="mb-4" onClick={googleLogin}>
            <img
              src={Goggle}
              alt="Google logo"
              width={20}
              height={20}
              className="mr-2"
            />
            {isLogin ? "Log in With Google" : "Sign up With Google"}
          </Button>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* New Age Field */}
            <div>
              <Label htmlFor="age">Your Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                min="1"
                max="18"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>

            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={SignUpEmailPassword}
            >
              Sign Up
            </Button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            {isLogin ? "Don’t have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              <Link to="/login">Login</Link>
            </button>
          </p>
        </div>

        {/* Right Section: Astronaut Image */}
        <div className="hidden md:flex w-1/2 relative bg-cover bg-center rounded-r-lg overflow-hidden">
          <img
            src={Astronot}
            alt="Astronaut in space"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8 text-white">
            <blockquote className="text-white text-2xl font-bold leading-tight">
              <FaQuoteLeft className="text-3xl mb-4" />
              Go anywhere you want in a Galaxy full of wonder!
              <FaQuoteRight className="text-3xl ml-auto mt-4" />
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
