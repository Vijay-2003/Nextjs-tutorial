import Image from "next/image"
import Link from "next/link"

const Card = ({id, title, price, category, thumbnail }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <Image height={160} width={60} src={thumbnail} className="card-img-top" alt="Picture" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text">{category}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <Link className="btn btn-outline-primary" href={`/blog/${id}`}>Check Details</Link>
            </div>
        </div>
    )
}

export default Card