import { motion } from "framer-motion";
import CardPersonagem from "../ui/CardPersonagem";

export default function SecaoPersonagens() {
    const letters = "Personagens".split("");

  return(<>
  <div className="bg-black gap-5 justify-center py-10">
    <h2 id="personagens" className="text-amber-50 text-7xl font-bold text-center">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.1,
                delay: i * 0.1, // atraso progressivo
                type: "spring",
                stiffness: 20,
              }}
              viewport={{ once: false }}
            >
              {letter}
            </motion.span>
          ))}
    </h2>

    <div className="flex gap-3 justify-center py-20">
    <CardPersonagem
      nome="Pico"
      descricao="O menino loiro pré-adolescente de doze anos, nascido no dia 16 de julho, que trabalha em tempo parcial no bar de seu avô no verão, é o protagonista titular da série. 
            Muitas vezes ele é mostrado na natação, normalmente nu ou de sunga azul, depois de Mokkun sugerir. 
            Mais tarde, Tamotsu o magoa, já que não definiu sua relação com Pico."
      imagem="/pico-1.jpeg"
      tags={["Principal", "Humano", "Loiro"]}
    />
    <CardPersonagem
      nome="Chico"
      descricao="Um menino de cabelos castanhos, que desenvolve um relacionamento sexual com o Pico. 
            Ele é mais jovem e menos experiente sexualmente que Pico. 
            Ele nada frequentemente ao ar livre nu, no córrego perto de sua casa. Secretamente, vê a sua irmã mais velha se masturbar no quarto. Na maioria dos casos, Chico é ativo em Pico, apesar da idade. 
            Ele vive com sua irmã em uma casa grande, numa zona florestal isolada."
      imagem="/chico-1.jpeg"
      tags={["Ativo", "Humano", "Castanhos"]}
    />
    <CardPersonagem
      nome="Coco"
      descricao="Um menino afeminado de longos cabelos negros, ele vive em um forte debaixo do metrô. 
            Coco tem relações sexuais com Pico e Chico. 
            Depois, inadvertidamente, provoca alguns atritos no relacionamento deles, Coco decide se distanciar do Pico e Chico, apesar de achá-los novamente na Torre de Tóquio."
      imagem="/coco-1.jpeg"
      tags={["Afeminado", "Humano", "Negros"]}
    />
    </div>

  </div>
  </>)
}