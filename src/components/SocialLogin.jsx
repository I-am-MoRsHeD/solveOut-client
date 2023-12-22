import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate('/dashboard/personal')
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className='w-44 mt-8 mx-auto'>
            <p className='text-center font-bold mb-5 text-2xl'>Or</p>
            <div className='flex lg:justify-center mt-2 rounded-full py-1 px-2 border-2 bg-orange-400 text-white '>
                <button onClick={handleGoogle} className='font-semibold p-2 flex items-center'>
                    <span className='lg:text-xl text-base'><FaGoogle></FaGoogle></span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;