
const ProductCard=({image,title})=>{
    return (
        <div className="w-[300px] h-[300px]bg-gray-200 m-2 p-2 flex flex-col items-center justify-center border-blue-50 border-2 ">
            <img src={image} alt={title}/>
            <span>{title}</span>
        </div>
    )
}

export default ProductCard;