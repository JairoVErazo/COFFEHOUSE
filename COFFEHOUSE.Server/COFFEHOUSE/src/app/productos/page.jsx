import React from 'react'


const page = () => {
  return (
    <div className='container d-flex' style={{color:"#94303c"}}>        
 <div className="col-md-6">
 <h2 className="text-center" style={{fontSize:"45px", fontWeight:"bold" , marginLeft:"40px"}}>
            <div>
            <h1>PRODUCTOS</h1>
            </div>            
          </h2>
      <div className="card" style={{ borderRadius: '10px', marginBottom: '20px', backgroundColor:"#ffffff, 0.7", padding:"50px"}}>
        <div className="card-body" style={{ borderRadius: '10px', marginBottom: '20px', backgroundColor:"#ffffff, 0.7", padding:"50px"}}>
        
          <div className="details"> 
          
          <div style={{ padding: "30px", backgroundColor:"#ffffff", borderRadius:"25px" }}>
          <p style={{textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Raspberry Cake</p>  
          <div style={{ display: "flex", alignItems: "center"}}>
              <img src={"/img/cheesecake.jpg"} style={{ width: "150px",height:"150px", border: "5px solid #94303c" }} alt="cake" />
              <div style={{textAlign:"center", fontSize:"25px", fontWeight:"bold", marginLeft:"100px"}}>
                <p>Costo</p>
                <p>Precio</p>
              </div>
              <div  style={{textAlign:"center", fontSize:"25px", fontWeight:"bold", marginLeft:"100px"}}>
                <p>$4.00</p>
                <p>$5.00</p>
              </div>
              <div  style={{textAlign:"center", fontSize:"25px", fontWeight:"bold", marginLeft:"100px"}}>
                <p>Ingredientes</p>
                <img src={"/img/UilSearchPlus.svg"} style={{width:"50px"}} ></img>   
              </div>   
            </div> 
            </div> 
             
          <div style={{ padding: "30px", backgroundColor:"#ffffff", borderRadius:"25px" }}>
          <p style={{textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Raspberry Cake</p>  
          <div style={{ display: "flex", alignItems: "center"}}>
              <img src={"/img/cheesecake.jpg"} style={{ width: "150px",height:"150px", border: "5px solid #94303c" }} alt="cake" />
              <div style={{textAlign:"center", fontSize:"25px", fontWeight:"bold", marginLeft:"100px"}}>
                <p>Costo</p>
                <p>Precio</p>
              </div>
              <div  style={{textAlign:"center", fontSize:"25px", fontWeight:"bold", marginLeft:"100px"}}>
                <p>$4.00</p>
                <p>$5.00</p>
              </div>
              <div  style={{textAlign:"center", fontSize:"25px", fontWeight:"bold", marginLeft:"100px"}}>
                <p>Ingredientes</p>
                <img src={"/img/UilSearchPlus.svg"} style={{width:"50px"}} ></img>   
              </div>   
            </div> 
            </div>                                           
          </div>
        </div>
      </div>
    </div>   
    </div>
  )
}

export default page