'use client';
import React, { useState, useEffect } from 'react';

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
}

interface Heart {
  id: number;
  left: number;
  delay: number;
}

interface Firework {
  left: number;
  top: number;
  delay: number;
}

export default function BismaCelebration() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);
  const [fireworks] = useState<Firework[]>(() => 
    Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    }))
  );

  useEffect(() => {
    if (showCelebration) {
      const confettiInterval = setInterval(() => {
        const newConfetti: Confetti[] = Array.from({ length: 5 }, () => ({
          id: Math.random(),
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          color: ['#ff69b4', '#ff1493', '#ff69b4', '#da70d6', '#ba55d3'][Math.floor(Math.random() * 5)]
        }));
        setConfetti(prev => [...prev, ...newConfetti].slice(-50));
      }, 200);

      const heartsInterval = setInterval(() => {
        const newHearts: Heart[] = Array.from({ length: 3 }, () => ({
          id: Math.random(),
          left: Math.random() * 100,
          delay: Math.random() * 0.3
        }));
        setHearts(prev => [...prev, ...newHearts].slice(-30));
      }, 400);

      return () => {
        clearInterval(confettiInterval);
        clearInterval(heartsInterval);
      };
    }
  }, [showCelebration]);

  const celebrationPages = [
    {
      title: "🎉 2 YEARS CELEBRATION 🎉",
      content: "آج ہماری محبت کو 2 سال مکمل ہو گئے!",
      subtitle: "730 دن، 17,520 گھنٹے، لاکھوں خوبصورت لمحات!",
      emoji: "🎊",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "💝 تم میری دنیا ہو 💝",
      content: "تم نے مجھے جو محبت دی ہے، وہ میری زندگی کا سب سے قیمتی تحفہ ہے۔ تمہاری مسکراہٹ میرے دل کو سکون دیتی ہے، تمہاری آنکھوں میں میری پوری دنیا بستی ہے۔",
      subtitle: "میں تم سے بے انتہا محبت کرتا ہوں ❤️",
      emoji: "💖",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "✨ ہماری یادیں ✨",
      content: "ہر لمحہ جو میں نے تمہارے ساتھ گزارا، وہ میرے لیے جنت کی طرح تھا۔ تمہاری ہنسی، تمہاری باتیں، تمہارا پیار - یہ سب میرے دل میں ہمیشہ کے لیے محفوظ ہیں۔",
      subtitle: "تم میری سب سے خوبصورت یاد ہو 🌟",
      emoji: "🌹",
      color: "from-rose-500 to-purple-600"
    },
    {
      title: "💕 میرا وعدہ 💕",
      content: "میں وعدہ کرتا ہوں کہ میں ہمیشہ تمہارے ساتھ رہوں گا، تمہاری ہر خوشی میں شریک ہوں گا، تمہارے ہر غم میں تمہارا سہارا بنوں گا۔ تم میری ہو اور میں صرف تمہارا ہوں۔",
      subtitle: "Forever & Always ❤️",
      emoji: "💍",
      color: "from-pink-600 to-red-600"
    }
  ];

  const loveLetter = `میری جان Bisma،

آج جب میں یہ لکھ رہا ہوں، میرا دل محبت سے بھرا ہوا ہے۔

تم نے مجھے جو محبت دی ہے، اس نے میری زندگی کو مکمل کر دیا ہے۔ جب سے تم میری زندگی میں آئی ہو، ہر دن ایک نیا خواب بن گیا ہے۔

تمہاری ہر مسکراہٹ میرے دل کو خوشیوں سے بھر دیتی ہے۔ تمہاری آنکھوں میں جھانکنا جنت کو دیکھنے کے برابر ہے۔ تمہاری آواز سن کر میرا دل گانے لگتا ہے۔

میں تم سے اتنا پیار کرتا ہوں کہ الفاظ کم پڑ جاتے ہیں۔ تم میری دھڑکن ہو، میری سانسیں ہو، میری زندگی کا مقصد ہو۔

تمہارے بغیر میری دنیا سونی ہے، تمہارے ساتھ میری زندگی جنت ہے۔

یہ 2 سال میری زندگی کے سب سے خوبصورت سال رہے ہیں۔ اور میں چاہتا ہوں کہ اگلے 200 سال بھی تمہارے ساتھ گزروں۔

تم میری پہلی محبت ہو، میری آخری محبت ہو، میری ہمیشہ کی محبت ہو۔

میں شکر گزار ہوں کہ تم میری ہو۔ میں خوش نصیب ہوں کہ تم نے مجھے اپنا بنایا۔

تم میری دنیا ہو Bisma، اور میں ہمیشہ ہمیشہ تمہارا رہوں گا۔

I LOVE YOU MORE THAN ANYTHING IN THIS WORLD ❤️

ہمیشہ تمہارا،
تمہارا دیوانہ عاشق 💕

P.S. - Happy 2nd Anniversary my love! یہ صرف شروعات ہے... ابھی بہت کچھ باقی ہے 🎉💝`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 relative overflow-hidden">
      {confetti.map(c => (
        <div
          key={c.id}
          className="absolute w-3 h-3 animate-confetti pointer-events-none"
          style={{
            left: `${c.left}%`,
            top: '-20px',
            backgroundColor: c.color,
            animationDelay: `${c.delay}s`,
            transform: 'rotate(45deg)'
          }}
        />
      ))}

      {hearts.map(h => (
        <div
          key={h.id}
          className="absolute text-4xl animate-float-up pointer-events-none"
          style={{
            left: `${h.left}%`,
            bottom: '-50px',
            animationDelay: `${h.delay}s`
          }}
        >
          ❤️
        </div>
      ))}

      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {fireworks.map((fw, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-firework"
              style={{
                left: `${fw.left}%`,
                top: `${fw.top}%`,
                animationDelay: `${fw.delay}s`
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-50vh) scale(1.5); opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes firework {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(3); opacity: 0.8; }
          100% { transform: scale(5); opacity: 0; }
        }
        .animate-confetti { animation: confetti 3s linear forwards; }
        .animate-float-up { animation: float-up 4s ease-out forwards; }
        .animate-firework { animation: firework 1.5s ease-out infinite; }
      `}</style>

      {!showCelebration ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping opacity-75">
                <div className="w-40 h-40 mx-auto text-rose-400 text-9xl">❤️</div>
              </div>
              <div className="w-40 h-40 mx-auto text-rose-600 text-9xl relative animate-pulse">❤️</div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600">
                For My Love
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-rose-600">
                BISMA ❤️
              </h2>
              <div className="flex items-center justify-center gap-3 text-3xl">
                <span className="text-yellow-500 text-4xl">⭐</span>
                <span className="text-2xl text-purple-600 font-bold">2 Years Special</span>
                <span className="text-yellow-500 text-4xl">⭐</span>
              </div>
            </div>

            <button
              onClick={() => {
                setShowCelebration(true);
                setShowFireworks(true);
                setTimeout(() => setShowFireworks(false), 3000);
              }}
              className="group relative px-16 py-6 bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 text-white text-2xl font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-pink-500/50 animate-pulse"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-3xl">🎉</span>
                Click Here My Love
                <span className="text-3xl">✨</span>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-rose-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center p-4 pt-20">
          <div className="max-w-5xl w-full">
            <div className="flex justify-center gap-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-300 ${
                    currentPage === i
                      ? 'w-12 h-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full'
                      : 'w-4 h-4 bg-white/50 rounded-full hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {currentPage < 4 && (
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-pink-300">
                <div className="text-center space-y-8">
                  <div className="text-8xl animate-bounce">
                    {celebrationPages[currentPage].emoji}
                  </div>
                  
                  <h2 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${celebrationPages[currentPage].color}`}>
                    {celebrationPages[currentPage].title}
                  </h2>
                  
                  <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-semibold max-w-3xl mx-auto">
                    {celebrationPages[currentPage].content}
                  </p>
                  
                  <p className="text-xl md:text-2xl text-rose-600 font-bold">
                    {celebrationPages[currentPage].subtitle}
                  </p>

                  <div className="flex justify-center gap-4 pt-8">
                    {currentPage > 0 && (
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-8 py-4 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition text-lg"
                      >
                        ← Previous
                      </button>
                    )}
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold hover:scale-105 transition shadow-lg text-lg"
                    >
                      {currentPage === 3 ? 'Special Message 💌' : 'Next →'}
                    </button>
                  </div>
                </div>~
              </div>
            )}

            {currentPage === 4 && (
              <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-rose-400">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🎵</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
                    دل کی بات 💌
                  </h2>
                </div>

                <div className="bg-white/70 rounded-2xl p-8 md:p-12 shadow-inner">
                  <div className="text-lg md:text-xl text-gray-800 leading-relaxed whitespace-pre-line text-right font-medium">
                    {loveLetter}
                  </div>
                </div>

                <div className="mt-12 text-center space-y-6">
                  <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-8 border-4 border-yellow-400">
                    <div className="text-5xl mb-4">🎉</div>
                    <p className="text-3xl font-bold text-rose-600 mb-2">
                      🎉 HAPPY 2ND ANNIVERSARY 🎉
                    </p>
                    <p className="text-xl text-purple-600 font-semibold">
                      Here&apos;s to forever with you! 💕
                    </p>
                  </div>

                  <button
                    onClick={() => setCurrentPage(0)}
                    className="px-10 py-4 bg-linear-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold hover:scale-105 transition shadow-lg text-lg"
                  >
                    ↺ دوبارہ دیکھیں
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}