"use client";
import { motion } from "framer-motion";

export default function Banner() {
  const letters = "Frieren".split("");

  return (
    <div className="flex-1 relative h-full overflow-hidden flex flex-col justify-center items-center">
      {/* Gradiente de fundo escuro para a imagem */}
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-2" />

      {/* Animação da imagem */}
      <motion.img
        src="/pico-1.jpeg"
        className="absolute w-[28%] bottom-0 left-[50%] scale-260 z-1"
        initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.4, // Duração de 1 segundo
          delay: 1, // Começa com um atraso de 0.5 segundos
          type: "spring",
          stiffness: 20,
        }}
      />

      {/* Animação do texto */}
      <h1 className="flex text-[30rem] h-[60%] font-bold text-white text-shadow-black relative">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * 0.2, // atraso progressivo
              type: "spring",
              stiffness: 10,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <div
        className="h-full text-amber-50 w-full flex justify-between px-45 "
      >
        <motion.div
          initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.2, // atraso progressivo
            type: "spring",
            stiffness: 25,
          }}
          className="w-100 text-lg h-fit rounded-4xl backdrop-blur-md p-4"
        >
          <span className="font-bold">Sobre Boku No Pico</span>
          Boku no Pico (ぼくのぴこ, Boku no Piko) é uma série de OVA dos gêneros shotacon e hentai,
          composta por apenas três episódios dirigidos por Yatabe, Katsuyoshi.
          <br />
          <br />
          O produtor descreveu-o como "o primeiro anime shotacon do mundo".
          A série consiste em três episódios, bem como um mangá com um capítulo único, um jogo de computador e uma compilação de vídeos musicais.
          Devido ao alto custo de produção de anime, os personagens e conteúdos foram intensamente testados antes do início da produção.
        </motion.div>
      </div>
    </div>
  );
}