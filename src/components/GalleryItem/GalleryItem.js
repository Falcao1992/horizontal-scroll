import React, {useRef} from 'react'
import {points} from "../../data"
import useOnScreen from "../../hook/useOnScreen"

function GalleryItem({src, index, columnOffset}) {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref)
    const values = points[index]
    
    const onScreenClass = {
        clipPath: !onScreen ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 0%)' ,
        transition: 'clip-path 1s cubic-bezier(0.77,0,0.175,1)'
    }
    if(!values) return null
    
    const [row, column, spanRow, spanColumn] = values
    
    const getScrollIndex = () => {
        if(index === 1 || index === 4) return -1
        if(index === 0 || index === 3) return -0
        return 1
    }
    return (
        <div className="z-10 h-full"
             id="gallery-item"
             style={{gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`}}
             data-scroll
             data-scroll-speed={getScrollIndex()}
             ref={ref}
             
             >
            <div className="w-full h-full overflow-hidden relative"
                 id="gallery-item-image"
                 style={onScreenClass}
            >
                <div className="gallery-item-inner"
                     id="gallery-item-inner"
                     style={{backgroundImage: `url(${src})`}}>
                
                </div>
            </div>
        </div>
    )
}

export default GalleryItem