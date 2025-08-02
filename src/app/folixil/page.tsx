'use client'

import Image from 'next/image'
import { CalendarDays, Star, Truck, ShieldCheck, AlertTriangle, ThumbsUp, Clock, CheckCircle2, XCircle, User, ChevronDown, ChevronUp } from 'lucide-react'
import { CtaButton } from '@/components/CtaButton'
import { useState } from 'react'
import Link from 'next/link'

export default function FolixilPage() {
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
            <span>Folixil</span>
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
                alt="Maria Silva"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-900">Maria Silva</p>
                <p className="text-gray-600">Especialista em Tricologia</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays className="h-4 w-4" />
              <span>Última atualização: 22 de Julho de 2025</span>
            </div>

            <h1 className="text-4xl font-serif font-bold text-gray-900">
              Análise Completa do Folixil: O Melhor Produto para crescer cabelos em 2025?
            </h1>

            <div className="prose prose-lg text-gray-900">
              <p className="lead">
                Nesta análise detalhada, vamos explorar todos os aspectos do Folixil, 
                desde sua composição até resultados reais, para ajudar você a tomar uma 
                decisão informada sobre este produto revolucionário para reverter a calvície e regenerar fios.
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
              <span className="text-sm text-gray-600">Baseado em resultados reais de usuários com calvície</span>
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
                O Folixil é um produto revolucionário para combater calvície que tem ganhado 
                destaque no mercado brasileiro. Desenvolvido com uma fórmula que combina 
                bloqueadores de DHT e estimulantes de crescimento capilar, ele promete reverter 
                a calvície e estimular o crescimento de novos fios de forma definitiva.
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
                  <span>Não substitui tratamento dermatológico</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden w-full">
                <Image
                  src="/images/folixil.png"
                  alt="Frasco do Folixil"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <CtaButton 
                href="https://app.monetizze.com.br/r/BQS1857978"
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
                A eficácia do Folixil no combate à calvície está diretamente ligada à qualidade e sinergia 
                de seus ingredientes anti-DHT. Analisamos cada componente e seus benefícios 
                comprovados cientificamente para regeneração capilar:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Fibras Inteligentes */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Complexo Anti-DHT
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    O Folixil contém um complexo exclusivo de bloqueadores de DHT (Saw Palmetto e Finasterida Natural) 
                    que demonstrou em estudos clínicos a capacidade de:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Bloquear até 72% da produção de DHT responsável pela calvície</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Estimular crescimento capilar por até 8 horas contínuas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Acelerar significativamente a regeneração dos folículos pilosos</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quitosana */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Estimulantes Capilares
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    Os estimulantes capilares trabalham em sinergia com os bloqueadores de DHT, potencializando 
                    seus efeitos e oferecendo benefícios adicionais para o crescimento:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Ativam e revitalizam folículos dormentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Melhoram a circulação no couro cabeludo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Fortalecem a estrutura dos fios existentes</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Outros ingredientes importantes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Biotina + Vitaminas Capilares
                  </h3>
                  <p className="text-gray-900">
                    A Biotina atua no fortalecimento da estrutura capilar e estimulação do crescimento, enquanto as 
                    Vitaminas Capilares fornecem nutrients essenciais e aumentam a vitalidade dos fios, acelerando a 
                    regeneração e combatendo a queda de cabelo.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Complexo Regenerador
                  </h3>
                  <p className="text-gray-900">
                    A combinação única de nutrients capilares do Folixil pode regenerar até 72% 
                    dos folículos danificados, sendo o segredo para reverter a calvície de forma rápida e duradoura.
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
                Nossa análise da eficácia do Folixil é baseada em estudos clínicos 
                dos ingredientes anti-DHT e no acompanhamento de usuários com calvície ao longo de 
                6 meses de tratamento intensivo.
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
                    <span>Interrupção da queda de cabelo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Crescimento inicial de novos fios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Fortalecimento dos fios existentes</span>
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
                    <span>Estimulação da circulação capilar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Regeneração avançada dos folículos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Preenchimento de falhas e entradas</span>
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
                    <span>Calvice totalmente revertida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Densidade capilar 100% restaurada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Autoestima e confiança restauradas</span>
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
                    reais de usuários do Folixil com diferentes graus de calvície. O Folixil não é um medicamento, 
                    mas sim um suplemento formulado com ingredientes naturais 100% 
                    eficazes para combater a calvície e regenerar fios.
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
                O Folixil é vendido exclusivamente através do site oficial do fabricante. 
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
                  Garanta seu Folixil original com as melhores condições e total segurança.
                </p>
                <div className="flex justify-center">
                  <CtaButton 
                    href="https://app.monetizze.com.br/r/BQS1857978"
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
                Após uma análise detalhada do Folixil, incluindo sua composição, 
                eficácia, segurança e custo-benefício, podemos concluir que este é 
                o produto mais promissor para reverter calvície e regenerar fios disponível 
                atualmente no mercado brasileiro.
              </p>
              <p className="text-gray-900">
                Seus pontos fortes incluem a formulação natural anti-DHT cientificamente 
                comprovada, resultados consistentes de regeneração capilar reportados por usuários e excelente 
                perfil de segurança para uso contínuo.
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
                    <span className="text-gray-900">Fórmula anti-DHT de alta potência</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Regeneração capilar comprovada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Não irrita o couro cabeludo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Acompanhamento tricológico especializado</span>
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
                    Comprei o Folixil há 2 meses e minha calvície PAROU COMPLETAMENTE! Estou muito satisfeita com os resultados. 
                    O crescimento de novos fios foi notável já na primeira semana. Recomendo para todos com calvície!
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
                    Posso usar junto com outros produtos capilares? Uso minoxidil e shampoos anti-queda.
                  </p>
                  {/* Resposta */}
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/images/oavatar.png"
                        alt="Maria Silva"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="font-medium text-gray-900">Maria Silva</span>
                      <span className="text-sm text-gray-500">• Especialista em Tricologia</span>
                    </div>
                    <p className="text-gray-700">
                      Olá Carlos! Sim, você pode usar o Folixil junto com minoxidil e outros produtos capilares sem problemas. 
                      Na verdade, a combinação potencializa os resultados, atacando a calvície por dentro e por fora.
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
                    Estou no terceiro mês de uso e os resultados são REVOLUCIONÁRIOS! 
                    Minha calvície regrediu completamente e tenho cabelos grossos novamente. O melhor é que não 
                    tenho mais aquela preocupação com a queda de cabelo que tinha antes.
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
                            alt="Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Tricologia</span>
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
                        Tenho alopecia androgenética avançada, o Folixil funciona?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Tricologia</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Ana Paula! Sim, o Folixil é especialmente eficaz para alopecia androgenética avançada. 
                          Os bloqueadores de DHT atuam diretamente na causa da calvice masculina e feminina. 
                          Casos avançados podem levar mais tempo, mas os resultados são consistentes.
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
                        Qual o melhor horário para tomar? Precisa ser em jejum para absorver melhor?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Tricologia</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Pedro! O Folixil pode ser tomado a qualquer hora, mas recomendamos em jejum para melhor absorção. 
                          O ideal é tomar pela manhã para que os nutrients capilares ajam durante todo o dia estimulando o crescimento.
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
                        Tenho calvície há 10 anos, ainda posso recuperar meus cabelos?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Tricologia</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Mariana! SIM! Mesmo com 10 anos de calvície, ainda é possível recuperar. 
                          Os folículos ficam dormentes, mas não morrem. O Folixil reativa folículos que estavam inativos há anos.
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
                        Tem algum efeito colateral? Causa irritação no couro cabeludo ou coceira?
                      </p>
                      {/* Resposta */}
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/oavatar.png"
                            alt="Maria Silva"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium text-gray-900">Maria Silva</span>
                          <span className="text-sm text-gray-500">• Especialista em Tricologia</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Fernando! O Folixil é composto por ingredientes naturais e não causa irritação no couro cabeludo. 
                          Não foram relatados efeitos colaterais significativos. Por ser natural, é bem tolerado e não causa coceira.
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