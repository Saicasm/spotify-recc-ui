"use client";

import { useState } from "react";

export default function Home() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (value: any) => {
    setSelectedOption(value);
  };
  const handleClick = () => {
    console.log("Button clicked!");
  };
  //TODO: Finish landing page 
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary bg-opacity-90'>
    </main>
  );
}
