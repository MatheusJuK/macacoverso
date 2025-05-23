export default function Donations() {
  return (
    <section className="bg-white text-gray-800">
      <div className="bg-[#F5F5F5] py-16 px-6 text-center flex flex-col items-center justify-center h-[50vh]">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Apoie Nossa Causa
        </h1>
        <p className="max-w-[40%]">
          Doando você me ajuda a comprar
          <span className="text-[#AB6]">
            <a
              href="https://store.steampowered.com/app/2358720/Black_Myth_Wukong/"
              target="blank"
              aria-label="Abrir página do jogo Black Myth: Wukong na Steam"
            >
              Black Myth: Wukong
            </a>
          </span>
          e outros jogos para poder salvar mais e mais macacos, agora só depende
          de você!
        </p>
        <p>Ou você vai deixar esse pobre macaco sofrer??</p>
        <img
          src="https://semeupetfalasse.wordpress.com/wp-content/uploads/2020/04/macaco-preso-jaula.jpg"
          alt="Macaco em uma jaula"
          className="md:w-64 md:h-64 w-48 h-48 object-cover mt-4 mb-4"
        />
      </div>
      <div className="bg-[#f9f9f94b] py-16 px-6 text-center flex flex-col items-center justify-center">
        Qr code do Macacoverso
        <img
          src="/qr-code-plus.jpg"
          alt="Qr code do Macacoverso"
          className="md:w-64 md:h-64 w-48 h-48 object-cover mt-4 mb-4"
        />
      </div>
    </section>
  );
}
