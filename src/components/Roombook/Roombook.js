import React, { useState } from 'react';
import { createRef } from 'react';
import Pdf from "react-to-pdf";
import { useLoaderData } from 'react-router-dom';

const Roombook = () => {
    const detail = useLoaderData();
    const { Quality, id, bad, person, category, balance } = detail;
    console.log(detail)
    const ref = createRef();
    const [receit, setReceit] = useState('');
    const [success, setSuccess] = useState();
    const [download, setDownload] = useState();
    const [bal, setBal] = useState();
    const [bd, setBd] = useState();
    const [b, setB] = useState();
    const [payment, setPayment] = useState('');
    const [r, setR] = useState();
    const [ro, setRo] = useState();
    const [C, setC] = useState();
    const [Cd, setCd] = useState();
    const [q, setQ] = useState();
    const [qu, setQu] = useState();
    const [p, setP] = useState();
    const [pe, setPe] = useState();
    const [v, setV] = useState();
    const [px5, setPx5] = useState();
    const [px, setPx] = useState();
    const [btn, setBtn] = useState();
    const [div, setDiv] = useState();
    const onClickMsg = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        let phone = parseInt(form.phone.value);
        let voucher = '';
        let achieve = '';
        let down = '';

        if ((password + '').length > 0) {
            voucher = phone - 1211160000;
            achieve = 'Success check out!!! Download and keep it for further use'
            down = 'Download now';
            setReceit(voucher);
            setSuccess(achieve);
            setDownload(down);
            setBal(balance); setPayment('Payment');
            setC(category); setCd('category'); setPe('Total Person: '); setP(person);
            setR(id); setRo('Room no: '); setQ('Quality: '); setQu(Quality);
            setBd('Total Bad: '); setB(bad); setV('Your voucher no: ');
            setPx5('px-2 lg:px-5'); setPx('text-success lg:px-5 mx-auto lg:mt-4 w-64 lg:w-full block '); setBtn('text-warning text-xl font-bold btn btn-outline w-56 lg:w-full'); setDiv('bg-white text-black  ')
            form.reset();
        }
    }

    return (
        <div className="hero lg:w-full">

            <div className="hero-content lg:w-full" >
                <div className="card flex-shrink-0 lg:w-3/6 shadow-2xl ">
                    <div className="card-body lg:w-full">
                        <h2 className='font-extrabold text-4xl uppercase underline text-center py-3'>Check Out now</h2>
                        <form onSubmit={onClickMsg} className="flex flex-col lg:w-full border-opacity-50" >
                            <div className="grid place-items-center w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={'no name'} className="input input-bordered w-full" readOnly />
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
                                    <div className="form-control w-full lg:pr-2">
                                        <label className="label">
                                            <span className="label-text">Room no</span>
                                        </label>
                                        <input type="text" name={id} defaultValue={id} className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" defaultValue={category} className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full lg:pr-2">
                                        <label className="label">
                                            <span className="label-text">bad</span>
                                        </label>
                                        <input type="number" defaultValue={bad} className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Person</span>
                                        </label>
                                        <input type="number" defaultValue={person} className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full lg:pr-2">
                                        <label className="label">
                                            <span className="label-text">Quality</span>
                                        </label>
                                        <input type="text" defaultValue={Quality} className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Balance</span>
                                        </label>
                                        <input type="text" defaultValue={balance} className="input input-bordered w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control lg:w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={'no email'} className="input input-bordered w-full" readOnly />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Contact number</span>
                                </label>
                                <input type="text" name="phone" placeholder='contact number  example:1789234567' className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control mt-5 w-full">
                                <button
                                    className="btn btn-outline w-full m-0 p-0">Checkout</button>
                            </div>
                        </form>
                        <>
                            <span className={div} ref={ref} >
                                <p className={px}>{success}</p>
                                <p className={px5}>{ro} {r}</p>
                                <p className={px5}>{q}{qu}</p>
                                <p className={px5}>{bd}{b}</p>
                                <p className={px5}>{pe}{p}</p>
                                <p className={px5}>{C}{Cd}</p>
                                <p className={px5}>{payment}{bal}</p>
                                <p className={px}>{v}{`${receit} `}</p>
                            </span >
                            <Pdf targetRef={ref} filename="voucher.pdf">
                                {({ toPdf }) => (
                                    <button className={btn} onClick={toPdf} > {download}</button>
                                )}
                            </Pdf>
                        </ >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Roombook;
