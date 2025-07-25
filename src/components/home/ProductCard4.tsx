import Image from 'next/image'
import { Star, CheckCircle2, Users, AlertCircle } from 'lucide-react'
import { CtaButton } from '@/components/CtaButton'

export function ProductCard4() {
  return (
    <article className="p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Imagem do Produto */}
        <div className="w-[180px] mx-auto lg:mx-0 lg:flex-shrink-0 lg:mr-8">
          <div className="relative aspect-square bg-gray-50 rounded-xl p-3">
            <Image
              src="/images/sb2-400.webp"
              alt="Sb2 Turbo: Especialista em queima de gordura"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          {/* Cabeçalho com título e avaliação */}
          <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-2 mb-3">
            <div className="text-center sm:text-left">
              <div className="flex items-baseline justify-center sm:justify-start gap-2">
                <h2 className="text-xl font-bold text-gray-900">4º Lugar:</h2>
                <h3 className="text-xl font-bold text-gray-900">Sb2 Turbo</h3>
              </div>
              <p className="text-base font-medium text-gray-700">
                Especialista em queima de gordura
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-200 text-yellow-200'}`} />
                ))}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-gray-900">4.6</span>
                <span className="text-gray-500">/5</span>
              </div>
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-gray-700">
                O <span className="text-gray-900 font-medium">Sb2 Turbo</span> é um poderoso suplemento natural para emagrecimento que se destaca por sua fórmula termogênica avançada.
              </p>
              <p className="text-gray-700">
                Desenvolvido especificamente para <span className="text-gray-900 font-medium">acelerar o metabolismo</span> e <span className="text-gray-900 font-medium">queimar gordura</span> de forma mais eficiente, especialmente na região abdominal.
              </p>
              <p className="text-gray-900 font-medium">
                Mais de 85% dos usuários relatam aumento significativo de energia e perda de peso nas primeiras semanas de uso.
              </p>
            </div>

            {/* Cards de Informação */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Resultados</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Perda média de <span className="font-medium">4-6kg</span> em 30 dias
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Indicações</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Adultos que buscam acelerar o metabolismo
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Contraindicações</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Gestantes, lactantes ou cardiopatas
                </p>
              </div>
            </div>

            {/* Diferencial */}
            <div className="bg-gray-50 rounded-lg p-2.5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 text-gray-700">⚡</div>
                <h4 className="font-medium text-gray-900">Diferencial</h4>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  Fórmula termogênica potente com foco em energia e queima de gordura.
                </p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-2 pt-3">
              <CtaButton 
                href="https://mon.net.br/3eefqg"
                variant="primary"
                className="flex-1"
              >
                Acessar Site Oficial
              </CtaButton>
              <CtaButton 
                href="/sb2"
                variant="secondary"
                className="flex-1"
              >
                Obter mais informações
              </CtaButton>
            </div>
            
            {/* Aviso */}
            <p className="text-center text-gray-500 text-sm">
              Não vendemos esses produtos, para comprar clique no botão acima e seja direcionado para o site oficial do produto.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 