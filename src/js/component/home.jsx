import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [tarealistita, setTarea] = useState("");
  const [listaDeTareas, setListadeTareas] = useState([]);
  let eliminar = []

  function subirlista(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setListadeTareas([...listaDeTareas, tarealistita]);
      setTarea("");
      console.log(tarealistita);
    }
  }
    function deleteItem(index) {
    // crear la variable que recibe la lista
      
      eliminar= listaDeTareas.filter((item, i) =>{
        if(index !==i){
          return item
        }
// forma comprimida: eliminar = lisTareas,filter((item,index)=>index !==id))
// forma comprimida con set : setListaTareas(lisTareas,filter((item,index)=>index !==id))

              })
              setListadeTareas(eliminar)
    }
  
  

  return (
    <div className="text-center">
      <div className="d-flex justify-content-start p-3 m-3 col-12">
        <div className="m-3 col-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            TO DO LIST
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="List"
            onChange={(e) => setTarea(e.target.value)}
            value={tarealistita}
            onKeyPress={subirlista}
          />
          <br />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            TASKS
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder= {[listaDeTareas.length]==0? "There no tasks": "te faltan "+[listaDeTareas.length]+" tareas"}
            disabled
          />
        </div>
        <br />
        <div className="d-flex flex-column-start col-9">
          <div className="col-7" style={{   backgroundImage: `url("https://st.depositphotos.com/1427101/4993/v/600/depositphotos_49934977-stock-illustration-notebook-a4-size.jpg")`,height: "500px",width: "1000px", backgroundRepeat: "no-repeat"}}>
            <ul className="list-group text-start"style={{marginLeft: "5em", marginTop: "5em"}}>
            <div className="col-6 align-middle">
              {listaDeTareas.map((item, i) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                  {item} &nbsp;&nbsp;&nbsp;
                  <button className=" btn btn-primary rounded-pill float-end btn-close" onClick={() => deleteItem(i)}>
                  </button>
                </li>
              ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
