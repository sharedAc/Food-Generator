import Image from "next/image";

const RecepieCart = () => {
    return (
        <button className="relative h-[90px] w-[250px]">
             <div className="absolute -right-2 top-0 h-full w-full bg-[#D14D4D] rounded-l-3xl grid grid-cols-12 gap-2 items-center px-5">
                <div className="static col-span-4 h-[55px] w-[55px] aspect-square overflow-hidden bg-gray-300 rounded-full border-2 border-white">
                    <Image
                        className="!static"
                        fill
                        src="https://spoonacular.com/recipeImages/782619-556x370.png"
                        alt="Food"
                        style={{objectFit:"cover"}}
                    />
                </div>
                <div className="col-span-8 text-white font-semibold text-left">
                    AKSJHKAJL
                </div>
            </div>
        </button>
    );
}
 
export default RecepieCart;