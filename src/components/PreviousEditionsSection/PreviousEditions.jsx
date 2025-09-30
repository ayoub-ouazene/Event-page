import React, { useState, useEffect } from 'react';
import "./PreviousEditions.css"

// 🔑 Import all your image assets
import GDGImg from "../../assets/GDG-Community.png" // Image source 1
import AIFest from "../../assets/AIFest.png"       // Image source 2
import GDGImg2 from "../../assets/GDG-Community.png" // Placeholder for Image 3
import AIFest2 from "../../assets/AIFest.png"      // Placeholder for Image 4

// Define the initial content for the four positions
const initialImageSources = [
    { src: GDGImg, alt: "Edition 1" },
    { src: AIFest, alt: "Edition 2" },
    { src: GDGImg2, alt: "Edition 3" },
    { src: AIFest2, alt: "Edition 4" },
];

const PreviousEditions = () => {
    // 🔑 State to manage the rotating image sources
    const [imageSources, setImageSources] = useState(initialImageSources);

    // 🔑 Effect for infinite rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setImageSources(prevSources => {
                // Performs a 'left' rotation: the first image moves to the end.
                // e.g., [1, 2, 3, 4] -> [2, 3, 4, 1]
                const [first, ...rest] = prevSources;
                return [...rest, first];
            });
        }, 5000); // Rotates every 5 seconds (5000ms)

        return () => clearInterval(interval); // Cleanup when component unmounts
    }, []);



    return (
        <div className="PreviousEditionsSection">
            <h2>Previous Editions</h2>
            <div className="PreviousEditionsImgs">
                <div className="firstImgColumn">
                    {/* Position 1 (Top Left) displays imageSources[0] content */}
                    <div 
                        className="firstImg carousel-item" 
                        style={{ backgroundImage: `url(${imageSources[0].src})` }}
                        role="img"
                        aria-label={imageSources[0].alt}
                    ></div>

                    {/* Position 2 (Bottom Left) displays imageSources[1] content */}
                    <div 
                        className="secondImg carousel-item" 
                        style={{ backgroundImage: `url(${imageSources[1].src})` }}
                        role="img"
                        aria-label={imageSources[1].alt}
                    ></div>
                </div>

                <div className="secondImgColumn">
                    {/* Position 3 (Top Right) displays imageSources[2] content */}
                    <div 
                        className="thirdImg carousel-item" 
                        style={{ backgroundImage: `url(${imageSources[2].src})` }}
                        role="img"
                        aria-label={imageSources[2].alt}
                    ></div>

                    {/* Position 4 (Bottom Right) displays imageSources[3] content */}
                    <div 
                        className="fourthImg carousel-item" 
                        style={{ backgroundImage: `url(${imageSources[3].src})` }}
                        role="img"
                        aria-label={imageSources[3].alt}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default PreviousEditions;