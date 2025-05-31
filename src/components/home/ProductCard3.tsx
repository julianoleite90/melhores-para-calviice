import Image from 'next/image'
import { Star, CheckCircle2, Users, AlertCircle } from 'lucide-react'

export function ProductCard3() {
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
                <h2 className="text-xl font-bold text-gray-900">3º Lugar:</h2>
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
                <span className="text-lg font-bold text-gray-900">4.5</span>
                <span className="text-gray-500">/5</span>
              </div>
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-gray-700">
                Usuários do <span className="text-gray-900 font-medium">Sb2 Turbo</span> relatam maior disposição e redução de gordura abdominal após 6-8 semanas, com 50% observando resultados visíveis.
              </p>
              <p className="text-gray-700">
                A fórmula termogênica favorece a queima de gordura e o aumento de energia. Ingredientes como <span className="text-gray-900 font-medium">guaraná e cafeína anidra</span> estimulam o metabolismo, enquanto a <span className="text-gray-900 font-medium">piperina</span> melhora a absorção de nutrientes.
              </p>
              <p className="text-gray-900 font-medium">
                50% dos usuários relatam redução de gordura em 6-8 semanas, com destaque para a região abdominal.
              </p>
            </div>

            {/* Cards de Informação */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Composição</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Cafeína Anidra (energia), Guaraná (queima gordura), Gengibre (termogênico), Piperina (absorção)
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Indicações</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Adultos ativos buscando energia e emagrecimento
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-900">Contraindicações</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Evitar se sensível à cafeína
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
              <a 
                href="https://mon.net.br/3eefqg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-[#40B37C] hover:opacity-90 text-white font-medium rounded-lg transition-colors text-center"
              >
                Acessar Site Oficial
              </a>
              <a 
                href="https://mon.net.br/3eefqg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-[#EE4266] hover:opacity-90 text-white font-medium rounded-lg transition-colors text-center"
              >
                Obter mais informações
              </a>
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