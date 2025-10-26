export default function Header() {
  return (
    <header className="w-full px-6 md:px-[106px] py-8 md:py-[33px]">
      <nav className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left section: Logo and Navigation */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-0">
              <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 0L23 6.5V19.5L11.5 26L0 19.5V6.5L11.5 0Z" fill="#8A0000"/>
              </svg>
              <span className="font-display text-xl font-medium text-venera-red ml-[15px]">enera</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-[66px] bg-venera-dark-red"></div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              <a href="/" className="font-display text-sm font-medium text-venera-red uppercase tracking-[1.4px] underline decoration-venera-red hover:opacity-80 transition-opacity">
                INICIO
              </a>
              <a href="#" className="font-display text-sm font-medium text-venera-red uppercase tracking-[1.4px] hover:opacity-80 transition-opacity">
                TABLERO INTELIGENTE
              </a>
              <a href="#" className="font-display text-sm font-medium text-venera-red uppercase tracking-[1.4px] hover:opacity-80 transition-opacity">
                SIMULADOR
              </a>
              <a href="#" className="font-display text-sm font-medium text-venera-red uppercase tracking-[1.4px] hover:opacity-80 transition-opacity">
                INICIAR SESIÓN
              </a>
            </div>
          </div>

          {/* Right section: Banorte branding */}
          <div className="flex items-center gap-4 md:gap-6">
            <span className="font-display text-base md:text-lg font-bold text-venera-red whitespace-nowrap">
              Un producto de
            </span>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/97c8b4dd8a14fc8302f343d9d0bb53f5ec446f47?width=538" 
              alt="Banorte" 
              className="h-6 md:h-[33px] w-auto"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
