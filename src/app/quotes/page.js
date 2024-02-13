'use client'
import React from 'react'
import { useEffect, useState } from 'react'

const fetchquotes = async () => {
    let quotes = await fetch('https://dummyjson.com/quotes')
    quotes = await quotes.json();
    return quotes.quotes;
} 

const Quotes = async () => {
    let Quotes = await fetchquotes();

  return (
    <div style={{textAlign:'center'}}>
        <div>
            <h2>Quotes</h2>
        </div>
        {
            Quotes.map((q) => {
                return (
                    <div key={q.id}>
                        <h3>Quote: {q.quote}</h3>
                        <h4>Author: {q.author}</h4>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Quotes