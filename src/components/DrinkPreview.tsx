import { Dialog } from '@/components/retroui/Dialog';
import { drinksData } from '@/data';
import { useEffect, useState } from 'react';
import { type Drink } from '@/data';
import { Card } from './retroui/Card';
import { MaximizeIcon } from 'lucide-react';

export default function DrinkPreview({ selectedDrink }: { selectedDrink: number | undefined }) {
	const [drinkData, setDrinkData] = useState<Drink>();

	useEffect(() => {
		if (selectedDrink) {
			const drink = drinksData.filter((x) => x.id === selectedDrink)[0];
			setDrinkData(drink);
		}
	}, [selectedDrink]);

	if (!selectedDrink) {
		return;
	}

	return (
		<Card className="flex flex-col bg-gray-200 w-full h-full overflow-y-auto pt-0 pb-4 hover:shadow-md">
			<Card.Header className="flex flex-row bg-white border-b-2 justify-center items-center">
				<h2 className="w-[80%] text-3xl text-center">{drinkData?.name}</h2>
				<Dialog>
					<Dialog.Trigger asChild>
						<MaximizeIcon className="hover:cursor-pointer" />
					</Dialog.Trigger>
					<Dialog.Content>
						<div className="h-[80vh] w-[50vw] bg-white flex">
							<div className="relative border-r-2 h-full w-[40%] bg-gray-200 flex justify-center items-center">
								<img src={drinkData?.image} className="h-full object-cover object-center" />
								<div className="absolute bottom-1 pb-1 flex justify-around w-full overflow-x-auto">
									<Card className="border-2 p-2">{drinkData?.liquor}</Card>
									<Card className="border-2 p-2">{drinkData?.flavour}</Card>
									<Card className="border-2 p-2">{drinkData?.style}</Card>
								</div>
							</div>
							<div className="w-[60%] h-full overflow-y-auto flex flex-col">
								<div className="flex p-2 pl-5 w-full border-b-2">
									<h2 className="text-2xl">{drinkData?.name}</h2>
									<Dialog.Trigger asChild>
										<MaximizeIcon className="ml-auto my-auto hover:cursor-pointer" />
									</Dialog.Trigger>
								</div>

								<ol className="flex flex-col h-full pl-5 justify-around">
									{drinkData?.steps.map((step, idx) => (
										<li className="max-w-fit">
											<Card className="p-1 px-3">
												{idx + 1}. {step}
											</Card>
										</li>
									))}
								</ol>
							</div>
						</div>
					</Dialog.Content>
				</Dialog>
			</Card.Header>
			<div className="flex flex-1 min-h-0 bg-gray-200">
				<img
					src={drinkData?.image}
					className="flex-1 min-h-0 min-w-0 m-4 object-cover border-2 object-center"
				/>
				<div className="flex-1 flex justify-center items-center">
					<ul className="w-[200px]">
						<li>
							<div className="flex">
								<p className="mr-auto underline">Style:</p>
								<p>{drinkData?.style}</p>
							</div>
						</li>
						<li>
							<div className="flex">
								<p className="mr-auto underline">Time:</p>
								<p>{drinkData?.time}</p>
							</div>
						</li>
						<li>
							<div className="flex">
								<p className="mr-auto underline">Difficulty:</p>
								<p>{drinkData?.difficulty}</p>
							</div>
						</li>
						<li>
							<div className="flex">
								<p className="mr-auto underline">Rating:</p>
								<p>{Array.from({ length: drinkData?.rating ?? 0 }).map(() => '⭐')}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex bg-gray-200 mt-auto">
				<div className="w-full flex flex-col items-center">
					<h3 className="underline">Ingredients</h3>
					<ul className="text-center">
						{drinkData?.ingredients.map((ingredient) => (
							<li>{ingredient}</li>
						))}
					</ul>
				</div>
				<div className="w-full flex flex-col items-center">
					<h3 className="underline">Tools</h3>
					<ul className="text-center">
						{drinkData?.tools.map((tool) => (
							<li>{tool}</li>
						))}
					</ul>
				</div>
			</div>
		</Card>
	);
}
