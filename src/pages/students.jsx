import  { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Loader from "../components/loader/loader";
import {IoMdArrowRoundBack} from 'react-icons/io'
import {  useNavigate } from "react-router-dom";
import Auth from "../components/auth";
export default function Students() {
  let [displaySearch, setDisplaySearch] = useState(false);
  let [listOfStudents,setListofStudents] = useState('empty')
  let [apiData,setApiData] = useState()
  let [searchValue,setSearchValue] = useState()
  let navigate = useNavigate()
  // let token = localStorage.getItem("token")
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
        setListofStudents(result)
        setApiData(result)
        return console.log(result)

      } )
      .catch((error) => console.log("error", error));
  },[]);
    useEffect(()=>{
      if(searchValue===''){
        setListofStudents(apiData)
      }
    },[searchValue,apiData])
  let getSearch=(e)=>{
    setSearchValue(e.target.value)
  }
  let search =()=>{
    if(listOfStudents==='empty'){
      return alert("wait for data")
    }
    if(searchValue.includes("clu/")){
      setListofStudents(listOfStudents.filter(student => student.matNumber.includes(searchValue)))
    }else{
      setListofStudents(listOfStudents.filter(student => student.fullname.includes(searchValue)))
    }
    
  }  
return(
  <Auth>
     <div
      className="min-h-screen w-screen pl-10 pr-10"
      style={{ backgroundImage: "url('assets/Header Background 1.png')" }}
    >
      <IoMdArrowRoundBack size={20} className="translate-y-24 cursor-pointer" onClick={()=>navigate('/home')} />
      <span className="flex justify-center items-center gap-36 translate-y-28 relative">
        <h1 className="text-center text-5xl font-bold self-center">
          List Of Students
        </h1>

        <BiSearchAlt
          size={30}
          className={displaySearch ? "hidden" : "cursor-pointer"}
          onClick={() => setDisplaySearch(true)}
        />
        <span className={displaySearch ? "flex relative" : "hidden"}>
          <input
            type="text"
            name=""
            id=""
            className="bg-slate-500 text-white pl-2 pr-10 rounded  h-10"
            value={searchValue}
            placeholder="search by name"
            onChange={getSearch}
          />
          <BiSearchAlt size={30} className="absolute left-48 top-1" onClick={search} />
        </span>
      </span>
      <table className="translate-y-56 w-full">
        <tr className="flex justify-between mb-3 ">
          <th className="w-1/5 text-center">Name</th>
          <th className="w-1/5 text-center">Faculty</th>
          <th className="w-1/5 text-center">Department</th>
          <th className="w-1/5 text-center">Year</th>
          <th className="w-1/5 text-center">MatNumber</th>
        </tr>
        {
          listOfStudents==='empty'?
          <div className="flex justify-center items-center h-[40vh]">
              <Loader/>
          </div>
          :
          listOfStudents.map((students) => (
            <tr className="flex justify-between pb-3 cursor-pointer hover:bg-blue-300" onClick={()=>alert(students._id)}>
            <td className="w-1/5 text-center first-letter:uppercase">{students.fullname}</td>
            <td className="w-1/5 text-center">{students.faculty}</td>
            <td className="w-1/5 text-center">{students.department}</td>
            <td className="w-1/5 text-center">{students.year}</td>
            <td className="w-1/5 text-center">{students.matNumber}</td>
          </tr>
          ))
        }
      </table>
    </div>
  </Auth>
)  

}
