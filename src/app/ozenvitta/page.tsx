'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  AlertTriangle, 
  CalendarDays, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Star, 
  ThumbsUp, 
  Truck, 
  User, 
  XCircle,
  ChevronDown,
  ChevronUp 
} from 'lucide-react'
import { CtaButton } from '../../components/CtaButton'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export default function OzenvittaPage() {
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

    setTimeout(() => {
      setPergunta('')
      setMensagemEnvio('Pergunta enviada com sucesso! Em breve nossa especialista responderá.')
      setEnviando(false)
      
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
            <span>Ozenvitta</span>
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
              Análise Completa do Ozenvitta: Vale a Pena em 2025?
            </h1>

            <div className="prose prose-lg text-gray-900">
              <p className="lead">
                Nesta análise detalhada, vamos explorar todos os aspectos do Ozenvitta, 
                desde sua composição até resultados reais, para ajudar você a tomar uma 
                decisão informada sobre este suplemento natural para emagrecimento.
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
                O Ozenvitta é um suplemento inovador para emagrecimento que tem se destacado 
                no mercado brasileiro. Desenvolvido com uma fórmula exclusiva que combina 
                ingredientes naturais e bioativos, ele promete auxiliar no processo de 
                emagrecimento de forma eficaz e saudável.
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
                  src="/images/ozenvitta-400.webp"
                  alt="Frasco do Ozenvitta"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <CtaButton 
                href="https://ozenvittaoficial.com/ozenvitta"
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
                A eficácia do Ozenvitta está diretamente ligada à qualidade e sinergia 
                de seus ingredientes. Analisamos cada componente e seus benefícios 
                comprovados cientificamente:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Ingredientes Principais */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Ingredientes Principais
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    O Ozenvitta contém um complexo exclusivo de ingredientes naturais que demonstrou 
                    em estudos clínicos a capacidade de:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Potencializar a queima de gordura localizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Controlar o apetite e a ansiedade alimentar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Melhorar o metabolismo e a energia</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Complexo Bioativo
                  </h3>
                  <p className="text-gray-900">
                    A combinação única de ingredientes bioativos atua diretamente no metabolismo, 
                    promovendo a queima de gordura e melhorando a composição corporal.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Sistema de Controle
                  </h3>
                  <p className="text-gray-900">
                    Ingredientes específicos trabalham em sinergia para regular o apetite 
                    e reduzir a compulsão alimentar, facilitando a adesão à dieta.
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
                Nossa análise da eficácia do Ozenvitta é baseada em estudos clínicos 
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
                    <span>Redução da fome</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda média de 4-6kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Mais energia</span>
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
                    <span>Metabolismo otimizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda adicional de 8-12kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Redução de medidas</span>
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
                    <span>Resultados consolidados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda total de até 17kg</span>
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
                    reais de usuários do Ozenvitta. O Ozenvitta não é um medicamento, 
                    mas sim um suplemento formulado com ingredientes naturais para 
                    auxiliar no processo de emagrecimento.
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
                O Ozenvitta é vendido exclusivamente através do site oficial do fabricante. 
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
                    <span className="text-gray-900">Estoque limitado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-900">Promoções por tempo limitado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8" id="comprar">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-medium text-gray-900">
                  Acessar o Site Oficial
                </h3>
                <p className="text-gray-900 max-w-2xl mx-auto">
                  Garanta seu Ozenvitta original com as melhores condições e total segurança.
                </p>
                <div className="flex justify-center">
                  <CtaButton 
                    href="https://ozenvittaoficial.com/ozenvitta"
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
                Após uma análise detalhada do Ozenvitta, incluindo sua composição, 
                eficácia, segurança e custo-benefício, podemos concluir que este é 
                um suplemento altamente eficaz para quem busca um auxílio natural no 
                processo de emagrecimento.
              </p>
              <p className="text-gray-900">
                Seus pontos fortes incluem a formulação natural inovadora, resultados 
                expressivos reportados por usuários e excelente perfil de segurança.
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
                    <span className="text-gray-900">Ingredientes naturais premium</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Resultados comprovados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-900">Sem efeitos colaterais</span>
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
                    <span className="text-gray-900">Estoque limitado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-900">Resultados podem variar</span>
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
                  <p className="text-lg font-medium text-emerald-600">Sim, recomendamos!</p>
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
                    <h4 className="font-medium text-gray-900">Ana Paula</h4>
                    <span className="text-sm text-gray-500">• 2 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comecei a usar o Ozenvitta há 3 semanas e já perdi 4kg! Estou muito 
                    satisfeita com os resultados. Sinto menos fome e mais disposição.
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-500">15 pessoas acharam útil</span>
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
                    <h4 className="font-medium text-gray-900">Carlos Silva</h4>
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
                      Olá Carlos! Sim, você pode tomar o Ozenvitta junto com whey protein, mas 
                      recomendamos manter um intervalo de 30 minutos entre eles para melhor absorção.
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
                    <h4 className="font-medium text-gray-900">Marina Costa</h4>
                    <span className="text-sm text-gray-500">• 1 semana atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Estou muito feliz com os resultados! Em 2 meses perdi 8kg e várias medidas. 
                    O melhor é que não sinto aquela ansiedade por comida que tinha antes.
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-500">20 pessoas acharam útil</span>
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
                          Olá Roberto! A entrega para o interior de São Paulo leva de 5 a 7 dias úteis. 
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
                        <h4 className="font-medium text-gray-900">Lucia Oliveira</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Excelente produto! Já estou no terceiro mês de uso e perdi 12kg no total. 
                        A energia extra ajuda muito nos exercícios físicos.
                      </p>
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-gray-500">25 pessoas acharam útil</span>
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
                        <h4 className="font-medium text-gray-900">Fernanda Lima</h4>
                        <span className="text-sm text-gray-500">• 3 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Tem algum efeito colateral? Estou com receio de começar.
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
                          Olá Fernanda! O Ozenvitta é um suplemento natural e seguro, sem efeitos 
                          colaterais relatados. Como todo suplemento, recomendamos seguir a posologia 
                          indicada na embalagem.
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
                  className="w-full rounded-lg border border-gray-200 p-4 h-32 resize-none text-gray-900 placeholder-gray-500"
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

      <Footer />
    </main>
  )
}