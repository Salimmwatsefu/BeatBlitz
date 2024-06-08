import React from 'react'

function GenreCard({ covers, genre, textColor, borderColor, shadowColor }) {
    return (
        <div className={`relative w-[350px] h-[250px] rounded-md shadow-md  block overflow-hidden border p-3 ${borderColor} ${shadowColor}`}>
            <div className='grid grid-cols-3 z-0'>
                {covers.map((cover, index) => (
                    <img
                        key={index}
                        src={cover}
                        alt={`${genre} Cover ${index + 1}`}
                        className=''
                    />
                ))}
            </div>
            <div className='absolute top-[205px] left-0 w-full h-10 flex items-center justify-center bg-black bg-opacity-80 z-10'>
                <h2 className={`text-3xl ${textColor}`}>{genre}</h2>
            </div>
        </div>
    )
}

export default GenreCard
