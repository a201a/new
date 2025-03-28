import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-dark">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          جميع الحقوق محفوظة &copy; بداية جديدة {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
