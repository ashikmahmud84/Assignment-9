import React, { useEffect, useState } from 'react';
import { FaStar, FaWarehouse } from 'react-icons/fa';
import { useParams } from 'react-router';
import Loading from './Loading';
import { toast } from 'react-toastify';

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        fetch('/gamedata.json')
            .then(res => res.json())
            .then(data =>  {
                // console.log(data)
                const foundGame = data.find(g => g.id == parseInt(id));
                setGame(foundGame);
                // console.log(foundGame)
            });
    }, [id]);

    if (!game) return <Loading></Loading>



    const handleBookConsultation = (e) => {
        e.preventDefault();
        e.target.reset();
        toast.success('Consultation booked successfully!');
    }
    return (
        <section className=' w-11/12 mx-auto my-10 space-y-5'>
            <div>
                <div className="p-5 bg-gray-100  ">
                    <div className="md:flex  ">
                        <div>
                            <img className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[450px] object-cover rounded-lg" src={game.coverPhoto} alt={game.title} />
                        </div>
                        <div className="ml-[50px]">
                            <div className="md:ml-10 ">
                                <h1 className=" text-4xl font-bold">{game.title}</h1>
                                

                            </div>
                            <div className=" ml-10 mt-8">

                                <div className="mt-5 md:mt-0">

                                    <div>
                                        <FaStar className="text-orange-500 h-[50px] w-[50px]" />
                                    </div>


                                    <p>Average Ratings</p>
                                    <h1 className="font-bold text-5xl">{game.ratings}</h1>
                                </div>

                            </div>
                            <div className=" ml-10 mt-8">

                                <div className="mt-5 md:mt-0">
                                    <div>
                                        <FaWarehouse className="text-green-500 h-[50px] w-[50px]" />
                                    </div>
                                    <p>Developer</p>
                                    <h1 className="font-bold text-5xl">{game.developer}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>description</h1>
                    <p className='text-gray-400 mt-5'>{game.description}</p>
                </div>
            </div>



                <div className='mt-10 bg-white p-6 rounded-xl shadow'>
                    <h2 className='text-2xl mb-4 text-green-600'>Book Consultation</h2>
                    <form onSubmit={handleBookConsultation} className='space-y-4 max-w-md'>
                        {/* Name */}
                        <div>
                            <label className='block font-medium mb-1'>Name</label>
                            <input className='w-full p-2 rounded border border-gray-300'
                                type="text"
                                name='name'
                                placeholder='Your Name'
                                required />
                        </div>
                        {/* Email */}
                        <div>
                            <label className='block font-medium mb-1'>Email</label>
                            <input className='w-full p-2 rounded border border-gray-300'
                                type="email"
                                name='email'
                                placeholder='Your Email'
                                required />
                        </div>
                        <button className='btn bg-linear-to-r from-green-600 to-green-800 
                py-3 px-4 text-[16px] text-white'
                            type='submit'>Get Game</button>
                    </form>
                </div>
        </section>

    );
};

export default GameDetails;