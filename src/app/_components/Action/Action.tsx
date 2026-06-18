"use client";

import React from 'react'
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";

export default function Action() {

  const { lang } = useLanguage();

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
        {t("action.years", lang)}
      </p>
    </div>
   
   
   </>
  )
}


export  function Action1() {
    const { lang } = useLanguage();
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
        {t("action.sectors", lang)}
      </p>
    </div>
   
   
   </>
  )
}




export  function Action2() {
const { lang } = useLanguage();
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
          {t("action.bridgesTunnels", lang)}
      </p>
    </div>
   
   
   </>
  )
}




export function Action3() {
  const { lang } = useLanguage();
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
        {t("action.projectsValue", lang)}
      </p>
    </div>
  );
}



export  function Action4() {
const { lang } = useLanguage();
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
          {t("action.bridgesTunnels", lang)}
      </p>
    </div>
   
   
   </>
  )
}



export  function Action5() {
  const { lang } = useLanguage();
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
         {t("action.bridgesTunnels", lang)}
      </p>
    </div>
   
   
   </>
  )
}




