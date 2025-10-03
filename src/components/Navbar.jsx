import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Introduction" },
  { to: "/fonctionnement", label: "Fonctionnement" },
  { to: "/exemple", label: "Exemple" },
  { to: "/resume", label: "Résumé" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto">
        <span className="font-bold text-xl text-blue-600">Docker Edu</span>
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-semibold transition-colors hover:text-blue-500 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}