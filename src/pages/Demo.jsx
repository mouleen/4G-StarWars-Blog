// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
      <>
        <div id="carouselid" className="carousel slide bg-black" data-bs-ride="carousel"> 
          <div className="carousel-inner py-5 px-5">
            {/* <div className="carousel-item active">
              <div className="card-wrapper d-flex"  style={{height:"200px"}}>
                <div className="card" style={{width:"18rem"}}>
                  <img src="..." alt="" className="car-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"> a - Card title</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                  </div>
                </div>
                <div className="card" style={{width:"18rem"}}>
                  <img src="..." alt="" className="car-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"> a - Card title2</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                  </div>
                </div>
                <div className="card " style={{width:"18rem"}}>
                  <img src="..." alt="" className="car-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"> a - Card title2</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                  </div>
                </div>
              </div>
            </div>*/}
            <div className="carousel-item active">
               <div className="card-wrapper mx-5 px-5 d-flex">
                <div className="card border-black mx-2" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/mother-aniseya-main_7ffc85e5.jpeg" style={{ "min-height":"200px", "object-fit":"cover" }} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div className="card border-black mx-2" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/bunta-tree-main_598ecc76.jpeg"  style={{ "min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title2</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div className="card border-black mx-2" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/plagueis-main-v1_b596bc2a.jpeg" style={{"min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title2</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div className="card border-black mx-2" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/plagueis-main-v1_b596bc2a.jpeg" style={{"min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title2</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div className="card border-black mx-2" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/plagueis-main-v1_b596bc2a.jpeg" style={{"min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title2</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
              </div>
            </div>
          </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselid" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselid" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </>
  );
};
