import Axios from 'axios'
import { useState } from 'react'
import './App.css';


function App() {

  const [colum2, setcolum2] = useState([]);
  const [colum3, setcolum3] = useState([]);
  const [colum1, setcolum1] = useState([]);
  const [colum4, setcolum4] = useState([]);
  const [employeeList, setemployeeList] = useState([]);


  const getEmployees = () => {
    Axios.get('http://localhost:3002/employees').then((response) => {
      console.log(response)
      setemployeeList(response.data);
    });
  }
 
  const createPost = () => {
    Axios.post("http://localhost:3002/create", {
      colum2: colum2, colum3: colum3, colum1: colum1, colum4: colum4,
    }).then(() => {
      setemployeeList([
        ...employeeList,
        {
          colum2: colum2, colum3: colum3, colum1: colum1, colum4: colum4,
        },
      ]);
    });
  };


  const update = (colum1,newcolum2) => {
    Axios.put("http://localhost:3002/UPDATE", { colum1: colum1, colum2: newcolum2 }).then(
      (response) => {
        setemployeeList(
          employeeList.map((val) => {
            return val.colum1 === colum1
              ? {
                colum1: val.colum1, colum2: newcolum2,
              }
              : val;
          })
        );
      }
    );
  };

 getEmployees();




  return (
     <div class="ex2">
 <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              colum2:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="กรอกบางอย่าง"
              onChange={(event) => {
                setcolum2(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colum3">colum3:</label>
            <input
              type="number"
              className="form-control"
              placeholder="กรอกบางอย่าง"
              onChange={(event) => {
                setcolum3(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colum1">colum1:</label>
            <input
              type="text"
              className="form-control"
              placeholder="กรอกบางอย่าง"
              onChange={(event) => {
                setcolum1(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colum4">colum4:</label>
            <input
              type="text"
              className="form-control"
              placeholder="กรอกบางอย่าง"
              onChange={(event) => {
                setcolum4(event.target.value)
              }}
            />
          </div>
        
          <button onClick={createPost} class="btn btn-success">
            Add Employee
          </button>
        </form>


 <h1>รายการอาหารทั้งหมด</h1>
    {employeeList.map((val, key) => {
      return (
        <div className="employee card">

          <div className="card-body text-left">
            <p className="card-text">
              คิวที่:{val.colum1}
            </p>
          </div>
   
            
            <button className="btn btn-delete" onClick={() => { update(val.colum1,"2") }} >ทำเสร็จแล้ว</button>


          
</div>
          )

        }



        )}
        </div>


      );

    }

export default App;