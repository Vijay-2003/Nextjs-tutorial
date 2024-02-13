import Image from 'next/image';
import React from 'react'

const fetchprdetail = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  return response.json();
}

const Blogdetail = async ({ params }) => {
  const { id } = params;
  // console.log(id);
  const datadetail = await fetchprdetail(id);
  // console.log(datadetail);
  return (
    <div style={{textAlign:'center', marginTop:'2rem'}} classname="mt-3 container d-flex flex-column justify-content-center align-items-center">
  <div classname="card">
    <div classname="card-body">
      <Image src={datadetail.images[0]} width={400} height={400} alt='pic' />
      <h2>{datadetail.title}</h2>
      <p>{datadetail.description}</p>
    </div>
  </div>
</div>
  )
}

export default Blogdetail