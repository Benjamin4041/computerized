import React, { useState } from 'react'
import { createContext } from 'react'

const PagesContext = createContext()


export  function PageProvider({children}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(10)
    const [pagesNum,setPagesNum] = useState()
  return (
    <PagesContext.Provider value={{currentPage,setCurrentPage,start,setStart,end,setEnd,pagesNum,setPagesNum}}>
            {children}
    </PagesContext.Provider>
  )
}

export default PagesContext;