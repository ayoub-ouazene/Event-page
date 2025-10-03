import "./Banner.css"
import certificateImage from "../../assets/gdg-event-photo.png";

const Banner = () => {
  return (
    <div className="Hero">

        
        <div className="svg-container"> 
              <div className="HeroTitle">Our Events</div> 
              <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 1325 365" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                      <clipPath id="mask">
                        <path d="M998.5 1.5C1017 1.5 1032 16.4985 1032 35V99.1338C1032 115.978 1045.66 129.634 1062.5 129.634H1287C1305.5 129.634 1320.5 144.632 1320.5 163.134V326.467C1320.5 344.968 1305.5 359.967 1287 359.967H461.5C442.999 359.967 428 344.968 428 326.467V260C428 243.155 414.345 229.5 397.5 229.5H35C16.4985 229.5 1.5 214.502 1.5 196V35C1.5 16.4985 16.4985 1.5 35 1.5H998.5Z" />
                      </clipPath>
                    </defs>
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
                  
                    <path 
                      d="M998.5 1.5C1017 1.5 1032 16.4985 1032 35V99.1338C1032 115.978 1045.66 129.634 1062.5 129.634H1287C1305.5 129.634 1320.5 144.632 1320.5 163.134V326.467C1320.5 344.968 1305.5 359.967 1287 359.967H461.5C442.999 359.967 428 344.968 428 326.467V260C428 243.155 414.345 229.5 397.5 229.5H35C16.4985 229.5 1.5 214.502 1.5 196V35C1.5 16.4985 16.4985 1.5 35 1.5H998.5Z" 
                      stroke="black" 
                      strokeWidth="3" 
                      fill="none" 
                    />
              </svg>
              
              <svg  className="GdgLogo"  width="214" height="120" viewBox="0 0 214 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="-0.379698" y="3.51509" width="85.1788" height="41.0457" rx="20.5228" transform="matrix(0.778957 -0.627078 -0.627078 -0.778957 143.926 113.769)" fill="#F8AA00" stroke="black" stroke-width="5"/>
                  <rect x="-3.49359" y="0.54301" width="85.1789" height="41.0457" rx="20.5229" transform="matrix(0.807319 0.590115 0.590115 -0.807319 116.944 35.5118)" fill="#34A853" stroke="black" stroke-width="5"/>
                  <rect x="98.9867" y="33.0118" width="85.1789" height="41.0457" rx="20.5229" transform="rotate(143.835 98.9867 33.0118)" fill="#E94335" stroke="black" stroke-width="5"/>
                  <rect x="72.0052" y="111.269" width="85.1788" height="41.0457" rx="20.5228" transform="rotate(-141.165 72.0052 111.269)" fill="#4285F3" stroke="black" stroke-width="5"/>
                </svg>


        </div>

      
    </div>
  );
}

export default Banner;