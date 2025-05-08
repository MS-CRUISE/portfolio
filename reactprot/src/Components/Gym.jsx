import { motion } from "framer-motion";

export default Gym;

function Gym() {
  return (
    <div className="relative bg-black min-h-screen text-white overflow-y-auto">
      <header className="fixed top-0 left-0 p-4 text-2xl font-light tracking-widest z-50 bg-black bg-opacity-60 w-full">
        MAVRIX
      </header>

      <div className="pt-20 pb-20 space-y-8 px-4">
        {/* First Section */}
        <div
          className="relative h-[80vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/Assets/gympic1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-sm"></div>
          <div className="relative z-10 h-full flex flex-col justify-center px-6">
            <motion.h2
              className="text-4xl font-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unleash the God Within
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl font-light max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              It's not just about lifting weights. It's about lifting yourself — every damn day. The grind never stops.
            </motion.p>
          </div>
        </div>

        {/* Second Section */}
        <div
          className="h-[80vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/Assets/gympic4.png')" }}
        ></div>

        {/* Third Section */}
        <div
          className="relative h-[80vh] bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/Assets/gympic3.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-sm"></div>
          <div className="relative z-10 flex justify-end items-center h-full px-6">
            <motion.div
              className="text-right text-white"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                "Be uncommon amongst uncommon people."
              </h2>
              <p className="text-lg sm:text-xl font-light text-center max-w-2xl mx-auto">
                — David Goggins
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full p-4 text-center font-light sm:text-xl md:text-2xl tracking-wide bg-black bg-opacity-60">
        A MAVERICK DEV EXPERIENCE
      </footer>
    </div>
  );
}
