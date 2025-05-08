export default Running;
function Running(){
    return(       
    <div className="relative bg-black min-h-screen text-white overflow-y-auto">
    <header className="fixed top-0 left-0 p-4 text-2xl font-light tracking-widest z-50 bg-black bg-opacity-60 w-full">
      MAVRIX
    </header>
    <div className="pt-20 pb-20 space-y-8 px-4">
      <div className="relative h-[80vh] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/Assets/gympic1.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 rounded-sm"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6">
          <h2 className="text-4xl font-semibold mb-4">Unleash the Maverick Within</h2>
          <p className="text-lg sm:text-xl font-light max-w-lg">
            It's not just about lifting weights. It's about lifting yourself — every damn day. The grind never stops.
          </p>
        </div>
      </div>
      <div className="h-[80vh] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/Assets/gympic4.png')" }}></div>
      <div className="relative h-[80vh] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/Assets/gympic3.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 rounded-sm"></div>
        <div className="relative z-10 flex justify-end items-center h-full px-6">
    <div className="text-right text-white-100">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">"Be uncommon amongst uncommon people."</h2>
      <p className="text-lg sm:text-xl font-light text-center max-w-2xl mx-auto">
    — David Goggins
  </p>
    </div>
  </div>
      </div>
    </div>
    <footer className="fixed bottom-0 w-full p-4 text-center font-light sm:text-xl md:text-2xl tracking-wide bg-black bg-opacity-60">
        A MAVERICK DEV EXPERIENCE
      </footer>
    </div>
    );
}
