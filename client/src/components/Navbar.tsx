import React from "react";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="bg-dark shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div>
          <Link href="/">
            <span className="text-light hover:text-primary cursor-pointer font-bold text-xl">بداية جديدة</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
