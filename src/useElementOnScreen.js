import { useEffect, useState, useRef } from "react";


export function useElementOnScreen(options, state){
  const [isVisible, setIsVisible] = useState(false)
  const observedElRef = useRef(null)

  function callback (entries, observer){
    const [entry] = entries;
    if(entry.isIntersecting) {
      setIsVisible(true)
      observer.unobserve(entry.target) // Unobserve the element after it becomes visible
    }
  }

  useEffect(() => {
    // create observer obj
    const observer = new IntersectionObserver(callback, options)
    // observe target element
    if (observedElRef.current) {
      observer.observe(observedElRef.current) 
    }
    // cleanup
    return ()=>{if(observedElRef.current) observer.unobserve(observedElRef.current)}
  }, [observedElRef, options, state])

  return [isVisible, observedElRef]
}



