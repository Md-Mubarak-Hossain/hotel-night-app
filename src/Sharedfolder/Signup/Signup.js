import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { AuthContext } from '../../Contexts/Context';

const Signup = () => {
    const { signUp, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const email = form.email.value;
        if (password.length < 8) {
            setError('Password minimum more than 8 characters')
            return;
        }
        else if (password !== confirm) {
            setError('')
            setError1('Password confirmation is not matched!!!')
            return;
        }
        else {
            signUp(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setError1('');
                    form.reset();
                    return alert('Successfully sign up')
                })
                .catch(err => console.error(err))
        }

    }
    const googleHandle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    const gitHandle = () => {
        gitHubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full">

            <div className="hero-content w-full" >
                <div className="card flex-shrink-0 w-3/6 shadow-2xl ">
                    <div className="card-body w-full">
                        <h2 className='font-extrabold text-4xl uppercase underline text-center py-3'>Please Sign up now</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col w-full border-opacity-50">
                            <div className="grid     place-items-center w-full">

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder=" email" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full" />
                                    <p className='text-red-800 text-sm'>{error}</p>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Confirm password</span>
                                    </label>
                                    <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered w-full" />
                                    <p className='text-red-800 text-sm'>{error1}</p>
                                </div>
                                <div className="form-control mt-5 w-full">
                                    <button className="btn btn-outline w-full ">Sign Up</button>
                                </div>
                            </div>
                            <div className="divider">OR</div>
                        </form>
                        <div className="grid place-items-center">
                            <button onClick={googleHandle} className="btn btn-outline w-full my-2 text-primary lowercase"><FcGoogle></FcGoogle><span className='pl-2'>Sign in with </span><span className='text-warning'>google</span></button>
                            <button onClick={gitHandle} className="btn btn-outline w-full my-2 text-primary lowercase"><SiGithub></SiGithub><span className='pl-2'>Sign in with </span><span className='text-warning'>GitHub</span></button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Signup;