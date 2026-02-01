import React, { useState, useEffect } from 'react';
import { logo } from '../assets';

const Loader = ({ isLoading = true, children, logoText = "MUHAMMAD FARKHAND WAQAR" }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);

  // Counter animation
  useEffect(() => {
    if (showLoader) {
      const interval = setInterval(() => {
        setLoadingPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 30;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [showLoader]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        setContentReady(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {/* Premium Loader Screen - Only shown when loading */}
      {showLoader && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-violet-800 via-black to-black flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(120,119,198,.05)_25%,rgba(120,119,198,.05)_26%,transparent_27%,transparent_74%,rgba(120,119,198,.05)_75%,rgba(120,119,198,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
            </div>

            {/* Floating stars */}
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.6 + 0.2,
                    animation: `twinkleFloat ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            {/* Animated Container */}
            <div className="mb-12 flex flex-col items-center justify-center">
              {/* Logo Circle Background with Logo Inside */}
              <div
                className="w-40 h-40 mx-auto mb-8 relative flex items-center justify-center"
                style={{
                  animation: 'scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                }}
              >
                {/* Rotating rings */}
                <div
                  className="absolute inset-0 rounded-full border border-violet-500/50"
                  style={{
                    animation: 'rotate 8s linear infinite',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <div
                  className="absolute inset-2 rounded-full border border-violet-400/30"
                  style={{
                    animation: 'rotate 6s linear infinite reverse',
                  }}
                />
                <div
                  className="absolute inset-4 rounded-full border-2 border-violet-600/50"
                  style={{
                    animation: 'rotate 4s linear infinite',
                  }}
                />

                {/* Inner glow */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-500 to-violet-800 opacity-30 blur-xl" />

                {/* Logo Image - Centered over rings */}
                <div className="relative z-20">
                  <img src={logo} alt="logo" className='h-32 w-32 object-contain'/>
                </div>
              </div>

              {/* Logo Text with character animation */}
              <div
                className="text-3xl md:text-4xl font-black tracking-widest text-white text-center mb-2"
                style={{
                  textShadow: '0 0 30px rgba(167, 139, 250, 0.5)',
                  letterSpacing: '0.15em',
                  whiteSpace: 'normal',
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal',
                  maxWidth: '90vw',
                  margin: '0 auto',
                }}
              >
                {logoText.split('').map((char, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline',
                      animation: `slideInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        i * 0.08
                      }s both`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>

              {/* Tagline */}
              <div
                className="text-lg md:text-xl font-semibold text-violet-300 text-center mb-8"
                style={{
                  textShadow: '0 0 15px rgba(167, 139, 250, 0.3)',
                  animation: 'fadeInUp 0.8s ease-out 0.8s both',
                  maxWidth: '90vw',
                  margin: '3rem 0',
                }}
              >
                Passionate Full Stack | MERN Developer
              </div>
            </div>

            {/* Loading progress bar */}
            <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden mx-auto mt-12">
              <div
                className="h-full bg-gradient-to-r from-violet-500 via-violet-400 to-violet-600"
                style={{
                  animation: 'loadingBar 2.5s ease-in-out forwards',
                  boxShadow: '0 0 20px rgba(167, 139, 250, 0.8)',
                }}
              />
            </div>

            {/* Percentage counter */}
            <div className="text-violet-400 text-sm font-light mt-6">
              <span>{Math.floor(loadingPercent)}%</span>
            </div>
          </div>

          {/* Styles */}
          <style>{`
            @keyframes scaleIn {
              from {
                transform: scale(0.5);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }

            @keyframes slideInDown {
              from {
                transform: translateY(-40px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }

            @keyframes fadeInUp {
              from {
                transform: translateY(20px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }

            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes loadingBar {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }

            @keyframes twinkleFloat {
              0%, 100% {
                opacity: 0.2;
                transform: translateY(0px);
              }
              50% {
                opacity: 0.8;
                transform: translateY(-20px);
              }
            }

            @keyframes blob {
              0%, 100% {
                transform: translate(0, 0) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
            }

            .animate-blob {
              animation: blob 7s infinite;
            }

            .animation-delay-2000 {
              animation-delay: 2s;
            }

            .animation-delay-4000 {
              animation-delay: 4s;
            }

            .counter {
              font-variant-numeric: tabular-nums;
            }
          `}</style>
        </div>
      )}

      {/* Content - Full width and height, only rendered when loader is done */}
      {contentReady && (
        <div
          className="w-full h-screen transition-all duration-1000 opacity-100 translate-y-0"
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Loader;