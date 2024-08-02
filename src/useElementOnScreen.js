import { useEffect, useState, useRef } from "react";


export function useElementOnScreen(options){
  const [isVisible, setIsVisible] = useState(false)
  const observedElRef = useRef(null)

  function callback (entries){
    const [entry] = entries;
    setIsVisible(entry.isIntersecting)
  }
  
  useEffect(() => {
    // create observer obj
    const observer = new IntersectionObserver(callback, options)
    // observe target element
    if (observedElRef.current) observer.observe(observedElRef.current)
    // cleanup
    return ()=>{if(observedElRef.current) observer.unobserve(observedElRef.current)}
  }, [observedElRef, options])

  return [isVisible, observedElRef]
}