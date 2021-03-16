import React from 'react'

function NavBar() {
    return (
        <div className="w-full flex justify-between p-14 box-border fixed text-white z-10" style={{mixBlendMode: "difference"}}>
            <div>WU</div>
                <ul className="flex">
                    <li className="my-0 mx-4">Cases</li>
                    <li className="my-0 mx-4">Services</li>
                    <li className="my-0 mx-4">Culture</li>
                    <li className="my-0 mx-4">Team</li>
                    <li className="my-0 mx-4">Blog</li>
                    <li className="my-0 mx-4">Contact</li>
                </ul>
            
        </div>
    )
}

export default NavBar