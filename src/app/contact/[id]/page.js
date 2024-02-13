'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';

const Contactdetail = ({params}) => {
    const searchparams = useSearchParams();
    const {id} = params;
    const name = searchparams.get('name');
    const age = searchparams.get('age');
    console.log(id);
    console.log(name);
    console.log(age);
  return (
    <div>Contactdetail</div>
  )
}

export default Contactdetail