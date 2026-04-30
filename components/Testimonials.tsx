"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  { name: "Carlos Mendes", role: "CEO, Distribuidora Mendes", text: "Eu pagava caro no banco e não tinha parâmetro para comparar. A MB Finance trouxe outras opções e explicou com clareza o que fazia sentido para a empresa.", initials: "CM" },
  { name: "Fernanda Oliveira", role: "Proprietária, Clínica Estética Bella", text: "Precisava de capital de giro para expandir sem apertar o caixa. O processo foi direto, com acompanhamento do começo ao fim.", initials: "FO" },
  { name: "Ricardo Souza", role: "Sócio, Transportadora RS", text: "A antecipação de recebíveis ajudou a organizar o fluxo de caixa em um mês pesado. A diferença foi entender o custo antes de contratar.", initials: "RS" },
  { name: "Juliana Costa", role: "Diretora, JC Serviços", text: "O atendimento foi claro e sem pressão. Recebemos opções, comparamos os cenários e decidimos com mais segurança.", initials: "JC" },
  { name: "Marcelo Lima", role: "Fundador, ML Tech", text: "A conta PJ e o crédito vieram dentro do que a empresa precisava naquele momento. Foi simples porque alguém explicou o caminho.", initials: "ML" },
  { name: "Patrícia Barros", role: "MEI, Studio PB", text: "Como MEI, eu tinha dificuldade para acessar crédito. A MB olhou minha realidade e mostrou alternativas que eu não conhecia.", initials: "PB" },
];

export default function Testimonials() {
  const firstCol = testimonials.slice(0, 2);
  const secondCol = testimonials.slice(2, 4);
  const thirdCol = testimonials.slice(4, 6);

  return (
    <section id="depoimentos" className="py-14 md:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,153,221,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-brand-secondary/20 py-1 px-4 rounded-full bg-brand-secondary/5 text-brand-secondary text-xs font-semibold tracking-widest uppercase">
              Depoimentos
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-primary leading-tight tracking-tight">
            +130.000 empresários{" "}
            <span className="text-brand-secondary">confiam na MB Finance</span>
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-gray-500 font-medium">
            Veja relatos de empresas que passaram a comparar melhor antes de contratar.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[480px] md:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstCol} duration={15} />
          <TestimonialsColumn testimonials={secondCol} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdCol} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
