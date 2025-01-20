// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function ImagePlaceholder() {
    return ( 
        <div className="container h-full w-full bg-gray-400 flex flex-col items-center justify-center overflow-hidden">
            {/* <img src="/product-img.png" alt="" className="w-full " /> */}
            <div className="w-1/2 text-center"><FontAwesomeIcon icon={faImage} /></div>
        </div>
     );
}

export default ImagePlaceholder;