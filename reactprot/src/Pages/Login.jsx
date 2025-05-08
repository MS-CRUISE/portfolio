export default Login;
import {Link} from 'react-router-dom'
function Login(){
    return(
        <div className="relative h-screen bg-black">
        <div className="absolute top-4 left-6 text-2xl font-light text-white tracking-widest">
        MAVRIX
        </div>    
    
    <div className="flex  h-screen items-center mx-auto justify-center flex-nowrap">
        <div className="flex gap-4 flex-col md:flex-row overflow-visible sm:flex-row">
          <div className="loginContainer">
            <p className="text-center text-black">Career</p></div>
           <Link to="/passion">
           <div className="loginContainer">
            <p className=" text-black">La Pasion</p>
          </div>
          </Link>

          <div className="loginContainer">
            <p className="text-center text-black">Coding Projects</p>
          </div>

        </div>

      </div>
      <div className="md:text-2xl absolute bottom-10 font-light sm:text-xl left-1/2 text-sm transform -translate-x-1/2  tracking-wide justify-center text-white whitespace-nowrap">
        A MAVERICK DEV EXPERIENCE
        </div>
    </div>

    );
}