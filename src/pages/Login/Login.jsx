import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";


const Login = () => {
    const {signInUser} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        const email = data?.email;
        const password = data?.password;
        signInUser(email,password)
        .then(result =>{
            console.log("from signin", result.user)
            navigate('/dashboard/personal')
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className='flex lg:flex-row md:flex-col justify-evenly items-center lg:h-[100vh] h-full'>
                <div>
                    <img className='w-[500px] h-[600px]' src="https://i.ibb.co/KNYr3Bn/login-image.jpg" alt="" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-sky-600 h-full w-[450px] shadow-2xl">
                    <h2 className="text-3xl text-center mb-3 font-bold">Join Us</h2>
                    <div className="form-control mb-6 border-b-2r">
                        <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                            placeholder="Email" className="input"
                        />
                    </div>
                    {errors.email?.type == "required" && (
                        <span className='text-red-600 -mt-5'>Email is required</span>
                    )}
                    <div className="form-control mb-6 border-b-2r">
                        <input
                            type="password"
                            name="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                            })}
                            placeholder="Password" className="input"
                        />
                    </div>
                    {errors.password?.type == "required" && (
                        <span className='text-red-600 -mt-5'>Password is required</span>
                    )}
                    {errors.password?.type == "minLength" && (
                        <span className='text-red-600 -mt-5'>Password must be atleast 6 characters</span>
                    )}
                    {errors.password?.type == "maxLength" && (
                        <span className='text-red-600 -mt-5'>Password must be maximum 20 characters</span>
                    )}
                    {errors.password?.type == "pattern" && (
                        <span className='text-red-600 -mt-5'>Password must have atleast one uppercase,one lowercase and one special character</span>
                    )}
                    <div className="form-control mt-6r">
                        <button className="btn btn-warning hover:btn-ghost">Join</button>
                    </div>
                    <div className='mt-2'>
                        <p className='text-xl'>Do not have an account? Please <Link className='font-semibold text-yellow-500 underline' to='/register'>Register</Link></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;