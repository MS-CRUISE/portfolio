import { motion } from "framer-motion";

export default Travelling;

function Travelling() {
  return (
    <div className="relative bg-black min-h-screen text-white overflow-y-auto">
      <header className="fixed top-0 left-0 p-4 text-2xl font-light tracking-widest z-50 bg-black bg-opacity-60 w-full">
        MAVRIX
      </header>

      <div className="pt-20 pb-20 space-y-2 px-4">

        {/* Horsley Hills */}
        <div
          className="relative h-[80vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/Assets/pic3.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10 rounded-sm"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 h-full flex flex-col justify-center px-6"
          >
            <h2 className="text-4xl font-semibold mb-4">Horsley Hills</h2>
            <p className="text-lg sm:text-xl font-light max-w-lg">
              Some mornings don't just begin — they awaken something within. Stillness. Solitude. Strength.
            </p>
          </motion.div>
        </div>

        {/* Marina Beach — no text */}
        <div
          className="h-[80vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/Assets/pic1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10 rounded-sm"></div>
        </div>

        {/* Sunset Pic */}
        <div
          className="relative h-[80vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/Assets/pic4.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-sm"></div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 h-full flex justify-end items-center px-6"
          >
            <div className="text-right text-white">
              <h2 className="text-3xl font-semibold mb-2">"Even sunsets carry hope."</h2>
              <p className="text-lg font-light text-center max-w-xl mx-auto">
                Every end holds the warmth of beginnings yet to come.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      <footer className="fixed bottom-0 w-full p-4 text-center font-light sm:text-xl md:text-2xl tracking-wide bg-black bg-opacity-60">
        A MAVERICK DEV EXPERIENCE
      </footer>
    </div>
  );
}
