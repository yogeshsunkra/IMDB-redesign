import React from "react";
import { useState } from "react";

const AuthModal = ( {isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-dark-4 p-8 shadow-2xl border-2 border-n-1"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl text-gray-400 transition hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="mb-6 text-center text-3xl font-bold text-n-1">
          {isLogin ? "Welcome Back" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-n-2 px-4 py-3 outline-none transition focus:border-blue-500 
              bg-dark-5"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-n-2 px-4 py-3 outline-none transition focus:border-blue-500 
            bg-dark-5"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-n-2 px-4 py-3 outline-none transition focus:border-blue-500
            bg-dark-5"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg border border-n-2 px-4 py-3 outline-none transition focus:border-blue-500
              bg-dark-5"
            />
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-dark-3 py-3 font-semibold text-white transition hover:bg-dark-5"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;