import React from 'react'
import type { Number } from '../types/types'

interface NavtacProps {
    num1: number;
    num2: number;
}
const Navtac = ({num1, num2}: NavtacProps) => {
    function add(a:number, b:number):number{ // take 2 number concatnate them and add 1 
        const x1 = a.toString()
        const x2 = b.toString()
        const merged = x1 + x2
        return parseInt(merged) + 1;
        // return (a*10 + b) + 1
    }
    function test(a: number, b:number):number{
        // return a +b
        // return a ** b 
        return Math.floor(a / b)
    }
    // function centigradeToFahrenheit(centigrade){
    //     const result = centigrade
    //     return result
    //     }
  return (
    <div>
      {/* Navtac :: {add(num1, num2)} */}
      {/* Navtac :: {test(num1, "abc")} */}
      Navtac :: { test(num1, num2)}


      </div>
  )
}

export default Navtac
