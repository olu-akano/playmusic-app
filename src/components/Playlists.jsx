import React from 'react';
import { Card } from './Card';

export const musicList = [
    { name: "Davido", genre: "Afrobeats", intro: "If", img: "https://www.nme.com/wp-content/uploads/2020/11/Davido-696x442.jpg" },
    { name: "Vybz Kartel", genre: "Dancehall", intro: "Romping shop", img: "https://www.dancehallusa.com/wp-content/uploads/2015/01/vybz-kartel-jamaican-artiste_0.png"},
    { name: "Nailah Blackman", genre: "Soca", intro: "Baila Mami", img: "https://i1.sndcdn.com/avatars-000718551907-elxon2-t500x500.jpg"},
    { name: "Kes", genre: "Soca", intro: "Hello", img: "https://socanews.com/wp-content/uploads/2020/10/Kes-The-band-Kes-pointing.jpg" },
    { name: "Wizkid", genre: "Afrobeats", intro: "Come closer", img: "https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/02/Wizkid-WEB.jpg" },
    { name: "Popcaan", genre: "Dancehall", intro: "My type", img: "https://thetropixs.com/wp-content/uploads/2020/08/Popcaan-Yiy.jpg" },
    { name: "Patrice Roberts", genre: "Soca", intro: "Like it like that", img: "https://2bkaribbean.com/wp-content/uploads/2020/02/Patrice-Roberts-2BKaribbean-Strength-Of-A-Woman-Cover-02.07.20-2.jpg" },
    { name: "Burna Boy", genre: "Afrobeats", intro: "Anybody", img: "https://media.gq.com/photos/5e5ebc2cb7235e00084122d3/1:1/w_2999,h_2999,c_limit/burna-boy-gq-style-spring-summer-2020-promo.jpg" },
    { name: "Spice", genre: "Dancehall", intro: "Send It Up", img: "https://urbanislandz.com/wp-content/uploads/2019/06/Spice-dancehall-artiste.jpg" },
    { name: "Beenie Man", genre: "Dancehall", intro: "Sim Simma", img: "https://pbs.twimg.com/profile_images/1351528759480999938/nVdYo2MB_400x400.jpg" },
    { name: "Tiwa Savage", genre: "Afrobeats", intro: "Park well", img: "https://cdn.punchng.com/wp-content/uploads/2021/10/09043359/Tiwa-Savage.jpg" },
    { name: "Bunji Garlin", genre: "Soca", intro: "Big Bad Soca", img: "https://m.media-amazon.com/images/I/310QtrW0pVL._SL1000_.jpg" },
    { name: "Shenseea", genre: "Dancehall", intro: "Shen yeng anthem", img: "https://i1.sndcdn.com/avatars-tbWDeT7ajJAqjPvZ-dhjBkA-t500x500.jpg" },
    { name: "Maleek Berry", genre: "Afrobeats", intro: "Kontrol", img: "https://dynamicmedia.livenationinternational.com/Media/n/v/v/11ffffdd-0fa4-482b-854c-944dfdc7ff88.jpg" },
    { name: "Sean Paul", genre: "Dancehall", intro: "Gimme The Light", img: "https://pbs.twimg.com/profile_images/1085955424342425601/3pqRRO9n.jpg" },
];


export const Playlists = () => {
    const renderPlaylists = () => musicList.map((m, i) => <Card key ={i} name={m.name} genre={m.genre} intro={m.intro} img={m.img}/>)


    return (
        <>
            <section id="playlists">
                <h2>Top Songs</h2>
                <p class="artistText">Hover over the artists</p>
                <ol>
                    { renderPlaylists() }
                </ol>
            </section>
        </>
    )
}