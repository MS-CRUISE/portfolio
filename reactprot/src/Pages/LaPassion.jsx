export default LaPassion;
import {Link} from 'react-router-dom';
function LaPassion(){
    return(
        <div className="relative bg-black h-screen"> 
        <div className="absolute top-4 left-6 text-2xl font-light text-white tracking-widest">
            MAVRIX
            </div>
           
            <section className="text-white">
              

                <div className="flex min-h-screen items-center justify-center mx-auto">
                    <ul 
                      id="passionScroll" 
                      className="flex overflow-x-scroll no-scrollbar space-x-4 px-4 py-6 scroll-smooth">
                      <Link to="/passion/gym">
                      <li className="passion bg-gray-800 rounded-md flex items-center justify-center text-center">
                        Gym
                      </li>
                      </Link>
                      <li className="passion bg-gray-700 rounded-md flex items-center justify-center text-center">
                        Running
                      </li>
                      <li className="passion bg-gray-600 rounded-md flex items-center justify-center text-center">
                        Coding
                      </li>
                      <Link to="/passion/exploring">
                      <li className="passion bg-gray-500 rounded-md flex items-center justify-center text-center">
                        Exploring
                      </li>
                </Link>
                    </ul>
                  </div>
                
              </section>
              <script>
                const container = document.getElementById("passionScroll");
               
              </script>
        <div className="md:text-2xl absolute bottom-10 font-light sm:text-xl left-1/2 text-sm transform -translate-x-1/2  tracking-wide justify-center text-white whitespace-nowrap">
        A MAVERICK DEV EXPERIENCE
        </div>
    </div>
    );
}