import { useState } from "react";

export default function Index() {
  const [ingresos, setIngresos] = useState("40,000");
  const [egresos, setEgresos] = useState("40,000");

  const [gastosCategories, setGastosCategories] = useState([
    { name: "Salud", checked: true },
    { name: "Restaurantes", checked: true },
    { name: "Comidas", checked: true },
  ]);

  const [gastosCategories2, setGastosCategories2] = useState([
    { name: "Supermercado", checked: true },
    { name: "Entretenimiento", checked: true },
    { name: "Servicios", checked: true },
  ]);

  const [gastosCategories3, setGastosCategories3] = useState([
    { name: "Educación", checked: true },
    { name: "Transporte", checked: true },
    { name: "Transacciones", checked: true },
  ]);

  const toggleItem = (col: 1 | 2 | 3, name: string) => {
    const updater = (arr: { name: string; checked: boolean }[]) =>
      arr.map((it) =>
        it.name === name ? { ...it, checked: !it.checked } : it,
      );
    if (col === 1) setGastosCategories((arr) => updater(arr));
    if (col === 2) setGastosCategories2((arr) => updater(arr));
    if (col === 3) setGastosCategories3((arr) => updater(arr));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full bg-venera-red px-4 sm:px-6 md:px-[137px] py-8 md:py-[73px]">
        <div className="max-w-[1512px] mx-auto">
          <h1 className="font-display text-3xl md:text-[42px] font-bold text-white leading-tight md:leading-[55px] mb-3">
            Bienvenida de Regreso, Mariana
          </h1>
          <p className="font-sans text-base font-medium text-white tracking-[0.5px]">
            Planeamos tu futuro
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 md:px-0 py-8 md:py-12">
        {/* Title Section */}
        <div className="mb-8 md:mb-12 md:ml-4">
          <h2 className="font-sans text-xl md:text-[25px] font-bold text-venera-red leading-tight mb-2">
            Simula tus escenarios financieros.
          </h2>
          <p className="font-sans text-lg md:text-[25px] font-normal text-venera-red leading-tight">
            Ajusta tus ingresos, gastos o inversiones y observa cómo cambia tu
            proyección en tiempo real.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:mb-12 md:grid md:[grid-template-columns:repeat(3,374px)] md:justify-between">
          {/* Ingresos Card */}
          <div className="rounded-[12.75px] bg-gradient-to-br from-venera-gradient-start to-venera-gradient-end shadow-lg p-5 md:p-[21px] md:w-[374px] md:h-[161px]">
            <h3 className="font-sans text-xl md:text-[26px] font-bold text-[#F3E8FF] mb-8 md:mb-11">
              Ingresos
            </h3>
            <div className="relative">
              <input
                type="text"
                value={ingresos}
                onChange={(e) => setIngresos(e.target.value)}
                className="w-full bg-white h-11 px-6 text-center font-sans text-2xl md:text-[26px] font-bold text-[#AEAEAE] border-0 outline-none"
              />
            </div>
          </div>

          {/* Egresos Card */}
          <div className="rounded-[12.75px] bg-gradient-to-br from-venera-gradient-start to-venera-gradient-end shadow-lg p-5 md:p-[21px] md:w-[374px] md:h-[161px]">
            <h3 className="font-sans text-xl md:text-[26px] font-bold text-[#F3E8FF] mb-8 md:mb-11">
              Egresos
            </h3>
            <div className="relative">
              <input
                type="text"
                value={egresos}
                onChange={(e) => setEgresos(e.target.value)}
                className="w-full bg-white h-11 px-6 text-center font-sans text-2xl md:text-[26px] font-bold text-[#AEAEAE] border-0 outline-none"
              />
            </div>
          </div>

          {/* Tasa de Valores Card */}
          <div className="rounded-[12.75px] bg-gradient-to-br from-venera-gradient-start to-venera-gradient-end shadow-lg p-5 md:p-[21px] h-[161px] md:h-[369px]">
            <h3 className="font-sans text-xl md:text-[26px] font-bold text-[#F3E8FF]">
              Tasa de Valores
            </h3>
          </div>
        </div>

        {/* Gastos Fijos Card */}
        <div className="rounded-[12.75px] bg-gradient-to-br from-venera-gradient-start to-venera-gradient-end shadow-lg p-5 md:p-[19px] mb-8 md:mb-12">
          <h3 className="font-sans text-xl md:text-[26px] font-bold text-[#F3E8FF] mb-6 md:mb-9">
            Gastos Fijos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1 */}
            <div className="space-y-4 md:space-y-[13px]">
              {gastosCategories.map((category) => (
                <label
                  key={category.name}
                  className="flex items-center gap-3 md:gap-[19px] cursor-pointer select-none"
                  onClick={() => toggleItem(1, category.name)}
                >
                  <span
                    className={`flex items-center justify-center w-4 h-4 rounded-sm border border-white ${category.checked ? "bg-white" : "bg-transparent"}`}
                    aria-checked={category.checked}
                    role="checkbox"
                  >
                    {category.checked && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#8A0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="font-sans text-lg md:text-xl text-white">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4 md:space-y-[13px]">
              {gastosCategories2.map((category) => (
                <label
                  key={category.name}
                  className="flex items-center gap-3 md:gap-[19px] cursor-pointer select-none"
                  onClick={() => toggleItem(2, category.name)}
                >
                  <span
                    className={`flex items-center justify-center w-4 h-4 rounded-sm border border-white ${category.checked ? "bg-white" : "bg-transparent"}`}
                    aria-checked={category.checked}
                    role="checkbox"
                  >
                    {category.checked && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#8A0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="font-sans text-lg md:text-xl text-white">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-4 md:space-y-[13px]">
              {gastosCategories3.map((category) => (
                <label
                  key={category.name}
                  className="flex items-center gap-3 md:gap-[19px] cursor-pointer select-none"
                  onClick={() => toggleItem(3, category.name)}
                >
                  <span
                    className={`flex items-center justify-center w-4 h-4 rounded-sm border border-white ${category.checked ? "bg-white" : "bg-transparent"}`}
                    aria-checked={category.checked}
                    role="checkbox"
                  >
                    {category.checked && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#8A0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="font-sans text-lg md:text-xl text-white">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Grafica de Valores */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-sans text-2xl md:text-[35px] font-normal text-venera-red mb-6 md:mb-8 md:ml-4">
            Grafica de Valores
          </h2>
          <div className="rounded-[12.75px] border-4 border-[#BE1D20] shadow-lg h-48 md:h-[260px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              {/* Chart placeholder - can be replaced with actual chart */}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12 md:mb-16 relative">
          {/* Blur effect */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[295px] h-[102px] bg-venera-red/40 blur-[150px] -z-10"></div>

          <button className="bg-venera-button hover:bg-venera-dark-red transition-colors text-white font-display text-base md:text-lg font-bold uppercase tracking-[1.6px] px-10 py-5 md:py-[27px] md:px-10 rounded-full mb-8 md:mb-12">
            Consulta con la AI
          </button>

          <p className="font-sans text-2xl md:text-[35px] font-normal text-venera-red text-center leading-tight max-w-[420px] mx-auto">
            De la intención a la acción,
            <br />
            Ardana lo hace posible.
          </p>
        </div>
      </div>
    </div>
  );
}
