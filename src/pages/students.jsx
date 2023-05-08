import  { useContext, useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Loader from "../components/loader/loader";
import {IoMdArrowRoundBack} from 'react-icons/io'
import {FaFilter} from 'react-icons/fa'
import {BiChevronDown} from 'react-icons/bi'
import {  useNavigate } from "react-router-dom";
import Auth from "../components/auth";
import Pagecontroller from "../components/pageControl";
import PagesContext from "../context/context";
export default function Students() {




  let [displaySearch, setDisplaySearch] = useState(false);
  let [listOfStudents,setListofStudents] = useState('empty')
  let [apiData,setApiData] = useState()
  let [searchValue,setSearchValue] = useState()
  let [displayFilter,setDisplayFilter] = useState(false)
  let [filterOption,setFilterOption] = useState('')
  let navigate = useNavigate()
  const pRef = useRef(null)
  const yearRef = useRef(null)
  const facultyRef = useRef(null)
  const {start,end}= useContext(PagesContext);
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
  let clickFilter=()=>{
    setDisplayFilter(displayFilter?false:true)
    // console.log(filterOption?filterOption.split(" ").slice(0,2).join(" ")==='By Department':filterOption)
  }

  let handleDepartment=()=>{
    if(filterOption.split(" ").slice(0,2).join(" ")==='By Department'){
     return setFilterOption('')
    }
    return setFilterOption(pRef.current.textContent)
    // console.log(pRef.current.textContent)
  }
  let handleYear=()=>{
    if(filterOption.split(" ").slice(0,2).join(" ")==='By Year'){
     return setFilterOption('')
    }
    return setFilterOption(yearRef.current.textContent)
    // console.log(pRef.current.textContent)
  }
  let handleFaculty=()=>{
    if(filterOption.split(" ").slice(0,2).join(" ")==='By Faculty'){
     return setFilterOption('')
    }
    return setFilterOption(facultyRef.current.textContent)
    // console.log(pRef.current.textContent)
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
        <span className="flex gap-6 justify-center items-center">
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
            <FaFilter size={20} className="cursor-pointer" onClick={clickFilter}/>
        </span>
      </span>
      <div className={!displayFilter?"absolute left-[70%] top-52 bg-white z-10  pt-3 rounded hidden":"absolute left-[70%] top-52 bg-white z-10 p-5 pt-3 pb-3 rounded"}>
        <p className="cursor-pointer flex items-center" ref={facultyRef} onClick={handleFaculty}>By Faculty <BiChevronDown size={25}/></p>
        {/* this is for the faculty */}
            <div className={filterOption.split(" ").slice(0,2).join(" ")==='By Faculty'?"":"hidden"}>
              <span className="flex gap-3 cursor-pointer">
                <input type="radio" name="" id="" />
                <p>Sci</p>
              </span>
              <span className="flex gap-3 cursor-pointer">
                <input type="radio" name="" id="" />
                <p>Law</p>
              </span>
              <span className="flex gap-3 cursor-pointer">
                <input type="radio" name="" id="" />
                <p>BMS</p>
              </span>
              <span className="flex gap-3 cursor-pointer">
                <input type="radio" name="" id="" />
                <p>SMS</p>
              </span>
            </div>


            <p className="mt-3 cursor-pointer flex items-center" onClick={handleYear} ref={yearRef}>By Year <BiChevronDown size={25}/></p>
        {/* this is for the year */}
          <div className={filterOption.split(" ").slice(0,2).join(" ")==='By Year'?"flex flex-wrap gap-x-[7rem] ":" flex-wrap gap-x-[7rem] hidden"}>
          <span className="flex gap-3 cursor-pointer">
            <input type="radio" name="" id="" />
            <p>2017</p>
          </span>
          <span className="flex gap-3 cursor-pointer">
            <input type="radio" name="" id="" />
            <p>2018</p>
          </span>
          <span className="flex gap-3 cursor-pointer">
            <input type="radio" name="" id="" />
            <p>2019</p>
          </span>
          <span className="flex gap-3 cursor-pointer">
            <input type="radio" name="" id="" />
            <p>2020</p>
          </span>
          <span className="flex gap-3 cursor-pointer">
            <input type="radio" name="" id="" />
            <p>2021</p>
          </span>
          <span className="flex gap-3 cursor-pointer">
            <input type="radio" name="" id="" />
            <p>2022</p>
          </span>
          </div>


          <p className="mt-3 cursor-pointer flex items-center" ref={pRef} onClick={handleDepartment}>By Department <BiChevronDown size={25}/></p>
        {/* this is for the Department */}
          <div className={filterOption.split(" ").slice(0,2).join(" ")==='By Department'?"":"hidden"}>
        <span>
          <input type="radio" name="" id="" />
          <p></p>
        </span>
        <span>
          <input type="radio" name="" id="" />
          <p></p>
        </span>
        <span>
          <input type="radio" name="" id="" />
          <p></p>
        </span>
        <span>
          <input type="radio" name="" id="" />
          <p></p>
        </span>
          </div>
      </div>
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
          listOfStudents.slice(start,end).map((students) => (
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
      <Pagecontroller />
    </div>
  </Auth>
)  

}
