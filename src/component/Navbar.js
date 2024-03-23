import react, { useState, useEffect } from "react"



const Navbar = () => {
  let [screenWidth, setScreenWidth] = useState (0);
  let [show, setShow] = useState (false);

  useEffect (()=>{
    setScreenWidth (window.innerWidth);
    window.addEventListener ("resize", handleChange);
  }, [])

  const handleChange = (e) => {
    setScreenWidth (e.target.innerWidth);
  }

  let iconBuilder = (arrOfIcons, limit) => {
    let res = []
    let remainder = []  
  
    for (let i = 0; i < Math.min (limit, arrOfIcons.length); i++){
      res.push (
        <div>
          <button className='nav-btn'>
            <span className="material-symbols-outlined">{arrOfIcons[i]}</span>
          </button>
        </div>
        
      )
    }  
    for (let i = Math.min (limit, arrOfIcons.length); i < arrOfIcons.length; i++){
      remainder.push (
        <div>
          <button className='dropdown-btn'>
            <span className="material-symbols-outlined">{arrOfIcons[i]}</span>
          </button>
        </div>
      )
    }

    if (remainder.length === 0) return res;

    res.push (
      <div className='more-btn-div'>
        <div>
          <button
           className='nav-btn'
           onClick={()=>setShow(!show)}>
            More
          </button>
        </div>
        <div className = {(show === true) ? "" : "hidden"}>
         {remainder}
        
        </div>
         
  
        
      </div>
     
    )  
    // console.log (res);
  
    return res;
  }
//   console.log (screenWidth);

  const arrOfIcons = ["search", "home", "delete", "menu", "settings",
                      "favorite", "add", "star", "logout"]

  const limit = Math.ceil (screenWidth / (110));
//   console.log ("limit", limit)

  return (
    <div className="navbar-arr">
        <div className="navbar">
            {iconBuilder(arrOfIcons,limit)}
        </div>
    </div>
    
  );
}

export default Navbar;
