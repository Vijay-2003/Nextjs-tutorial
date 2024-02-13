import styles from './blog.module.css'
import Card from '../components/Card'

const fetchproducts = async () => {
  const response = await fetch('https://dummyjson.com/products', {cache: 'no-store'});
  if(!response.ok){
    throw new Error('API CALL FAILED DUE TO UNKNOWN REASON')
  }
  return response.json();
}

const Blog = async () => {
  const productsdata = await fetchproducts();
  // console.log(productsdata);
  const products = productsdata.products;
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <h2 className={`${styles.textColor} my-4`}>Blog</h2>
      <div className='row'>
        {
          products.map((item) =>
            <div className='col-lg-4 mb-4' key={item.id}>
              <Card id={item.id} title={item.title} price={item.price} category={item.category} thumbnail={item.thumbnail} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Blog