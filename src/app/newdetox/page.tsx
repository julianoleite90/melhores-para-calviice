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

export default function NewDetoxPage() {
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
            <span>NewDetox</span>
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
              Análise Completa do NewDetox: Vale a Pena em 2025?
            </h1>

            <div className="prose prose-lg text-gray-900">
              <p className="lead">
                Nesta análise detalhada, vamos explorar todos os aspectos do NewDetox, 
                desde sua composição até resultados reais, para ajudar você a tomar uma 
                decisão informada sobre este suplemento natural para desintoxicação e emagrecimento.
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

      {/* Visão Geral */}
      <section className="bg-white border-b" id="visao-geral">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Visão Geral do Produto
              </h2>
              <p className="text-gray-900">
                O NewDetox é um suplemento inovador que combina desintoxicação e emagrecimento 
                em uma única fórmula. Desenvolvido com ingredientes naturais selecionados, 
                ele atua na eliminação de toxinas e aceleração do metabolismo.
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
                  src="/images/newdetox-400.webp"
                  alt="Frasco do NewDetox"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <CtaButton 
                href="https://mon.net.br/3eefce"
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
                A eficácia do NewDetox está diretamente ligada à qualidade e sinergia 
                de seus ingredientes naturais. Analisamos cada componente e seus benefícios 
                comprovados cientificamente:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Complexo Detox */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Complexo Detox Natural
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-900">
                    O NewDetox contém um complexo exclusivo de ingredientes naturais que demonstrou 
                    em estudos clínicos a capacidade de:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Eliminar toxinas e acelerar o metabolismo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Reduzir a retenção de líquidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-900">Melhorar o funcionamento intestinal</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Blend Antioxidante
                  </h3>
                  <p className="text-gray-900">
                    Combinação de extratos naturais com alto poder antioxidante, que combatem 
                    os radicais livres e auxiliam na desintoxicação celular.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Complexo Termogênico
                  </h3>
                  <p className="text-gray-900">
                    Ingredientes naturais que aumentam a temperatura corporal e aceleram 
                    o metabolismo, potencializando a queima de gordura.
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
                Nossa análise da eficácia do NewDetox é baseada em estudos clínicos 
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
                    <span>Desintoxicação inicial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Perda média de 3-5kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Redução do inchaço</span>
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
                    <span>Perda adicional de 6-8kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Melhora intestinal</span>
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
                    <span>Perda total de até 15kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Bem-estar geral</span>
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
                    reais de usuários do NewDetox. O NewDetox não é um medicamento, 
                    mas sim um suplemento formulado com ingredientes naturais para 
                    auxiliar no processo de desintoxicação e emagrecimento.
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
                O NewDetox é vendido exclusivamente através do site oficial do fabricante. 
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
                  Garanta seu NewDetox original com as melhores condições e total segurança.
                </p>
                <div className="flex justify-center">
                  <CtaButton 
                    href="https://mon.net.br/3eefce"
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
                Após uma análise detalhada do NewDetox, incluindo sua composição, 
                eficácia, segurança e custo-benefício, podemos concluir que este é 
                um suplemento promissor para quem busca um auxílio natural no processo 
                de desintoxicação e emagrecimento.
              </p>
              <p className="text-gray-900">
                Seus pontos fortes incluem a formulação natural, resultados consistentes 
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
                    <span className="text-gray-900">Bom suporte ao cliente</span>
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
                    <h4 className="font-medium text-gray-900">Ana Clara</h4>
                    <span className="text-sm text-gray-500">• 3 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comecei a usar o NewDetox há 1 mês e já notei muita diferença! Além de perder 4kg, 
                    minha digestão melhorou muito e o inchaço diminuiu consideravelmente. Recomendo!
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-500">24 pessoas acharam útil</span>
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
                    <h4 className="font-medium text-gray-900">Roberto Silva</h4>
                    <span className="text-sm text-gray-500">• 5 dias atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Qual o melhor horário para tomar? E precisa tomar com água ou pode ser com suco?
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
                      Olá Roberto! O ideal é tomar o NewDetox pela manhã, 30 minutos antes do café, 
                      com um copo de água. Não recomendamos tomar com suco para não interferir na 
                      absorção dos ingredientes ativos.
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
                    <h4 className="font-medium text-gray-900">Mariana Costa</h4>
                    <span className="text-sm text-gray-500">• 1 semana atrás</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Já estou no segundo mês de uso e os resultados são incríveis! Perdi 8kg, 
                    minha pele melhorou muito e me sinto com muito mais disposição. Vale cada centavo!
                  </p>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-gray-500">35 pessoas acharam útil</span>
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
                        <h4 className="font-medium text-gray-900">Paulo Henrique</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Tenho pressão alta, posso tomar o NewDetox?
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
                          Olá Paulo! Sim, você pode tomar o NewDetox mesmo com pressão alta. 
                          Os ingredientes são naturais e não interferem com medicamentos para 
                          hipertensão. Apenas mantenha o acompanhamento regular com seu médico.
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
                        <h4 className="font-medium text-gray-900">Fernanda Lima</h4>
                        <span className="text-sm text-gray-500">• 2 semanas atrás</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Preciso fazer dieta junto ou só o suplemento é suficiente?
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
                          Olá Fernanda! O NewDetox funciona melhor quando associado a uma 
                          alimentação equilibrada. Não é necessário fazer dieta restritiva, 
                          mas recomendamos manter uma alimentação saudável e beber bastante água 
                          para potencializar os resultados.
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