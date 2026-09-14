"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      setIsHidden(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      let x = e.clientX;
      let y = e.clientY;

      const target = e.target as HTMLElement;
      const isMagneticElement = target.closest("[data-magnetic]");
      
      if (isMagneticElement) {
        const rect = isMagneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;
        
        x = centerX + deltaX;
        y = centerY + deltaY;
        setIsMagnetic(true);
      } else {
        setIsMagnetic(false);
      }

      targetPosition.current = { x, y };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const dx = targetPosition.current.x - currentPosition.current.x;
      const dy = targetPosition.current.y - currentPosition.current.y;
      
      currentPosition.current.x += dx * 0.15;
      currentPosition.current.y += dy * 0.15;
      
      setPosition({ ...currentPosition.current });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`h-2 w-2 rounded-full bg-brand transition-all duration-200 ${
            isHovering ? "scale-150 opacity-80" : "scale-100 opacity-60"
          } ${isMagnetic ? "scale-[2]" : ""}`}
        />
      </div>
      
      <div
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border border-brand/30 transition-all duration-300 ${
            isHovering ? "h-12 w-12" : "h-8 w-8"
          } ${isMagnetic ? "h-16 w-16 border-brand/60" : ""}`}
        />
      </div>
    </>
  );
}
