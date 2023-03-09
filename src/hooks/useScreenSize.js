import { useState, useEffect } from "react";

const resize = () => {
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener("resize", handleResize);
        // handleResize();
    
        return () => window.addEventListener("resize", handleResize);
      }, []);

   return screenSize;
}
 export default resize;
