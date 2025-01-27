// import search from "/assets/searchicon.png"
import search from "/assets/searchicon.png"
import image2 from '/assets/image (4).png'
import image5 from "/assets/image (5).png"
import flame from "/assets/flame.png"
import optical from "/assets/optical.png"
import plasticizer from "/assets/plasticizer.png"
import bowl from "/assets/HINDERED_AMINE LIGHT_STABILIZERS_(HALS).png"
import pigment from "/assets/pigment.png"
import polymers from "/assets/product8.png"
import polymersadds from "/assets/Plastic_Additives_430C_647x3291.png"
import antiblock from "/assets/antiblock.png"
import nucleacting from "/assets/homecarei3.png"
import mast from "/assets/mast.png"


function Categories() {
    return (
        <div>
            <div className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-repeat bg-cover bg-center"
                style={{ backgroundImage: `url('../../../../public/assets/image.jpeg')` }}>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#023B3B] to-[#023B3B] opacity-80 rounded-xl"></div>
                {/* Boxes */}
                <div className="flex flex-col gap-2">
                    <div className="absolute w-48 h-36 bottom-[-40px] left-[-40px] border-white border-[1px] rounded-3xl"></div>
                    <div className="absolute w-36 bottom-[-70px] left-[-35px] h-36 border-white border-opacity-[17%] border-[1px] rounded-3xl"></div>
                </div>
                <div className="flex flex-col justify-center items-center p-24 gap-4 relative z-10">
                    <p className="text-[#8AA823] text-md">Select the categories</p>
                    <h3 className="text-4xl text-white">Chemical Categories</h3>
                    <div className="p-1 w-2/4 flex justify-between bg-white rounded-3xl ">
                        <input type="text" placeholder="Search Here" className="bg-transparent ml-4 outline-none text-[#8AA823]" />
                        <div className="bg-[#8AA823] p-2 rounded-full">
                            <img src={search} alt="searchIcon" className="w-6" />
                        </div>
                    </div>
                    <p className="text-white text-sm pt-4">Search products by segments, applications, CAS number etc.</p>
                </div>
            </div>

            <div className="flex flex-col text-center p-10 pl-72 pr-72">
                <p className="text-[#8AA823] text-xl font-medium">ICG offers a wide range of products and solutions designed for enterprises and we deliver
                    the products across middle east and Asia.
                </p>
                <h3 className="text-3xl p-5 font-bold">Select the Category</h3>
            </div>

            <div className="flex flex-col w-11/12 m-auto gap-10 pb-10 items-center gap-20">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-20">
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={image2} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Antioxidants (AN)</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={image5} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">UV-Absorber</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={flame} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Flame Retardants</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={optical} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Optical Bightners</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-20" >
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={pigment} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Pigments and Dyes</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={bowl} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">HINDERED
                            aMINE LIGHT
                            STABILIZERS
                            (hALS)</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={antiblock} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Antiblocks</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={polymers} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Polymers and Resins</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-20" >
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={plasticizer} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Plasticizers</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={nucleacting} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Nucleacting Agents</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={polymersadds} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Ploymer Processing Additives</p>
                    </div>
                    <div className="shadow-md rounded-xl w-[296px]">
                        <div className="w-[296px] h-[200px] rounded-b-none overflow-hidden">
                            <img src={mast} alt="image-2" />
                        </div>
                        <p className="p-4 pb-12 font-medium">Masterbatcher</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
