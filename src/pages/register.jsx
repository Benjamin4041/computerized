import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  let [faculty, setFaculty] = useState();
  let [savedStudents, setSavedStudents] = useState([]);
  let navigate = useNavigate();
  let [studentName, setStudentName] = useState("");
  let [programe, setPrograme] = useState("");
  let [profile, setProfile] = useState({});
  let [year, setYear] = useState("");
  let token = localStorage.getItem("token")
  useEffect(() => {
    const matNumber = `CLU/${year}/${faculty}/${programe}/${(
      savedStudents.length + 1
    )
      .toString()
      .padStart(2, "0")}`;
    setProfile({
      studentName: studentName,
      faculty: faculty,
      programe: programe,
      matNumber: matNumber,
    });
    console.log(savedStudents);
  }, [savedStudents, year, faculty, programe, studentName]);

  const createMatNumber = () => {
    setSavedStudents([...savedStudents, profile]);
  };
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
          >
            <span>
              <label htmlFor="">Fullname</label>
              <br />
              <input
                type="text"
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent border-2 border-gray-900 rounded"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </span>
            <span className="flex flex-col ">
              <label htmlFor="">Faculty</label>
              <select
                name=""
                id=""
                value={faculty}
                onChange={(e) => {
                  setFaculty(e.target.value);
                }}
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent border-2 border-gray-900 rounded"
              >
                <option value="" selected disabled>
                  Choose Faculty
                </option>
                <option value="Sci">Science</option>
                <option value="Law">Law</option>
                <option value="SAM"> SOCIAL AND MANAGEMENT SCIENCES</option>
                <option value="BMS">BASIC MEDICAL SCIENCES</option>
                <option value="Hum">HUMANITIES</option>
              </select>
            </span>
            <span className="flex flex-col">
              <label htmlFor="">PROGRAMMES</label>
              <select
                name=""
                id=""
                className="lg:w-[35.5rem]  lg:h-[3.5rem] bg-transparent   border-2 border-gray-900 rounded"
                value={programe}
                onChange={(e) => setPrograme(e.target.value)}
              >
                {/* <option value="" disabled selected>PROGRAMMES</option> */}
                {faculty === "Sci" ? (
                  <>
                    <option value="" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="CSC">Computer Science</option>
                    <option value="CS">Cyber Security</option>
                  </>
                ) : faculty === "Law" ? (
                  <>
                    <option value="" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="LW">Legal Studies</option>
                    <option value="">Other Law Options</option>
                  </>
                ) : faculty === "SAM" ? (
                  <>
                    <option value="" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="BA">Business Administration</option>
                    <option value="MC">Mass Communication</option>
                  </>
                ) : faculty === "BMS" ? (
                  <>
                    <option value="" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="BMC">Basic Medical Science</option>
                    <option value="">Other Medical Options</option>
                  </>
                ) : faculty === "Hum" ? (
                  <>
                    <option value="" disabled selected>
                      PROGRAMMES
                    </option>
                    <option value="HDS">History and Diplomatic Studies</option>
                    <option value="CRS">Christian Religious Studies</option>
                  </>
                ) : (
                  <>
                    <option value="" disabled selected>
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
          <button
            className="bg-black text-white p-3 rounded self-end -translate-x-36 mt-4"
            onClick={createMatNumber}
          >
            submit
          </button>

          {savedStudents.map((items) => {
            return (
              <>
                <p className="text-black text-2xl">{items.matNumber}</p>
              </>
            );
          })}
        </div>
      </div>
    );
  }else{
    return (<>
     <Navigate to={'/'} />
    
    </>)
  }
}
