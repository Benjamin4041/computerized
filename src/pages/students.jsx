import { useContext, useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Loader from "../components/loader/loader";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Auth from "../components/auth";
import Pagecontroller from "../components/pageControl";
import PagesContext from "../context/context";
export default function Studentspage2() {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [listOfStudents, setListofStudents] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [displayFilter, setDisplayFilter] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [faculty, setFaculty] = useState();
  const [year, setYear] = useState();
  const [studentDetailDisplay, setStudentDetailDisplay] = useState();
  // let [filterFaculty,setFilterFaculty] = useState([])
  let navigate = useNavigate();
  // const pRef = useRef(null);
  const yearRef = useRef(null);
  const facultyRef = useRef(null);
  const { start, end, setPagesNum, setCurrentPage, setStart } =
    useContext(PagesContext);
  // let token = localStorage.getItem("token")

  /* The `useEffect` hook is making an API call to retrieve a list of students and setting the state
variables `listOfStudents` and `apiData` to the result of the API call. It is also setting the
`Authorization` header of the request with a token retrieved from local storage. The empty array
`[]` passed as the second argument to `useEffect` ensures that the effect only runs once, when the
component mounts. */
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
      .then((result) => {
        setListofStudents(result);
        setApiData(result);
        let n = [...result].length / 10;
        if (!Number.isInteger(n)) {
          return setPagesNum(parseInt(n) + 1);
        }
        return setPagesNum(n);
      })
      .catch((error) => console.log("error", error));
  }, [setPagesNum]);

  /* This `useEffect` hook is watching for changes in the `searchValue` and `apiData` state variables. If
the `searchValue` is an empty string, it sets the `listOfStudents` state variable to the value of
`apiData`. This ensures that the full list of students is displayed when the search input is empty. */
  useEffect(() => {
    if (searchValue === "") {
      setListofStudents(apiData);
    }
  }, [searchValue, apiData]);

  /**
   * The function updates the search value based on user input.
   */
  let getSearch = (e) => {
    setSearchValue(e.target.value);
  };

  /**
   * This function filters a list of students based on a search value.
   * @returns The function `search` is not returning anything. It is either updating the state of
   * `listOfStudents` or displaying an alert message.
   */
  let search = () => {
    if (listOfStudents === "empty") {
      return alert("wait for data");
    }
    if (searchValue.includes("clu/")) {
      setListofStudents(
        listOfStudents.filter((student) =>
          student.matNumber.includes(searchValue)
        )
      );
      setCurrentPage(1);
      setStart(0);
    } else {
      setListofStudents(
        listOfStudents.filter((student) =>
          student.fullname.includes(searchValue)
        )
      );
      setCurrentPage(1);
      setStart(0);
    }
  };

  /**
   * The function toggles the display of a filter option.
   */
  let clickFilter = () => {
    setDisplayFilter(displayFilter ? false : true);
    // console.log(filterOption?filterOption.split(" ").slice(0,2).join(" ")==='By Department':filterOption)
  };

  /**
   * The function handles the department filter option in a React component.
   * @returns The `handleDepartment` function returns the result of calling the `setFilterOption`
   * function with either an empty string or the text content of the `pRef` element, depending on the
   * value of the `filterOption` variable.
   */
  // let handleDepartment = () => {
  //   if (filterOption.split(" ").slice(0, 2).join(" ") === "By Department") {
  //     return setFilterOption("");
  //   }
  //   return setFilterOption(pRef.current.textContent);
  //   // console.log(pRef.current.textContent)
  // };
  /**
   * This function handles the selection of a year filter option.
   * @returns The `handleYear` function returns the result of calling the `setFilterOption` function with
   * either an empty string or the text content of the `yearRef` element, depending on the current value
   * of the `filterOption` state variable.
   */
  let handleYear = () => {
    if (filterOption.split(" ").slice(0, 2).join(" ") === "By Year") {
      return setFilterOption("");
    }
    return setFilterOption(yearRef.current.textContent);
    // console.log(pRef.current.textContent)
  };
  /**
   * This function handles the filtering of options based on faculty selection.
   * @returns The `handleFaculty` function returns `setFilterOption('')` if the first two words of
   * `filterOption` are "By Faculty", and it returns `setFilterOption(facultyRef.current.textContent)`
   * otherwise.
   */
  let handleFaculty = () => {
    if (filterOption.split(" ").slice(0, 2).join(" ") === "By Faculty") {
      return setFilterOption("");
    }
    return setFilterOption(facultyRef.current.textContent);
    // console.log(pRef.current.textContent)
  };

  let selectedFacultyOption = (e) => {
    let checked = e.target.value;
    if (checked === faculty) {
      setFaculty("none");
      return setListofStudents(apiData);
    }
    setFaculty(e.target.value);
    return setListofStudents(
      apiData.filter((item) => item.faculty.includes(e.target.value))
    );
  };

  let selectedYearOption = (e) => {
    let checked = parseInt(e.target.value);
    if (checked === year) {
      setYear("");
      return setListofStudents(apiData);
    }
    setYear(parseInt(e.target.value));
    return setListofStudents(
      apiData.filter((item) => item.year === parseInt(e.target.value))
    );
  };

  return (
    <Auth>
      <div
        className="lg:h-fit min-w-screen min-h-screen lg:pl-10  lg:pr-10 md:min-h-screen lg:pt-20 pt-4 "
        style={{ backgroundImage: "url('assets/Header Background 1.png')" }}
      >
        <IoMdArrowRoundBack
          size={20}
          className=" cursor-pointer"
          onClick={() => navigate("/home")}
        />
        {/* lg:translate-y-28 */}
        <span className="flex justify-center lg:flex-row flex-col items-center lg:gap-36  relative mb-16">
          <h1 className="text-center text-5xl font-bold self-center">
            List Of Students
          </h1>

          {/* search and filter icons */}
          <span className=" flex">
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
                  placeholder="search by name or matnumber"
                  onChange={getSearch}
                />
                <BiSearchAlt
                  size={30}
                  className="absolute left-48 top-1"
                  onClick={search}
                />
              </span>
              <FaFilter
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  clickFilter();
                }}
              />
            </span>
          </span>
        </span>
        {/* filter */}
        <div
          className={
            !displayFilter
              ? "absolute left-[70%] top-52 bg-white z-10  pt-3 rounded hidden"
              : "absolute lg:left-[70%]  left-20 top-26 lg:top-52 bg-white z-10 p-5 pt-3 pb-3 rounded"
          }
        >
          <p
            className="cursor-pointer flex items-center"
            ref={facultyRef}
            onClick={handleFaculty}
          >
            By Faculty <BiChevronDown size={25} />
          </p>
          {/* this is for the faculty */}
          <div
            className={
              filterOption.split(" ").slice(0, 2).join(" ") === "By Faculty"
                ? ""
                : "hidden"
            }
          >
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                value={"sci"}
                id=""
                onClick={selectedFacultyOption}
                checked={faculty === "sci"}
              />
              <p>Sci</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                value={"law"}
                id=""
                onClick={selectedFacultyOption}
                checked={faculty === "law"}
              />
              <p>Law</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                value={"bms"}
                id=""
                onClick={selectedFacultyOption}
                checked={faculty === "bms"}
              />
              <p>BMS</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                value={"sam"}
                id=""
                onClick={selectedFacultyOption}
                checked={faculty === "sam"}
              />
              <p>SAM</p>
            </span>
          </div>

          <p
            className="mt-3 cursor-pointer flex items-center"
            onClick={handleYear}
            ref={yearRef}
          >
            By Year <BiChevronDown size={25} />
          </p>
          {/* this is for the year */}
          <div
            className={
              filterOption.split(" ").slice(0, 2).join(" ") === "By Year"
                ? "flex flex-wrap gap-x-[7rem] "
                : " flex-wrap gap-x-[7rem] hidden"
            }
          >
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                id=""
                value={17}
                onClick={selectedYearOption}
                checked={year === 17}
              />
              <p>2017</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                id=""
                value={18}
                onClick={selectedYearOption}
                checked={year === 18}
              />
              <p>2018</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                id=""
                value={19}
                onClick={selectedYearOption}
                checked={year === 19}
              />
              <p>2019</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                id=""
                value={20}
                onClick={selectedYearOption}
                checked={year === 20}
              />
              <p>2020</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                id=""
                value={21}
                onClick={selectedYearOption}
                checked={year === 21}
              />
              <p>2021</p>
            </span>
            <span className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name=""
                id=""
                value={22}
                onClick={selectedYearOption}
                checked={year === 22}
              />
              <p>2022</p>
            </span>
          </div>

          {/* <p
            className="mt-3 cursor-pointer flex items-center"
            ref={pRef}
            onClick={handleDepartment}
          >
            By Department <BiChevronDown size={25} />
          </p> */}
          {/* this is for the Department */}
          {/* <div
            className={
              filterOption.split(" ").slice(0, 2).join(" ") === "By Department"
                ? ""
                : "hidden"
            }
          >
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
          </div> */}
        </div>
        {/* table */}
        {/* lg:translate-y-56 */}
        <table className=" w-full  lg:block  hidden relative mb-9">
          <tr className="flex lg:justify-between justify-center items-center lg:gap-0 gap-5 mb-3 ">
            <th className="w-1/5 text-center">Name</th>
            <th className="w-1/5 text-center lg:inline hidden">Faculty</th>
            <th className="w-1/5 text-center lg:inline hidden">Department</th>
            <th className="w-1/5 text-center lg:inline hidden">Year</th>
            <th className="w-1/5 text-center">MatNumber</th>
          </tr>
          {listOfStudents[0] === undefined ? (
            <tr className="flex justify-center items-center h-[40vh]">
              <Loader />
            </tr>
          ) : (
            listOfStudents.slice(start, end).map((students) => (
              <tr
                className="flex lg:justify-between lg:gap-0 gap-5  pb-3 cursor-pointer hover:bg-blue-300 justify-center items-center"
                onClick={() => alert(students._id)}
              >
                <td className="w-1/5 text-center first-letter:uppercase">
                  {students.fullname}
                </td>
                <td className="w-1/5 text-center lg:inline hidden">
                  {students.faculty}
                </td>
                <td className="w-1/5 text-center lg:inline hidden">
                  {students.department}
                </td>
                <td className="w-1/5 text-center lg:inline hidden">
                  {students.year}
                </td>
                <td className="w-1/5 text-center">{students.matNumber}</td>
              </tr>
            ))
          )}
        </table>
        {/* mobile view */}
        <div className="lg:hidden xl:hidden inline ">
          {listOfStudents.slice(start, end).map((students, indx) => (
            <>
              <div className="bg-gray-400 mb-3 ">
                <div
                  className="bg-[#EEEFF1] text-black text-center p-3"
                  key={indx}
                  onClick={() => {
                    if (studentDetailDisplay === indx) {
                      return setStudentDetailDisplay();
                    }
                    return setStudentDetailDisplay(indx);
                  }}
                >
                  {students.fullname}
                </div>
                <span
                  className={
                    studentDetailDisplay === indx
                      ? "lg:hidden md:hidden inline "
                      : "hidden"
                  }
                  key={indx}
                >
                  <p className="text-center"> Faculty: {students.faculty}</p>
                  <br />
                  <p className="text-center">
                    {" "}
                    Department: {students.department}
                  </p>
                  <br />
                  <p className="text-center">Year: {students.year}</p>
                  <br />
                  <p className="text-center">
                    Matric Number: {students.matNumber}
                  </p>
                </span>
              </div>
            </>
          ))}
        </div>
        <Pagecontroller />
      </div>
    </Auth>
  );
}
