import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const email = data?.email;
        const password = data?.password;
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                // update user profile
                updateProfile(result?.user, {
                    displayName: data?.name,
                    photoURL: data?.photo
                })
                    .then(() => {
                        console.log("profile updated")
                        navigate('/dashboard/personal')
                        reset();
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='flex lg:flex-row md:flex-col justify-evenly items-center lg:h-[100vh] h-full my-10'>
                <div>
                    <img className='w-[500px] h-[600px]' src="https://i.ibb.co/KNYr3Bn/login-image.jpg" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body  bg-sky-600 h-ful w-[450px] shadow-2xl">
                    <h2 className="text-3xl text-center mb-10 font-bold">Register</h2>
                    <div className="form-control mb-6 border-b-2">
                        <input
                            type="text"
                            name="name"
                            {...register("name", { required: true })}
                            placeholder="Name" className="input"
                        />

                    </div>
                    {errors.name?.type == "required" && (
                        <span className='text-red-600 -mt-5'>Name is required</span>
                    )}
                    <div className="form-control mb-6 border-b-2">
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
                    <div className="form-control mb-6 border-b-2">
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
                    </div>
                    <div className="form-control mb-6 border-b-2">
                        <input
                            name="photo"
                            {...register("photo")}
                            placeholder="Photo URL" className="input"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning hover:btn-ghost">Register</button>
                    </div>
                    <div className='mt-2'>
                        <p className='text-xl'>Already have an account? Please <Link className='font-semibold text-yellow-500 underline' to='/login'>Login</Link></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Register;