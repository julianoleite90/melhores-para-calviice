'use client'

import Image from 'next/image'
import { CalendarDays, Star, Truck, ShieldCheck, AlertTriangle, ThumbsUp, Clock, CheckCircle2, XCircle, User, ChevronDown, ChevronUp } from 'lucide-react'
import { CtaButton } from '@/components/CtaButton'
import { Breadcrumb } from '@/components/Breadcrumb'
import { useState } from 'react'
import Link from 'next/link'

export default function DefinamaxPage() {
  const [pergunta, setPergunta] = useState('')
  const [mensagemEnvio, setMensagemEnvio] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [mostrarMaisPerguntas, setMostrarMaisPerguntas] = useState(false)

  const enviarPergunta = () => {
    if (!pergunta.trim()) {
      setMensagemEnvio('Por favor, escreva sua pergunta antes de enviar.')
      return
    }

    setEnviando(true)
    setMensagemEnvio('Enviando...')

    // Simula um delay de envio
    setTimeout(() => {
      setPergunta('')
      setMensagemEnvio('Pergunta enviada com sucesso! Em breve nossa especialista responderá.')
      setEnviando(false)
      
      // Limpa a mensagem após 5 segundos
      setTimeout(() => {
        setMensagemEnvio('')
      }, 5000)
    }, 1500)
  }

  return (
    <main className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center text-base text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Avaliações</Link>
            <span className="mx-2">/</span>
            <span>Definamax</span>
          </div>
        </div>
      </div>

      {/* Header da Análise */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/oavatar.png"
                alt="Dra. Maria Silva"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-900">Dra. Maria Silva</p>
                <p className="text-gray-600">Especialista em Nutrição</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays className="h-4 w-4" />
              <span>Última atualização: 22 de Abril de 2025</span>
            </div>

            <h1 className="text-4xl font-serif font-bold text-gray-900">
              Análise Completa do Definamax: Vale a Pena em 2025?
            </h1>

            <div className="prose prose-lg text-gray-900">
              <p className="lead">
                Nesta análise detalhada, vamos explorar todos os aspectos do Definamax, 
                desde sua composição até resultados reais, para ajudar você a tomar uma 
                decisão informada sobre este emagrecedor natural para emagrecimento.
              </p>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-gray-900">4.8/5.0</span>
              </div>
              <span className="text-sm text-gray-600">Baseado em nossa análise e feedback dos usuários</span>
            </div>
          </div>
        </div>
      </section>

      {/* Índice */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Nesta análise você vai encontrar:</h2>
            <ul className="space-y-2 text-gray-900">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <a href="#composicao" className="hover:text-emerald-600">Composição e Ingredientes</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <a href="#eficacia" className="hover:text-emerald-600">Eficácia e Resultados</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <a href="#preco" className="hover:text-emerald-600">Preço e Custo-Benefício</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <a href="#comprar" className="hover:text-emerald-600">Onde Comprar com Segurança</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="bg-white border-b" id="visao-geral">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Visão Geral do Produto
              </h2>
              <p className="text-gray-900">
                O Definamax é um emagrecedor natural para emagrecimento que tem ganhado 
                destaque no mercado brasileiro. Desenvolvido com uma fórmula que combina 
                ingredientes termogênicos e reguladores metabólicos, ele promete auxiliar 
                no processo de emagrecimento de forma saudável e sustentável.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-900">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Fórmula 100% natural</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Registro na ANVISA</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Produção em laboratório certificado</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span>Não substitui alimentação saudável</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden w-full">
                <Image
                  src="/images/definamax-400.webp"
                  alt="Frasco do Definamax"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <CtaButton 
                href="https://definamaxoficial.com/definamax"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full text-center"
              >
                ACESSAR SITE OFICIAL
              </CtaButton>
              <p className="text-sm text-gray-900 text-center">
                Clique e seja redirecionado para o site do fabricante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Composição */}
      <section className="bg-white border-b" id="composicao">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Análise da Composição
          </h2>
          
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-900">
                A eficácia do Definamax está diretamente ligada à qualidade e sinergia 
                de seus ingredientes. Analisamos cada componente e seus benefícios 
                comprovados cientificamente:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Fibras Inteligentes */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Fibras Inteligentes
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    O Definamax contém um complexo exclusivo de fibras inteligentes (Psyllium e Agar Agar) 
                    que demonstrou em estudos clínicos a capacidade de:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Absorver até 72% da gordura ingerida nas refeições</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Promover saciedade prolongada por até 8 horas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Reduzir significativamente a absorção de calorias</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quitosana */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Quitosana
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    A Quitosana trabalha em sinergia com as fibras inteligentes, potencializando 
                    seus efeitos e oferecendo benefícios adicionais:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Captura e elimina gorduras do organismo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Auxilia na redução do colesterol</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Melhora a saúde intestinal</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Outros ingredientes importantes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Cromo + Espirulina
                  </h3>
                  <p className="text-gray-900">
                    O Cromo atua no controle do açúcar no sangue e redução da fome, enquanto a 
                    Espirulina fornece nutrientes essenciais e aumenta a energia, acelerando o 
                    metabolismo e a queima de gordura.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Complexo de Fibras
                  </h3>
                  <p className="text-gray-900">
                    A combinação única de fibras inteligentes do Definamax pode absorver até 72% 
                    da gordura das refeições, sendo o segredo para resultados rápidos e duradouros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eficácia e Resultados */}
      <section className="bg-white border-b" id="eficacia">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Eficácia e Resultados Esperados
          </h2>

          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-900">
                Nossa análise da eficácia do Definamax é baseada em estudos clínicos 
                dos ingredientes e no acompanhamento de usuários reais ao longo de 
                3 meses de uso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  1º Mês
                </h3>
                <ul className="space-y-3 text-gray-900">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Redução do apetite e compulsão</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda média de 5-7kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Mais disposição física</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  3º Mês
                </h3>
                <ul className="space-y-3 text-gray-900">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Aceleração do metabolismo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda adicional de 9-13kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Redução de medidas visível</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  5º Mês
                </h3>
                <ul className="space-y-3 text-gray-900">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Consolidação dos resultados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda total de até 19kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Melhora da autoestima</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">
                    Importante Ressaltar:
                  </h4>
                  <p className="text-yellow-800">
                    Os resultados relatados são baseados em depoimentos e experiências 
                    reais de usuários do Definamax. O Definamax não é um medicamento, 
                    mas sim um suplemento formulado com ingredientes naturais 100% 
                    eficazes para o emagrecimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preço e Onde Comprar */}
      <section className="bg-white border-b" id="preco">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Preço e Onde Comprar
          </h2>

          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-900">
                O Definamax é vendido exclusivamente através do site oficial do fabricante. 
                Esta exclusividade garante:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Vantagens da Compra Oficial
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Produto 100% original</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Garantia de satisfação</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Frete grátis em compras maiores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Desconto em pacotes promocionais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-red-900 mb-4">
                  Evite Falsificações
                </h3>
                <div className="space-y-3">
                  <p className="text-red-800">
                    Não recomendamos a compra em marketplaces como Mercado Livre ou Shopee, 
                    pois há alto risco de receber produtos falsificados, sem eficácia e 
                    potencialmente prejudiciais à saúde.
                  </p>
                  <div className="flex items-center gap-3 text-red-800">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>Sem garantia de originalidade</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-800">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>Risco à saúde</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-800">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span>Sem suporte pós-venda</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8" id="comprar">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-medium text-gray-900">
                  Acessar o Site Oficial
                </h3>
                <p className="text-gray-900 max-w-2xl mx-auto">
                  Garanta seu Definamax original com as melhores condições e total segurança.
                </p>
                <div className="flex justify-center">
                  <CtaButton 
                    href="https://definamaxoficial.com/definamax"
                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    COMPRAR NO SITE OFICIAL
                  </CtaButton>
                </div>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Entrega Expressa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Garantia de 90 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliação Final */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Nossa Avaliação Final
          </h2>

          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-900">
                Após uma análise detalhada do Definamax, incluindo sua composição, 
                eficácia, segurança e custo-benefício, podemos concluir que este é 
                um dos emagrecedores naturais mais promissores para emagrecimento disponíveis 
                atualmente no mercado brasileiro.
              </p>
              <p className="text-gray-900">
                Seus pontos fortes incluem a formulação natural cientificamente 
                embasada, resultados consistentes reportados por usuários e excelente 
                perfil de segurança.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-emerald-600 mb-4">
                  Pontos Positivos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Ingredientes naturais de alta qualidade</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Resultados comprovados por usuários</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Sem efeitos colaterais significativos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Excelente suporte ao cliente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-red-600 mb-4">
                  Pontos de Atenção
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-900">Disponível apenas no site oficial</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-900">Limitado a 1 compra por pessoa</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-900">Risco de estoque esgotar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Nota Final
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">4.8</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">Recomendamos?</span>
                  <p className="text-lg font-medium text-emerald-600">Sim, com certeza!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Comentários */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Perguntas e Comentários
          </h2>

          <div className="space-y-8">
            {/* Comentário 1 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-900">Maria Regina</h4>
                    <span className="text-sm text-gray-500">• 2 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprei o Definamax há 2 meses e já perdi 8kg! Estou muito satisfeita com os resultados. 
                    A redução do apetite foi notável já na primeira semana. Recomendo muito!
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-500">32 pessoas acharam útil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 2 - Pergunta */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-900">Carlos Pereira</h4>
                    <span className="text-sm text-gray-500">• 4 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Posso tomar junto com outros suplementos? Faço musculação e uso whey protein.
                  </p>
                  {/* Resposta */}
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/images/oavatar.png"
                        alt="Dra. Maria Silva"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="font-medium text-gray-900">Dra. Maria Silva</span>
                      <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                    </div>
                    <p className="text-gray-700">
                      Olá Carlos! Sim, você pode tomar o Definamax junto com whey protein sem problemas. 
                      Recomendamos apenas manter um intervalo de 30 minutos entre eles para melhor absorção.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentário 3 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-900">Julia Santos</h4>
                    <span className="text-sm text-gray-500">• 1 semana atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Estou no terceiro mês de uso e os resultados são impressionantes! 
                    Já perdi 12kg e minhas roupas antigas já estão largas. O melhor é que não 
                    sinto aquela ansiedade por comida que tinha antes.
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-500">45 pessoas acharam útil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Perguntas Adicionais - Inicialmente Ocultas */}
            {mostrarMaisPerguntas && (
              <>
                {/* Comentário 4 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">Roberto Almeida</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Quanto tempo demora para entregar? Moro no interior de São Paulo.
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Dra. Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Dra. Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Roberto! A entrega para o interior de São Paulo geralmente leva de 2 a 4 dias úteis. 
                          Todas as entregas são feitas com código de rastreamento para seu acompanhamento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comentário 5 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">Ana Paula Costa</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Tenho hipotireoidismo, posso tomar o Definamax?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Dra. Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Dra. Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Ana Paula! Sim, você pode tomar o Definamax mesmo com hipotireoidismo. 
                          Os ingredientes são naturais e não interferem com a medicação para tireoide. 
                          Apenas mantenha um intervalo de 2 horas entre o Definamax e seu medicamento para tireoide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comentário 6 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">Pedro Henrique</h4>
                        <span className="text-sm text-gray-500">• 3 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Qual o melhor horário para tomar? Precisa ser em jejum?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Dra. Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Dra. Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Pedro! O Definamax pode ser tomado a qualquer hora do dia, não precisa ser em jejum. 
                          Recomendamos tomar 30 minutos antes das principais refeições para melhor resultado na redução do apetite.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comentário 7 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">Mariana Santos</h4>
                        <span className="text-sm text-gray-500">• 3 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Estou amamentando, posso tomar o Definamax?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Dra. Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Dra. Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Mariana! Durante o período de amamentação, não recomendamos o uso do Definamax. 
                          É melhor aguardar o término da amamentação para iniciar o tratamento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comentário 8 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">Fernando Lima</h4>
                        <span className="text-sm text-gray-500">• 1 mês atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Tem algum efeito colateral? Causa insônia ou ansiedade?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Dra. Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Dra. Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Fernando! O Definamax é composto por ingredientes naturais e não causa insônia ou ansiedade. 
                          Não foram relatados efeitos colaterais significativos. Por ser natural, é bem tolerado pelo organismo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Botão Ver Mais */}
            <button 
              onClick={() => setMostrarMaisPerguntas(!mostrarMaisPerguntas)}
              className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-900 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              {mostrarMaisPerguntas ? (
                <>
                  Mostrar menos perguntas
                  <ChevronUp className="h-5 w-5" />
                </>
              ) : (
                <>
                  Ver mais perguntas
                  <ChevronDown className="h-5 w-5" />
                </>
              )}
            </button>

            {/* Formulário de Pergunta */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Tem alguma dúvida?
              </h3>
              <div className="space-y-4">
                <textarea 
                  className="w-full rounded-lg border border-gray-200 p-4 h-32 resize-none text-gray-900 placeholder-gray-900"
                  placeholder="Escreva sua pergunta aqui..."
                  value={pergunta}
                  onChange={(e) => setPergunta(e.target.value)}
                />
                {mensagemEnvio && (
                  <p className={`text-sm ${mensagemEnvio.includes('sucesso') ? 'text-emerald-600' : mensagemEnvio.includes('Por favor') ? 'text-red-600' : 'text-gray-600'}`}>
                    {mensagemEnvio}
                  </p>
                )}
                <div className="flex justify-end">
                  <button 
                    className={`px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors ${enviando ? 'opacity-70 cursor-not-allowed' : ''}`}
                    onClick={enviarPergunta}
                    disabled={enviando}
                  >
                    {enviando ? 'Enviando...' : 'Enviar Pergunta'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 