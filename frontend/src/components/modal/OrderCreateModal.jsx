function OrderCreateModal() {

    return (
        <>
            <div id="ordersCreate-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

                <div className="relative p-4 w-full max-w-2xl max-h-full z-50">
                    <div className="relative bg-white rounded-lg shadow-sm">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Order Form
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="ordersCreate-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 p-4 md:p-5 space-y-4">
                            <form method="POST">

                                <div className="flex flex-col">
                                    <label className='pl-2 pb-1'>Customer Name</label>
                                    <input type="text" name='customerName' placeholder='John Doe'
                                    className='bg-gray-100 border-2 border-gray-200 p-2 rounded-lg ring-0 focus:outline-none focus:ring-orange-300 focus:border-orange-300 focus:border-2' />
                                </div>

                                <input type="text" className='hidden' name="pizzaName"      value="" />
                                <input type="text" className='hidden' name="pizzaPrice"     value="" />
                                <input type="text" className='hidden' name="pizzaQuantity"  value="1" />
                            </form>
                        </div>

                        <div class="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                            <button data-modal-hide="ordersCreate-modal" type="button" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Order Now</button>
                            <button data-modal-hide="ordersCreate-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Cancel</button>
                        </div>

                    </div>
                </div>

                <div className="absolute top-0 w-full h-full bg-black opacity-20" id="bg_mod"></div>
            </div>
        </>
    )
}

export default OrderCreateModal;