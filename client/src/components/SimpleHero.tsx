import React from 'react';
import logoImage from "@assets/IMG_20250328_105907_803.jpg";

export default function SimpleHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src={logoImage} 
            alt="شعار بداية جديدة" 
            className="w-60 h-60 object-cover rounded-full mx-auto"
            loading="eager" // Prioritize loading this image
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">بداية جديدة</h1>
        <p className="text-xl mb-6 max-w-md mx-auto">
          مجموعتنا تختص بالإنجازات الدراسية والتغيير للأفضل
        </p>
      </div>
    </section>
  );
}