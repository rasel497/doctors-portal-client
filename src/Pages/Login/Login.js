import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    // 10:20s
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Email</span></label>
                        <input type="text"
                            {...register("email",
                                { required: "Email address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters or long!" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text-alt">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value="Login" />
                </form>
                <p>New to Doctors Portal? <Link to="/signup" className='text-secondary'>Create a new account.</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;