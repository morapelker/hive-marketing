"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuContent = isOpen ? (
    <div
      className="md:hidden fixed inset-0"
      style={{
        zIndex: 999999,
        backgroundColor: '#000000',
      }}
    >
      {/* Solid background layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000000',
          zIndex: 1,
        }}
      />

      {/* Content layer */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          backgroundColor: '#000000',
        }}
      >
        {/* Close button */}
        <div
          className="flex justify-between items-center p-6 border-b"
          style={{
            backgroundColor: '#000000',
            borderBottomColor: '#333',
          }}
        >
          <span
            className="text-2xl font-bold font-headline tracking-tight"
            style={{ color: '#ffffff' }}
          >
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-colors"
            style={{ backgroundColor: '#222' }}
            aria-label="Close menu"
          >
            <span className="text-4xl leading-none" style={{ color: '#ffffff' }}>
              ×
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex flex-col gap-4 px-6 pt-12 pb-12"
          style={{ backgroundColor: '#000000' }}
        >
          <a
            className="font-headline tracking-tight py-6 px-6 rounded-xl text-xl border transition-colors"
            style={{
              color: '#ffffff',
              backgroundColor: '#1a1a1a',
              borderColor: '#333',
            }}
            href="https://github.com/morapelker/hive"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>
          <Link
            className="font-headline tracking-tight py-6 px-6 rounded-xl text-xl border transition-colors"
            style={{
              color: '#ffffff',
              backgroundColor: '#1a1a1a',
              borderColor: '#333',
            }}
            href="/docs"
            onClick={() => setIsOpen(false)}
          >
            Docs
          </Link>
          <Link
            className="font-headline tracking-tight py-6 px-6 rounded-xl text-xl border transition-colors"
            style={{
              color: '#ffffff',
              backgroundColor: '#1a1a1a',
              borderColor: '#333',
            }}
            href="/blog"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </nav>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center relative p-2 touch-manipulation"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle menu"
        type="button"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Portal the menu to body */}
      {mounted && menuContent && createPortal(menuContent, document.body)}
    </>
  );
}
