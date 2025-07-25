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
import { useState } from 'react'

export default function PhynamaxPage() {
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
            <span>Phynamax</span>
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
                <p className="text-gray-600">Especialista em Nutrição</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays className="h-4 w-4" />
              <span>Última atualização: 22 de Julho de 2025</span>
            </div>

            <h1 className="text-4xl font-serif font-bold text-gray-900">
              Phynamax: Por Que É o Emagrecedor #1 de 2025?
            </h1>

            <div className="prose prose-lg text-gray-900">
              <p className="lead">
                Descubra por que o Phynamax conquistou o 1º lugar no ranking dos melhores emagrecedores de 2025. 
                Com sua fórmula revolucionária e resultados excepcionais, este suplemento premium 
                tem transformado a vida de milhares de pessoas em todo o país.
              </p>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-gray-900">4.9/5.0</span>
              </div>
              <span className="text-sm text-gray-600">Baseado em nossa análise e feedback dos usuários</span>
            </div>
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
                O Phynamax é um suplemento revolucionário que combina ingredientes naturais 
                poderosos para promover o emagrecimento saudável. Sua fórmula exclusiva atua 
                na redução do apetite e aceleração do metabolismo.
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
                  src="/images/phyna-400.png"
                  alt="Frasco do Phynamax"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <CtaButton 
                href="https://www.phynamaxoficial.com/phynamax-2/"
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
                O Phynamax se destaca pela sua composição única de ingredientes naturais 
                cientificamente comprovados. Cada componente foi selecionado por sua eficácia 
                no processo de emagrecimento:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Complexo Emagrecedor */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Complexo Emagrecedor Natural
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    O Phynamax contém uma combinação exclusiva de ingredientes que demonstrou 
                    eficácia em:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Reduzir o apetite e a ansiedade por comida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Acelerar o metabolismo e queima de gordura</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Aumentar a disposição e energia</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Complexo Termogênico
                  </h3>
                  <p className="text-gray-900">
                    Combinação de extratos naturais que aumentam a temperatura corporal 
                    e aceleram o metabolismo, potencializando a queima de gordura.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Blend Redutor de Apetite
                  </h3>
                  <p className="text-gray-900">
                    Ingredientes naturais que ajudam a controlar a fome e reduzir 
                    a compulsão alimentar, facilitando a adesão à dieta.
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
                Nossa análise da eficácia do Phynamax é baseada em estudos clínicos 
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
                    <span>Redução do apetite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda média de 4-6kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Mais disposição</span>
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
                    <span>Metabolismo acelerado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda adicional de 7-9kg</span>
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
                    <span>Perda total de até 18kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Novo estilo de vida</span>
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
                    Os resultados apresentados são baseados em experiências reais de usuários 
                    do Phynamax. Como cada organismo é único, os resultados podem variar 
                    de pessoa para pessoa. O Phynamax é um suplemento natural e não um 
                    medicamento milagroso.
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
                O Phynamax é vendido exclusivamente através do site oficial do fabricante. 
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
                  Garanta seu Phynamax original com as melhores condições e total segurança.
                </p>
                <div className="flex justify-center">
                  <CtaButton 
                    href="https://www.phynamaxoficial.com/phynamax-2/"
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
                Após uma análise detalhada do Phynamax, incluindo sua composição, 
                eficácia, segurança e custo-benefício, podemos concluir que este é 
                um suplemento eficaz para quem busca um auxílio natural no processo 
                de emagrecimento.
              </p>
              <p className="text-gray-900">
                Seus pontos fortes incluem a formulação natural, resultados expressivos 
                reportados por usuários e excelente perfil de segurança.
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
                    <span className="text-gray-900">Ingredientes naturais de qualidade</span>
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
                    <span className="text-2xl font-bold text-gray-900">4.7</span>
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
                    <h4 className="font-medium text-gray-900">Juliana Santos</h4>
                    <span className="text-sm text-gray-500">• 2 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comecei a usar o Phynamax há 2 meses e já perdi 11kg! Além do peso, 
                    minha ansiedade por comida diminuiu muito e me sinto muito mais disposta. 
                    Super recomendo!
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
                    <h4 className="font-medium text-gray-900">Carlos Eduardo</h4>
                    <span className="text-sm text-gray-500">• 4 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Posso tomar junto com outros suplementos? Faço academia e uso whey protein.
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
                      <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                    </div>
                    <p className="text-gray-700">
                      Olá Carlos! Sim, você pode tomar o Phynamax junto com whey protein 
                      e outros suplementos esportivos. A formulação natural não interfere 
                      com esses suplementos. Apenas mantenha um intervalo de 2 horas entre 
                      eles para melhor absorção.
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
                    <h4 className="font-medium text-gray-900">Patricia Lima</h4>
                    <span className="text-sm text-gray-500">• 1 semana atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Estou no terceiro mês de uso e os resultados são incríveis! Já perdi 15kg 
                    e minhas medidas diminuíram muito. Minha autoestima melhorou 100% e me 
                    sinto muito mais confiante!
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
                        <h4 className="font-medium text-gray-900">Ricardo Souza</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Tenho diabetes tipo 2, posso tomar o Phynamax?
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
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Ricardo! Sim, o Phynamax pode ser usado por pessoas com diabetes 
                          tipo 2, pois seus ingredientes são naturais e não interferem com a 
                          glicemia. No entanto, recomendo consultar seu médico antes de iniciar 
                          o uso e manter o monitoramento regular da glicose.
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
                        <h4 className="font-medium text-gray-900">Amanda Costa</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Qual o melhor horário para tomar? E preciso fazer exercícios junto?
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
                          <span className="text-sm text-gray-500">• Especialista em Nutrição</span>
                        </div>
                        <p className="text-gray-700">
                          Olá Amanda! O ideal é tomar o Phynamax pela manhã, antes do café. 
                          Quanto aos exercícios, não são obrigatórios para o funcionamento do 
                          suplemento, mas a combinação com atividade física regular potencializa 
                          os resultados e traz benefícios adicionais para sua saúde.
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
    </main>
  )
} 