import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-purple-500 text-4xl font-bold cursive tracking-widest"
          >
            Warrenayiss
          </NavLink>
          <NavLink
            activeClassName="text-blue-100 bg-blue-700"
            to="/post"
            className="inline-flex items-center py-3 px-3 mr-6 text-blue-200 hover:text-purple-900"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-3 px-3 mr-6 text-blue-200 hover:text-purple-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-3 px-3 mr-6 text-blue-200 hover:text-purple-900"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/WarryKing"
            className="mr-6 " 
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/warren-ayivor-013208169/"
            className="mr-6"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>
    </header>
  );
}