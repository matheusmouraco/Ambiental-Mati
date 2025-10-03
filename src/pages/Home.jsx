
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, MessageSquare, Search, Award, Smartphone, Users, Zap, ShieldCheck, PenTool, BrainCircuit, XCircle, Star, Leaf, Globe2, TreePine, Factory } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20empresa%20ambiental.";

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b8a388f17_portfolio-1-a-50-Prancheta-11.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8be8cae5b_portfolio-1-a-50-Prancheta-13.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b46e9f54c_portfolio-1-a-50-Prancheta-32.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9ac816143_portfolio-51-a-100-Prancheta-3-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5071c4759_portfolio-51-a-100-Prancheta-15-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b6f41d38_portfolio-51-a-100-Prancheta-52.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Leaf className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Legalização Ambiental não é só uma obrigação. É o que protege o negócio e viabiliza o crescimento.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Quando procuram por esses serviços, encontram a sua empresa? Seu site transmite o nível técnico e a seriedade que esse assunto exige?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Você atua com responsabilidade. Seu site também precisa comunicar isso.</h2>
             <p className="text-xl text-zinc-300 mt-6">Na Mati Studio, criamos sites profissionais para empresas da área ambiental: transformar experiência técnica em presença digital forte e confiável.</p>
          </div>
        </section>

        {/* What companies seek */}
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Todos os dias, empresas buscam por soluções para:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Obter ou renovar licenças ambientais",
                        "Adequar empreendimentos à legislação vigente",
                        "Cumprir exigências de IBAMA, CETESB, CONAMA",
                        "Evitar multas, embargos e processos",
                        "Atuar com responsabilidade e credibilidade",
                        "Encontrar soluções técnicas especializadas",
                    ].map(item => (
                         <div key={item} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <CheckCircle className="w-6 h-6 text-[#FF004D] shrink-0 mt-1"/>
                            <p className="text-lg text-zinc-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What a site can do */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que um site profissional pode fazer pela sua empresa:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Posicionar sua marca como referência técnica no setor",
                        "Aumentar a confiança de clientes corporativos e construtoras",
                        "Gerar orçamentos qualificados por WhatsApp ou formulário",
                        "Facilitar o entendimento dos serviços para leigos",
                        "Diferenciar sua empresa da concorrência genérica",
                        "Trabalhar por você 24h, inclusive em licitações",
                    ].map(item => (
                         <div key={item} className="flex items-start gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <Star className="w-6 h-6 text-[#FF004D] shrink-0 mt-1"/>
                            <p className="text-lg text-zinc-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Services we cover */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ideal para empresas que atuam com:</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        "Licenciamento ambiental",
                        "Outorgas e autorizações",
                        "Estudos de impacto (EIA/RIMA)",
                        "Relatórios técnicos e pareceres",
                        "Regularização rural e urbana",
                        "Gestão de resíduos",
                        "Cadastro Ambiental Rural (CAR)",
                        "Projetos de compensação",
                        "Monitoramento e auditoria",
                        "Consultoria para certificações",
                    ].map(item => (
                         <div key={item} className="flex items-center gap-3 bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                            <TreePine className="w-5 h-5 text-[#FF004D] shrink-0"/>
                            <p className="text-zinc-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">O que entregamos</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Globe2 className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site institucional completo</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Para empresas ambientais que precisam transmitir credibilidade e competência técnica.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com foco em credibilidade técnica",
                               "Apresentação institucional completa",
                               "Páginas de serviços com explicação clara",
                               "Galeria de projetos por setores",
                               "Página de contato estratégica",
                               "SEO para 'licenciamento ambiental em [cidade]'",
                               "Design responsivo e profissional",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Pages para campanhas específicas</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Perfeitas para captar contatos interessados em serviços específicos.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Licenciamento para obras específicas",
                               "Regularização de atividades rurais",
                               "Projetos de reflorestamento",
                               "Auditoria para empresas exportadoras",
                               "Adequações emergenciais por fiscalizações",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Diferenciais técnicos que entregamos</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: PenTool, title: "Painel Simples", description: "Você atualiza quando quiser" },
                    { icon: Search, title: "SEO Aplicado", description: "Apareça para quem busca soluções" },
                    { icon: Smartphone, title: "100% Responsivo", description: "Funciona em todos dispositivos" },
                    { icon: Zap, title: "Site Rápido", description: "Velocidade e segurança garantidas" },
                ].map(item => (
                     <div key={item.title} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                        <item.icon className="w-8 h-8 text-[#FF004D] mx-auto mb-3"/>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Nosso Portfólio</h2>
              <p className="text-zinc-400 mt-4">Sites que já entregamos para diferentes segmentos</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 bg-white"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de site ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Site comum vs. Site feito pela Mati Studio</h2>
            <div className="bg-black rounded-xl overflow-hidden border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2"><XCircle/> Problemas comuns</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Linguagem técnica demais ou confusa</li>
                            <li>Site institucional parado e sem ação</li>
                            <li>Não aparece no Google</li>
                            <li>Visual ultrapassado</li>
                            <li>Dificuldade de atualização</li>
                        </ul>
                    </div>
                    <div className="p-8 bg-zinc-800/50">
                        <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2"><CheckCircle/> Soluções da Mati Studio</h3>
                         <ul className="space-y-2 text-zinc-300">
                            <li>Redação clara, acessível e respeitosa</li>
                            <li>Estrutura com foco em conversão</li>
                            <li>SEO técnico para áreas ambientais</li>
                            <li>Design moderno e confiável</li>
                            <li>Você atualiza sempre que quiser</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Resultado esperado com um site bem estruturado:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Autoridade reconhecida no seu segmento",
                        "Geração de oportunidades com empresas que buscam confiança",
                        "Facilidade para apresentar serviços em licitações",
                        "Comunicação clara com clientes de todos os níveis",
                        "Credibilidade digital compatível com sua atuação real",
                        "Diferenciação clara da concorrência genérica",
                    ].map(result => (
                         <div key={result} className="flex items-center gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <Factory className="w-6 h-6 text-[#FF004D] shrink-0"/>
                            <p className="text-lg text-zinc-300">{result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Leaf className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A sua empresa protege o meio ambiente e viabiliza negócios. Seu site precisa proteger sua imagem.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">Não basta só ter CNPJ e CREA. Hoje, quem não é encontrado online, perde espaço para quem comunica melhor. Vamos transformar seu conhecimento técnico em uma presença digital que vende, informa e posiciona.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site profissional agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites profissionais para empresas de legalização ambiental que querem se destacar no Google e na mente dos seus clientes.</p>
        </div>
      </footer>
    </>
  );
}
