
export default function Card({title,im,price}) {
    return (
        <div className="d">
            <h2>{title}</h2>
            <img src={im} alt="" />
            <span>${price}</span>
            <button className="bt">buy now</button>
        </div>
    )
}
