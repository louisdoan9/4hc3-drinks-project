import { Dialog } from './retroui/Dialog';

export default function MyBar({ setView }) {
	return (
		<>
			<nav className="flex h-[75px] bg-red-200">
				<div className="w-[60%] flex justify-around items-center ">
					<button className="border-2 mr-auto ml-2 p-2" onClick={() => setView('home')}>
						Home
					</button>
				</div>
			</nav>

			<section className="h-full flex flex-col bg-yellow-200">
				<div className="flex flex-col min-h-0 bg-pink-200 h-full p-4">
					<h2 className="text-2xl">Drinks</h2>
					<div className="flex gap-8 overflow-x-auto p-2 min-h-0 overflow-y-hidden">
						{Array.from({ length: 4 }).map(() => (
							<div className="h-[150px] w-[150px] min-w-[150px] relative flex flex-col bg-blue-200 p-1">
								<div className="flex justify-center">
									<h2>Name</h2>
									<h2 className="ml-auto">Edit</h2>
								</div>

								<div className="h-full w-[80%] m-auto bg-gray-300 flex justify-center items-center">
									(Image)
								</div>
								<h3 className="text-center">mL Left</h3>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col min-h-0 bg-green-200 h-full p-4">
					<h2 className="text-2xl">Ingredients</h2>
					<div className="flex gap-8 overflow-x-auto p-2 min-h-0 overflow-y-hidden">
						{Array.from({ length: 6 }).map(() => (
							<div className="h-[150px] w-[150px] min-w-[150px] relative flex flex-col bg-blue-200 p-1">
								<div className="flex justify-center">
									<h2>Name</h2>
									<h2 className="ml-auto">Edit</h2>
								</div>

								<div className="h-full w-[80%] m-auto bg-gray-300 flex justify-center items-center">
									(Image)
								</div>
								<h3 className="text-center">g Left</h3>
							</div>
						))}
					</div>
				</div>
			</section>
			<Dialog>
				<Dialog.Trigger asChild>
					<button className="text-2xl text-center">Add Item</button>
				</Dialog.Trigger>
				<Dialog.Content>
					<div className="h-[80vh] w-[40vw] bg-white flex flex-col p-4 gap-8">
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl">Type</h2>
							<div className="flex justify-around">
								<div className="flex justify-center gap-1">
									<label htmlFor="drink">Drink</label>
									<input type="radio" name="type" id="drink" />
								</div>
								<div className="flex justify-center gap-1">
									<label htmlFor="ingredient">Ingredient</label>
									<input type="radio" name="type" id="ingredient" />
								</div>
							</div>
						</div>

						<div className="flex flex-col h-full">
							<h2 className="text-2xl">Name</h2>
							<div className="flex flex-col h-full">
								<input type="text" className="w-full h-[30px] border-2 p-2" />
								<div className="text-center border-2 border-t-0 h-full flex justify-center items-center">
									Suggestions based on input
								</div>
							</div>
						</div>

						<div className="flex flex-col mt-auto">
							<h2 className="text-2xl">Amount/Weight(g)</h2>
							<div className="flex gap-5">
								<input type="number" className="w-full h-[30px] border-2 p-2" />
							</div>
						</div>

						<div className="flex justify-around">
							<Dialog.Trigger>
								<button className="bg-red-400 p-2 px-4">Cancel</button>
							</Dialog.Trigger>
							<Dialog.Trigger>
								<button className="bg-green-400 p-2 px-4">Add</button>
							</Dialog.Trigger>
						</div>
					</div>
				</Dialog.Content>
			</Dialog>
		</>
	);
}
