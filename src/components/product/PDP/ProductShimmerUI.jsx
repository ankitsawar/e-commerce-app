const ProductShimmerUI = () => {
   return (
      <div className="">
         <div className="container mx-auto pt-10 px-[15px] py-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="h-[300px] md:h-[400px] lg:h-[500px] w-[70%] mx-auto  bg-gray-200 rounded">
               </div>
               <div>
                  <h2 className="text-3xl font-bold mb-3 w-[full] h-[30px] bg-gray-200 rounded"></h2>
                  <p className="text-2xl font-semibold mb-3 w-12 h-[20px] bg-gray-200 rounded"></p>
                  <p className="text-lg font-normal mb-4 w-[full] h-[150px] md:h-[250px] bg-gray-200 rounded"></p>
                  <div className="py-5 w-[full] ">
                     <div className='h-[40px] w-[200px] bg-gray-200 rounded'></div>
                  </div>
                  <button className="transition linear delay-450 bg-gray-200 w-full h-[40px] rounded" ></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductShimmerUI;