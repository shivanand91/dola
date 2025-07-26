export default function Steps() {
    return (
        <div className="flex items-center justify-center flex-col h-screen">

            <h1 className="text-3xl font-semibold text-center mx-auto">How it works</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">Here is the step -by-step process of how our system works. Please follow the steps below to get started.</p>

            <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">1). Create an account</h1>
                        <p className="text-sm">Fill the basics details like name, email, and password to create an account.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                        src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">2). Recharge DOLA Card</h1>
                        <p className="text-sm"> Recharge your DOLA card with the amount you want to use for the transaction. You can use any payment method you prefer like credit card, debit card, bank transfer or upi.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">3). Find Library</h1>
                        <p className="text-sm">Find the library which is near by you scan the digital DOLA card to access the library.</p>

                    </div>
                </div>
            </div>

        </div>
    )
};