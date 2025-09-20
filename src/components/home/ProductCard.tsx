import Image from 'next/image'
import { Star, CheckCircle2, Users, AlertCircle } from 'lucide-react'
import { CtaButton } from '@/components/CtaButton'

export function ProductCard() {
  return (
    <article className="p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Imagem do Produto */}
        <div className="w-[180px] mx-auto lg:mx-0 lg:flex-shrink-0 lg:mr-8">
          <div className="relative aspect-square bg-gray-50 rounded-xl p-3">
            <Image
              src="/images/biocapilar.png"
              alt="Biocapilar: Fórmula mais usada e recomendada por especialistas"
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
                <h2 className="text-xl font-bold text-gray-900">1º Lugar:</h2>
                <h3 className="text-xl font-bold text-gray-900">Biocapilar</h3>
              </div>
              <p className="text-base font-medium text-gray-700">
                Fórmula mais usada e recomendada por especialistas
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-gray-900">4.9</span>
                <span className="text-gray-500">/5</span>
              </div>
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-gray-700">
                O <span className="text-gray-900 font-medium">Biocapilar</span> revoluciona o mercado de tratamento capilar com sua fórmula completa e eficaz no tratamento contra a calvície masculina e feminina. Seus resultados excepcionais são comprovados por milhares de usuários que se dizem satisfeitos e recomendam a fórmula.
              </p>
              <p className="text-gray-700">
                A composição é inovadora e seus ingredientes são totalmente eficazes. Uma combinação de bionutrientes que tratam, estimulam e aceleram o crescimento dos fios.
              </p>
              <p className="text-gray-900 font-medium">
                Cerca de 96% dos usuários reportam crescimento de novos fios e preenchimento de falhas e entradas.
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
                  Crescimento médio de <span className="font-medium">novos fios</span> em 30 dias
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Indicações</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Adultos com calvície ou queda de cabelo
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Contraindicações</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Gestantes, lactantes ou alérgicos aos componentes
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
                  Fórmula exclusiva com tecnologia de liberação sustentada que maximiza a absorção dos nutrients capilares.
                </p>
                <p>
                  Única combinação que atua simultaneamente no couro cabeludo, folículos e crescimento de novos fios.
                </p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-2 pt-3">
              <CtaButton 
                href="https://www.biocapilaroficial.com.br/"
                variant="primary"
                className="flex-1"
              >
                Acessar Site Oficial
              </CtaButton>
              <CtaButton 
                href="/biocapilar"
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