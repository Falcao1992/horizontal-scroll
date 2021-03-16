import React, {useEffect, useRef} from 'react'
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import {imageData} from "../data"
import GalleryItem from "../components/GalleryItem/GalleryItem"
import LocomotiveScroll from 'locomotive-scroll';
import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

function Index() {
    
    const ref = useRef(null)
    
    useEffect(() => {
        if(ref) {
            new LocomotiveScroll({
                el: ref.current,
                smooth: true,
                direction: 'horizontal'
            })
        }
    },[])
    
    const images = imageData.map((tupples, index) =>
        tupples.map((url, elementIndex) => <GalleryItem key={url}
                                                        src={url}
                                                        index={elementIndex}
                                                        columnOffset={index * 14} />)
    )
    return (
        <>
            <NavBar />
            <div className="box-border" style={{paddingRight: '32rem'}} id="main-container">
                <div className="scroll-container" data-scroll-container ref={ref}>
                    <div className="flex h-screen justify-center items-center relative" id="content">
                        <div className="grid grid-cols-50 grid-rows-50 h-full relative items-center bg-gray-100"
                             style={{
                                 width: '250vw',
                                 paddingLeft: '12vw'
                             }}
                             id="gallery">
                            {images}
                            <div className="text-2xl"
                                 style={{gridArea: '43 / 1 / span 2 / span 1'}}
                                 id="gallery-helper"> Scroll to discover more
                            </div>
                            <div className="behind-text" style={{color: 'rgba(0, 0, 0, 0.2)'}} id="behind-text">
                                every body loves a good story
                            </div>
    
                            <div className="behind-text" style={{zIndex: 10, mixBlendMode: 'overlay'}} id="behind-text">
                                every body loves a good story
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Index