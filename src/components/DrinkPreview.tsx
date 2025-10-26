import { Dialog } from '@/components/retroui/Dialog';

export default function DrinkPreview() {
	return (
		<div className="flex flex-col bg-red-200 w-full h-full justify-around">
			<div className="flex bg-yellow-200 h-[30%] justify-center items-center">
				<h2 className="w-[80%] text-3xl text-center">Drink Name</h2>
				<Dialog>
					<Dialog.Trigger asChild>
						<button className="p-5 ml-auto">Maximize</button>
					</Dialog.Trigger>
					<Dialog.Content>
						<div className="h-[80vh] w-[50vw] bg-white flex">
							<div className="relative h-full w-[40%] bg-gray-200 flex justify-center items-center">
								<div>Drink Image</div>
								<div className="absolute bottom-1 flex justify-around w-full">
									<div>Tag 1</div>
									<div>Tag 2</div>
									<div>Tag 3</div>
								</div>
							</div>
							<div className="w-[60%] overflow-y-auto">
								<div className="flex p-2 pl-5 w-full border-b-2">
									<h2 className="text-2xl">Drink Name</h2>
									<Dialog.Trigger asChild>
										<button className="ml-auto">Minimize</button>
									</Dialog.Trigger>
								</div>
								<ol className="flex flex-col h-full justify-around pl-5">
									<li className="border-2 max-w-fit p-1 px-3">(1) Add Ingredient x</li>
									<li className="border-2 max-w-fit p-1 px-3">(2) Add Ingredient y</li>
									<li className="border-2 max-w-fit p-1 px-3">(3) Shake on ice</li>
									<li className="border-2 max-w-fit p-1 px-3">(4) Filter</li>
									<li className="border-2 max-w-fit p-1 px-3">(5) Serve on z glass</li>
								</ol>
							</div>
						</div>
					</Dialog.Content>
				</Dialog>
			</div>
			<div className="flex h-[40%] bg-purple-200">
				<div className="w-full m-4 flex justify-center items-center bg-gray-200">Drink Image</div>
				<div className="w-full flex justify-center items-center">
					<ul>
						<li>- Style</li>
						<li>- Time</li>
						<li>- Difficulty</li>
						<li>- Rating</li>
					</ul>
				</div>
			</div>
			<div className="flex h-[30%] bg-green-200">
				<div className="w-full flex flex-col items-center justify-center">
					<h3>Ingredients</h3>
					<ul>
						<li>...</li>
						<li>...</li>
						<li>...</li>
					</ul>
				</div>
				<div className="w-full flex flex-col items-center justify-center">
					<h3>Tools</h3>
					<ul>
						<li>...</li>
						<li>...</li>
						<li>...</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
