import React from 'react'
import GenreCard from './GenreCard'

function FirstScreen() {
    const rapcovers = [
        '/assets/photos/rap/gunnaalbum.jpg',
        '/assets/photos/rap/futurealbum.jpg',
        '/assets/photos/rap/travisalbum.jpg',
        '/assets/photos/rap/yatchyalbum.jpg',
        '/assets/photos/rap/drakealbum.jpg',
        '/assets/photos/rap/ythugalbum.jpg'
    ]

    const housecovers = [
        
        '/assets/photos/house/marshmello.jpg',
        '/assets/photos/house/kygo.jpg',
        '/assets/photos/house/cs.jpg',
        '/assets/photos/house/sanholoalbum.jpg',
        '/assets/photos/house/aw.jpg',
        '/assets/photos/house/cp.jpg',
        
    ]

    const popcovers = [
        '/assets/photos/rock/rockalbum1.jpg',
        '/assets/photos/rock/rockalbum2.jpg',
        '/assets/photos/rock/rockalbum3.jpg',
        '/assets/photos/rock/rockalbum4.jpg',
        '/assets/photos/rock/rockalbum5.jpg',
        '/assets/photos/rock/rockalbum6.jpg'
    ]

    const countrycovers = [
        '/assets/photos/country/countryalbum1.jpg',
        '/assets/photos/country/countryalbum2.jpg',
        '/assets/photos/country/countryalbum3.jpg',
        '/assets/photos/country/countryalbum4.jpg',
        '/assets/photos/country/countryalbum5.jpg',
        '/assets/photos/country/countryalbum6.jpg'
    ]

    const jazzcovers = [
        '/assets/photos/jazz/jazzalbum1.jpg',
        '/assets/photos/jazz/jazzalbum2.jpg',
        '/assets/photos/jazz/jazzalbum3.jpg',
        '/assets/photos/jazz/jazzalbum4.jpg',
        '/assets/photos/jazz/jazzalbum5.jpg',
        '/assets/photos/jazz/jazzalbum6.jpg'
    ]

    return (
        <div className='mt-20 flex justify-center '>
            <div className=' grid grid-cols-3 gap-x-10 gap-y-10'>
            <GenreCard covers={rapcovers} genre="Rap" textColor="text-[#ffcc70]" borderColor="border-[#ffcc70]" shadowColor="shadow-[#ffcc70]" />
            <GenreCard covers={housecovers} genre="House" textColor="text-[#ff6699]" borderColor="border-[#ff6699] " shadowColor="shadow-[#ff6699]" />
            <GenreCard covers={popcovers} genre="Pop" textColor="text-[#6699ff]" borderColor="border-[#6699ff]" />
            <GenreCard covers={countrycovers} genre="Country" textColor="text-[#cc9966]" borderColor="border-[#cc9966]" />
            <GenreCard covers={jazzcovers} genre="Jazz" textColor="text-[#66cc99]" borderColor="border-[#66cc99]" />
            </div>
        </div>
    )
}

export default FirstScreen
