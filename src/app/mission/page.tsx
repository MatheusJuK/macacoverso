export default function Mission() {
  return (
    <main className="bg-white text-gray-800">
      {/* Banner inicial */}
      <section className="bg-[#F5F5F5] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Conectando Espécies, Inspirando Mudanças
          </h1>
          <p className="text-lg text-gray-600">
            No Macacoverso, acreditamos na força da união entre humanos e
            macacos. Nossa jornada é movida por empatia, preservação e
            transformação ambiental.
          </p>
        </div>
      </section>

      {/* Missão com imagem lateral */}
      <section className="py-16 px-6 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://i.pinimg.com/originals/28/77/d6/2877d6444d53ffcb6875a40f1b301385.jpg"
              alt="Macaco segurando cajado dourado olhando firme"
              className="rounded-xl "
            />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold text-green-700 mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-700 text-center">
              Criar uma ponte entre humanos e macacos, promovendo respeito,
              curiosidade e preservação ambiental. Cada resgate representa uma
              nova chance — para o animal e para a consciência coletiva.
              Queremos transformar vidas dentro e fora da floresta.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Nossa História
          </h2>
          <p className="text-gray-700 mb-6">
            Fundado por <strong>Wukong</strong>, o Macacoverso começou como um
            centro de reabilitação para macacos vítimas de cativeiro ilegal.
            Evoluímos para um polo de ecoturismo, educação ambiental e parceria
            com comunidades locais.
          </p>
          <ul className="text-left space-y-2 max-w-md mx-10 text-gray-800 list-disc">
            <li>Início com reabilitação de macacos resgatados</li>
            <li>Expansão para ecoturismo e educação ambiental</li>
            <li>Parcerias com comunidades locais</li>
            <li>Presença digital para ampliar nossa causa</li>
          </ul>
        </div>
      </section>

      {/* Equipe em cards */}
      <section className="py-16 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            Equipe Lendária
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Wukong */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <img
                src="https://www.mithrie.com/blogs/black-myth-wukong-unique-action-game-we-all-should-see/black-myth-wukong-monkey-king.jpg"
                alt="Wukong com expressão séria"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg text-yellow-800">Wukong</h3>
              <p className="text-sm text-gray-600">
                Fundador e líder visionário do Macacoverso.
              </p>
            </div>

            {/* Goku */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <img
                src="https://i.pinimg.com/736x/5b/b3/2f/5bb32faa2c490dff986cb88fa559fb1b.jpg"
                alt="Goku sorrindo"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Goku</h3>
              <p className="text-sm text-gray-600">
                Embaixador da superação e energia positiva.
              </p>
            </div>

            {/* King Kong */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <img
                src="https://media.fstatic.com/Q32cintsWmD2PJjTywhouD9TT3I=/322x478/smart/filters:format(webp)/media/movies/covers/2018/01/medium-cover.jpg"
                alt="King Kong rugindo"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">King Kong</h3>
              <p className="text-sm text-gray-600">
                Protetor das florestas e dos vulneráveis.
              </p>
            </div>

            {/* Macaco */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <img
                src="https://i.pinimg.com/originals/28/77/d6/2877d6444d53ffcb6875a40f1b301385.jpg"
                alt="Macaco Kung Fu Panda posando"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Macaco</h3>
              <p className="text-sm text-gray-600">
                Mestre ágil e espirituoso do equilíbrio.
              </p>
            </div>

            {/* César */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <img
                src="https://uploads.jovemnerd.com.br/wp-content/uploads/2024/04/planeta_dos_macacos_teaser_cesar__0444xe3q.jpg"
                alt="César olhando sério"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">César</h3>
              <p className="text-sm text-gray-600">
                Líder empático e estrategista do grupo.
              </p>
            </div>

            {/* Rafiki */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <img
                src="https://i.pinimg.com/originals/02/b3/73/02b3730bc709bd9c90a5a8d96bd1110d.jpg"
                alt="Rafiki sorridente segurando cajado"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Rafiki</h3>
              <p className="text-sm text-gray-600">
                Sábio espiritual do grupo, guia com conselhos profundos e visão
                ancestral.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
