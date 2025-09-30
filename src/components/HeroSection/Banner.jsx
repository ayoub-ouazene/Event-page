import "./Banner.css"
import certificateImage from "../../assets/gdg-event-photo.png";

const Banner = () => {
  return (
    <div className="Hero">
      <div className="svg-container"> 
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1325 365" // Adjusted viewBox
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="mask">
              <path d="M998.5 1.5C1017 1.5 1032 16.4985 1032 35V99.1338C1032 115.978 1045.66 129.634 1062.5 129.634H1287C1305.5 129.634 1320.5 144.632 1320.5 163.134V326.467C1320.5 344.968 1305.5 359.967 1287 359.967H461.5C442.999 359.967 428 344.968 428 326.467V260C428 243.155 414.345 229.5 397.5 229.5H35C16.4985 229.5 1.5 214.502 1.5 196V35C1.5 16.4985 16.4985 1.5 35 1.5H998.5Z" />
            </clipPath>
          </defs>

          {/* The clipped image */}
          <image 
            className="img"
            href={certificateImage}
            x="0" 
            y="0" 
            width="100%" 
            height="100%" 
            clip-path="url(#mask)" 
            preserveAspectRatio="xMidYMid slice" 
          />
            
          {/* The visible border */}
          <path 
            d="M998.5 1.5C1017 1.5 1032 16.4985 1032 35V99.1338C1032 115.978 1045.66 129.634 1062.5 129.634H1287C1305.5 129.634 1320.5 144.632 1320.5 163.134V326.467C1320.5 344.968 1305.5 359.967 1287 359.967H461.5C442.999 359.967 428 344.968 428 326.467V260C428 243.155 414.345 229.5 397.5 229.5H35C16.4985 229.5 1.5 214.502 1.5 196V35C1.5 16.4985 16.4985 1.5 35 1.5H998.5Z" 
            stroke="black" 
            strokeWidth="3" 
            fill="none" 
          />
        </svg>
      </div>

       <div className="gdg-logo">
          <div className="right-side"></div>
          <div className="left-side"></div>
      </div>
      <div className="HeroTitle">Our Events</div> 


    </div>
  );
}

export default Banner;