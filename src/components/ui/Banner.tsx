"use client";
import { motion } from "framer-motion";

export default function Banner() {
  const letters = "Boku-No-Pico".split("");

  return (
    <div className="flex-1 relative h-full overflow-hidden flex flex-col justify-center items-center">
      {/* Gradiente de fundo escuro para a imagem */}
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-2" />

      {/* Animação da imagem */}
      <motion.img
        src="/pico-principal.png"
        className="absolute w-[20%] bottom-0 left-[50%] scale-225 z-1"
        initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.4,
          delay: 1,
          type: "spring",
          stiffness: 20,
        }}
      />

      {/* Animação do texto grande (título) */}
      <motion.h1
        initial={{ y: -50, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: -80, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 30,
        }}
        className="flex text-[19rem] h-[58%] font-bold text-white text-shadow-black relative -translate-y-1"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
              type: "spring",
              stiffness: 10,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Bloco de texto com subida suave */}
      <motion.div
        initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: -40, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          type: "spring",
          stiffness: 40,
        }}
        className="h-full text-amber-50 w-full flex justify-between px-40"
      >
        <div className="w-100 text-lg h-fit rounded-4xl backdrop-blur-md p-4">
          <span className="font-bold">Sobre Boku No Pico</span>
          <br />
          Boku no Pico (ぼくのぴこ, Boku no Piko) é uma série de OVA dos gêneros shotacon e hentai,
          composta por apenas três episódios dirigidos por Yatabe, Katsuyoshi.
        </div>
      </motion.div>
    </div>
  );
}
