"use client";

import Button from "@/components/Button/Button";
import { useState } from "react";
import Card from "@/components/Card/Card";
import RootLayout from "@/app/layout";


const Test = () => {
    function handleClick(): void {
        throw new Error("Function not implemented.");
    }

  return (
    <RootLayout>
     <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary '>
    
    <Button onClick={handleClick} variant='primary'>
      Primary Button
    </Button>
    <Button onClick={handleClick} variant='secondary'>
      Secondary Button
    </Button>
    {/* <Button onClick={handleClick} className='bg-blue-500'>
      Custom variant Button
    </Button> */}
    {/* <div>
      <CustomSelect
        options={options}
        onChange={handleChange}
        placeholder='Select an option'
        className='border-red-500 dark:accent-primary' // Example of additional Tailwind classes for customization
      />
    </div> */}
  </main>
    </RootLayout>
  );
};

export default Test;
