import React, {  useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "../components/alert";

export default function Register() {
 const navigate = useNavigate()
 const [faculty,setFaculty] = useState([])
 const [programe,setPrograme] = useState([])
 const [fullname,setFullname] = useState()
 const [allStudents,setAllStudents] = useState([])
 let [filteredStudents] = useState([])
 let programRef = useRef(null)
 let [year,setYear] = useState()
 let [studentRegistedStatus,setStudentRegistedStatus] = useState(null)
//  let [matNumber,setMatNumber] =useState();
 const formRef = useRef(null);
 const token = localStorage.getItem('token')

/* This is a `useEffect` hook that is fetching data from an API endpoint and setting the `allStudents`
state with the result. It runs only once when the component mounts, as indicated by the empty
dependency array `[]`. The `Authorization` header is set with a token retrieved from local storage.
The fetched data is in JSON format and is passed to the `setAllStudents` function to update the
state. If there is an error, it is logged to the console. */
 useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")} `
    );


    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://crns2.onrender.com/registerstudent", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
       return setAllStudents(result)
      } )
      .catch((error) => console.log("error", error));
  },[]);
  

/**
 * This function checks if an array of students exists and filters them based on their faculty,
 * department, and year.
 * @returns The `databaseCheck` function does not have a return statement. It either logs an error
 * message to the console and returns nothing if `allStudents` is not an array, or filters the
 * `allStudents` array based on certain conditions and pushes the filtered items to the
 * `filteredStudents` array.
 */
let databaseCheck =()=>{
  if (!Array.isArray(allStudents)) {
    console.error('allStudents is not an array');
    return;
  }else{
    allStudents.filter((item) => {
          if (item.faculty.includes(faculty.short) && item.department.includes(programe.long) && item.year===parseInt(year)) {
            return filteredStudents.push(item)
          } else {
            return null;
          }
        
    });
  }
}

/**
 * This function sets the faculty state with a short and long value based on the selected option in a
 * dropdown menu.
 */
const handleSelectChange = (event) => {
  setFaculty({
    'short':event.target.value,
    'long':event.target[event.target.selectedIndex].text
});

};

/**
 * This function sets the 'short' and 'long' properties of an object based on the selected value and
 * text of a dropdown menu.
 */
const handlePrograme = (event) => {
  setPrograme({
    'short':event.target.value,
    'long':event.target[event.target.selectedIndex].text
});
  // console.log();
};

/**
 * The function saves student data to a server using a POST request with authorization headers.
 */
let savedata=()=>{
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token} `);

var raw = JSON.stringify({
  
      "fullname":fullname ,
      "faculty": faculty.short,
      "department": programe.long,
      "year":parseInt(year),
      "matNumber": `clu/${year}/${faculty.short.slice(0,2)}/${programe.short}/${(
        filteredStudents.length + 1
      )
        .toString()
        .padStart(3, "0")}`

});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("https://crns2.onrender.com/registerstudent", requestOptions)
  .then(response => response.json())
  .then(result => {
    // console.log(result.success)
    if( result.success === false){
      setStudentRegistedStatus(false)
      return setTimeout(()=>setStudentRegistedStatus(null),5000)
    }else{
      setStudentRegistedStatus(true)
      return setTimeout(()=>setStudentRegistedStatus(null),5000)
    }
  
  })
  .catch(error => console.log('error', error));

}

/**
 * This function resets a form and clears an array of filtered students while also resetting a state
 * variable for fullname.
 */
const handleReset = () => {
  formRef.current.reset();
    filteredStudents.splice(0,filteredStudents.length)
  // console.log(filteredStudents,'empty')
  setFullname('')
};


/**
 * The function `clickBtn` performs several actions including checking a database, saving data, and
 * resetting certain variables.
 */
let clickBtn=()=>{
  databaseCheck()
  // console.log(filteredStudents.length)
  // setMatNumber( `clu/${year}/${faculty.short.slice(0,2)}/${programe.short}/${(
  //   filteredStudents.length + 1
  // )
  //   .toString()
  //   .padStart(3, "0")}`) 
    savedata()
    // console.log(filteredStudents)
    handleReset()
    // console.log(filteredStudents)
}





  if (!!token) {
    return (
      <div
        className="h-screen w-screen flex flex-col "
        style={{ backgroundImage: "url('assets/Header Background 1.png')" }}
      >
        <nav className="ml-6 mt-7 ">
          <span>
            <svg
              className="cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM30 10.5L2 10.5V13.5L30 13.5V10.5Z"
                fill="black"
              />
            </svg>
          </span>
        </nav>
        <div className="m-auto flex flex-col">
          <h1 className="text-center font-extrabold text-5xl mb-24">
            Register Students
          </h1>
          <form
            action=""
            className="flex flex-wrap gap-10 justify-center items-center self-center "
            ref={formRef}
          >
            <span>
              <label htmlFor="">Fullname</label>
              <br />
              <input
                type="text"
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent border-2 border-gray-900 rounded"
                value={fullname}
                onChange={(e)=>{setFullname(e.target.value)}}
              />
            </span>
            <span className="flex flex-col ">
              <label htmlFor="">Faculty</label>
              <select
                name="select1"
                id=""
                onChange={handleSelectChange}
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent border-2 border-gray-900 rounded"
                defaultValue={"Choose Faculty"}
            
              >
                <option value="Choose Faculty" selected disabled>
                  Choose Faculty
                </option>
                <option value="sci">Science</option>
                <option value="sam">SOCIAL AND MANAGEMENT SCIENCES</option>
                <option value="law">Law</option>
                <option value="bms">BASIC MEDICAL SCIENCES</option>
                <option value="hum">HUMANITIES</option>
              </select>
            </span>
            <span className="flex flex-col">
              <label htmlFor="">PROGRAMMES</label>
              <select
                name="select2"
                id=""
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent   border-2 border-gray-900 rounded"
                // value={programe}
                onChange={handlePrograme}
                defaultValue={'PROGRAMMES'}
              >
                {/* <option value="" disabled selected>PROGRAMMES</option> */}
                {faculty.short === "sci" ? (
                  <>
                    <option value="PROGRAMMES" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="csc" ref={programRef}>computer science</option>
                    <option value="cs" ref={programRef}>cyber security</option>
                  </>
                ) : faculty.short === "law" ? (
                  <>
                    <option value="PROGRAMMES" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="law" ref={programRef}>legal studies</option>
                    {/* <option value="">Other Law Options</option> */}
                  </>
                ) : faculty.short === "sam" ? (
                  <>
                    <option value="PROGRAMMES" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="BA" ref={programRef}>business administration</option>
                    <option value="MC" ref={programRef}>mass communication</option>
                  </>
                ) : faculty.short === "bms" ? (
                  <>
                    <option value="PROGRAMMES" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="bms" ref={programRef}>basic medical science</option>
                    {/* <option value="">Other Medical Options</option> */}
                  </>
                ) : faculty.short === "hum" ? (
                  <>
                    <option value="PROGRAMMES" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="HDS" ref={programRef}>history and diplomatic studies</option>
                    <option value="CRS" ref={programRef}>christian religious studies</option>
                  </>
                ) : (
                  <>
                    <option value="PROGRAMMES" disabled selected>
                      PROGRAMMES
                    </option>
                  </>
                )}
              </select>
              {/* <select name="" id="" className='w-[35.5rem]  h-[3.5rem] bg-transparent   border-2 border-gray-900 rounded'     >
                        <option value="" disabled selected>PROGRAMMES</option>
                    <select/> */}
            </span>
            <span className="flex flex-col">
              <label htmlFor="">Year</label>
              <input
                type="date"
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent border-2 border-gray-900 rounded"
                //   value={year}
                onChange={(e) =>
                  setYear(e.target.value.split("-")[0].substr(2, 3))
                }
                  
              />
            </span>
          </form>
          <div className="flex justify-between pt-5 items-center">
            <p className={filteredStudents===[]?'hidden':"translate-x-36 cursor-pointer"} onClick={handleReset}>clear</p>
            <button
            className="bg-black text-white p-3 rounded self-end -translate-x-36  "
            onClick={clickBtn}
          >
            submit
          </button>
          </div>
          { 
            studentRegistedStatus === true ?<Alert content={'User Registered'} errorCheck={true}/>
            :studentRegistedStatus === false ? <Alert content={'Student Name or Matriculation Number Already Exist'} errorCheck={false}/>
            : null
        }
        </div>
      </div>
    );
  }else{
    return (<>
     <Navigate to={'/'} />
    
    </>)
  }
}
