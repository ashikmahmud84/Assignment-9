import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/gamedata.json')
            .then(res => res.json())
            .then(data => setGames(data));
    }, []);
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Top Rated Games</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
                        >
                            <img
                                src={game.coverPhoto}
                                alt={game.title}
                               className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[450px] object-cover rounded-lg"
                            />
                            <h3 className="text-xl font-semibold mt-3">{game.title}</h3>
                            
                            <p className="text-yellow-500">{game.ratings}</p>
                            <Link
                                to={`/games/${game.id}`}
                                className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </section>





        </div>
    );
};

export default Games;