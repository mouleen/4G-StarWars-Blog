// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import Card from "../components/Card";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
      <>
        <div id="carouselid" className="carousel slide bg-black" data-bs-ride="carousel"> 
          <div className="carousel-inner py-5 mx-5 px-5">
            <div className="carousel-item active">
               <div className="card-wrapper mx-5 px-5 d-flex">
                <Card key={1} title="a - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. ssss" />
                <Card key={2} title="a - Card title" text="Lorem ipsum dolor consectetur adipisicing elit. Sit amet." />
                <Card key={3} title="a - Card title" text="Lorem ipsum dolor consectetur adipisicing elit. Sit amet." />
                <Card key={4} title="a - Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit. ssss" />
                <Card key={5} title="a - Card title" text="Lorem ipsum dolor consectetur adipisicing elit. Sit amet." />
                
                {/* Entre paginas del slider */}
              </div>
            </div>
            <div className="carousel-item active">
               <div className="card-wrapper mx-5 px-5 d-flex">
                {/* Entre paginas del slider */}

                <div key={6} className="card border-black mx-2 bg-black rounded-4" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/mother-aniseya-main_7ffc85e5.jpeg" style={{ "min-height":"200px", "object-fit":"cover" }} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title4</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div key={7} className="card border-black mx-2 bg-black rounded-4" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/bunta-tree-main_598ecc76.jpeg"  style={{ "min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title5</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div key={8} className="card border-black mx-2 bg-black rounded-4" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/plagueis-main-v1_b596bc2a.jpeg" style={{"min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title6</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div key={9} className="card border-black mx-2 bg-black rounded-4" style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/jecki-lon-main_3b0268ec.jpeg" style={{"min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title7</h5>
                    <p className="card-text"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                  </div>
                  <div className="notch-contain"></div>
                </div>
                <div key={10} className="card border-black mx-2 bg-black rounded-4 " style={{width:"18rem"}}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/indara-main_a497ba73.jpeg" style={{"min-height":"200px", "object-fit":"cover"}} alt="" className="card-img-top" />
                  <div className="card-body text-white">
                    <h5 className="card-title"> b - Card title8</h5>
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
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselid" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselid" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </>
  );
};
