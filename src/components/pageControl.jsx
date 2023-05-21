import { useContext, useEffect, useState } from "react";
import PagesContext from "../context/context";

export default function Pagecontroller() {
  const [pages,setPages] = useState(["1", "2", "3"]);
  
//   const [currentPage, setCurrentPage] = useState("1");
    const {currentPage,setCurrentPage,setStart,setEnd,pagesNum} = useContext(PagesContext);
      
  useEffect(()=>{
    let pageIncrement = (pageNum) => {
      let lastVal = pages.length;
      if (lastVal === pagesNum) {
        console.log("Pagination OK");
        // console.log(arr);
      } else {
        pages.push(lastVal + 1);
      }
    };
    
    for (let i = pages.length; i <= pagesNum; i++) {
      pageIncrement(pagesNum);
    }
    
    setPages( pages.map((item) => {
      return item.toString();
    }))
  },[pagesNum,pages])

    let next=()=>{
      if(currentPage===pagesNum){
        setCurrentPage((prev) => prev - 1)
        setStart((prev) => prev - 10)
      }
      setCurrentPage((prev)=>prev + 1)
      setStart((prev)=>prev + 10)
    }
    let previous = () => {
        if(currentPage>1){
          setCurrentPage((prev) => prev - 1)
          setStart((prev) => prev - 10)
        }
    }
    let numberClick=(e)=>{
      setStart((e.target.textContent - 1) * 10)
      setCurrentPage(~~e.target.textContent)
       
    }
    useEffect(() => {
        setEnd(currentPage * 10)
        // console.log({ start, end, currentPage })
    }, [currentPage,setEnd])
    return (
      // lg:mt-12 lg:translate-y-52
     <div className="max-w-screen-xl mx-auto  px-4  text-gray-600 md:px-8 ">
        <div
          className="hidden items-center justify-between sm:flex"
          aria-label="Pagination"
        >
          <div
            // href="javascript:void(0)"
            className="hover:text-indigo-600 flex items-center gap-x-2 cursor-pointer"
            onClick={previous}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </div>
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
              <li key={item} className="text-sm">
                {item === "..." ? (
                  <div>{item}</div>
                ) : (
                  <div
                    // href="javascript:void(0)"
                    aria-current={currentPage === item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer ${
                      currentPage === ~~item
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : ""
                    }`}
                  onClick={numberClick}>
                    {item}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div
            // href="javascript:void(0)"
            className="hover:text-indigo-600 flex items-center gap-x-2 cursor-pointer"

            onClick={next}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* On mobile version */}
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
          <div
            // href="javascript:void(0)"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 cursor-pointer"
            onClick={previous}
          >
            Previous
          </div>
          <div className="font-medium">
            Page {currentPage} of {pagesNum}
          </div>
          <div
            // href="javascript:void(0)"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
            onClick={next}
          >
            Next
          </div>
        </div>
      </div>
  )
}
