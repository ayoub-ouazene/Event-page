

const PreviousEventImg = ({ImgLink , Title , date }) => {



  return (
    <div className="PreviousEventImg" >
        <div className="PrincipleImgContainer">

                  <div className="PrincipleImg" style={{ backgroundImage: 'url(' + ImgLink + ')' }}></div>
                  <div className="details">
                      <p>{Title}</p>
                      <p>{date}</p>
                  </div>
                
                
              </div>  

              <div className="ImgLikeBg1"></div>  
              <div className="ImgLikeBg2"></div>   
            
    </div>
  )
}


export default PreviousEventImg 