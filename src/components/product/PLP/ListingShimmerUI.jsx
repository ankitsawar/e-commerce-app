const ListingShimmerUI = () => {

   const cards = () => {
      const eles = [];
      for (let i = 0; i < 9; i++) {
         eles.push(<div className="hover:shadow-lg p-5 flex flex-col h-full w-full  bg-gray-100" key={i + i * 2}>
            <div>
               <div className=" h-[300px] mx-auto object-contain bg-white" ></div>
            </div>
            <div className="mt-6 text-center h-full flex flex-col">
               <div className="flex-auto shrink-0 bg-white">
                  <h2 className="text-md font-medium h-8 w-full"></h2>
               </div>
               <p className="text-base font-normal h-8 w-full bg-white my-4"></p>
            </div>
         </div>)

      }
      return eles;
   }

   return (
      <div className="container mx-auto mt-10 px-[15px]">
         <div>
            <h2 className="text-3xl font-cormorant-garamond font-semibold pb-5 my-5 border-b border-gray-300">Shop</h2>
            <p className="font-mono text-base font-normal text-gray-600 h-8 w-[250px] bg-gray-100"></p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center place-items-center gap-x-4 gap-y-10 mt-10">
               {cards()}

            </div>
         </div>

      </div>
   )
}

export default ListingShimmerUI