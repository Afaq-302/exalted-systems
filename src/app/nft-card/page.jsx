"use client";

import { useState, useRef, useEffect } from "react";

export default function Card() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / (rect.height / 2)) * -10;
      const rotateY = (mouseX / (rect.width / 2)) * 10;

      setRotateX(rotateX);
      setRotateY(rotateY);
      setScale(1.1);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setScale(1);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        ref={cardRef}
        className="relative w-64 h-96 bg-white rounded-xl shadow-xl transition-all duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-80" />
        <div className="relative p-6 flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-white">NFT Card Preview</h2>
          <p className="text-white">Hover over me!</p>
        </div>
      </div>
    </div>
  );
}
