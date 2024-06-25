const CartShimmerUI = () => {
   const renderCart = () => {
      const eles = [];
      for (let i = 0; i < 3; i++) {
         eles.push(<div key={`key-${i}`} className='flex justify-between items-center border-b border-gray-200 py-4'>
            <div className='flex items-center gap-5'>
               <div className='w-[150px] h-[150px] bg-gray-300 rounded-md'></div>
               <div>
                  <div className='bg-gray-300 w-[200px] h-[20px] my-2 rounded'></div>
                  <div className='bg-gray-300 w-[200px] h-[20px] rounded'></div>
               </div>
            </div>
            <div className='flex items-center'>
               <button className='px-4 bg-gray-300 w-[20px] h-[20px] rounded'></button>
               <button className='px-4 bg-gray-300 w-[20px] h-20px] rounded' ></button>
            </div>
         </div>)
      }
      return eles;
   }
   return (
      <div className="container mx-auto px-[15px] py-12">
         <h2 className=" bg-gray-300 w-[300px] h-[30px] rounded my-5"></h2>
         <div className='border-t border-gray-200'>
            {renderCart()}
         </div>
      </div>
   )
}

export default CartShimmerUI;