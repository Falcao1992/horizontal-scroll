import React from 'react'

const addresses = [
    {
        town: "Amsterdam",
        address: "IJpromenade 1, 1031 KT Amsterdam, Netherlands",
        phone: "+312 058 91400",
        email: "amsterdam@webunlocked.co",
    },
    {
        town: "London",
        address: "Westminster, London SW1A 0AA, United Kingdom",
        phone: "+442 072 468350",
        email: "london@webunlocked.co",
    },
    {
        town: "Zürich",
        address: "Museumstrasse 2, 8001 Zürich, Switzerland",
        phone: "+414 421 86511",
        email: "zurich@webunlocked.co",
    },
];

function Footer() {
    return (
        <div className="h-full w-screen bg-purple-400 grid place-items-center"
             style={{zIndex: "-1" , background: "linear-gradient(to right,#4a00e0,#8e2de2)"}}
             id="footer"
             data-scroll
             data-scroll-speed={-7}
        >
            <div className="contact-adresses" id="contact-adresses">
                {addresses.map((info) => (
                    <div key={info.town}>
                        <h1 className="text-2xl uppercase mb-8 font-bold">{info.town}</h1>
                        <div>
                            {info.address.split(',').map(element => (
                                <p className="my-4 mx-0" key={element}>{element}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer