import React from 'react'
import { useEffect, useState } from "react";

export default function Action() {

    const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50;

    const timer = setInterval(() => {
      start += 1;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);
  return (
   <>
   
           <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-bold">
            {count}+
          </h2>

      <p className="font-bold">
        Years of giving
      </p>
    </div>
   
   
   </>
  )
}


export  function Action1() {

    const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 12;

    const timer = setInterval(() => {
      start += 1;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);
  return (
   <>
   
           <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-bold">
            {count}+
          </h2>

      <p className="font-bold">
       Sectors
      </p>
    </div>
   
   
   </>
  )
}




export  function Action2() {

    const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 30;

    const timer = setInterval(() => {
      start += 1;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);
  return (
   <>
   
           <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-bold">
            {count}+
          </h2>

      <p className="font-bold">
          Bridges and tunnels
      </p>
    </div>
   
   
   </>
  )
}




export function Action3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 1000000;

    const timer = setInterval(() => {
      start += 10000;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-2xl font-bold">
        {(count / 1000000).toFixed(1)}M
      </h2>

      <p className="font-bold">
        Projects value
      </p>
    </div>
  );
}



export  function Action4() {

    const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 300;

    const timer = setInterval(() => {
      start += 7;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);
  return (
   <>
   
           <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-bold">
            {count}+
          </h2>

      <p className="font-bold">
          Bridges and tunnels
      </p>
    </div>
   
   
   </>
  )
}



export  function Action5() {

    const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
  const end = 8.2;


    const timer = setInterval(() => {
      start += 1;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);
  return (
   <>
   
           <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-bold">
            {count}+
          </h2>

      <p className="font-bold">
         Bridges and tunnels
      </p>
    </div>
   
   
   </>
  )
}




