import { Dialog } from '@/components/retroui/Dialog';
import { drinksData } from '@/data';
import { useEffect, useState } from 'react';
import { type Drink } from '@/data';
import { Card } from './retroui/Card';
import { XCircleIcon } from 'lucide-react';
import { Button } from './retroui/Button';

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
		<Card className="flex flex-col h-full overflow-y-auto mb-auto pt-0 hover:shadow-md min-w-[425px] max-h-[600px] max-[850px]:min-w-0 max-[600px]:max-h-[850px]">
			<Card.Content className="flex p-0 flex-1 max-[850px]:flex-col">
				<div className="flex flex-1 min-w-0 min-h-0 flex-col border-r-2 h-full p-4">
					<h2 className="text-2xl text-center font-bold">{drinkData?.name}</h2>
					<img
						src={drinkData?.image}
						className="flex-1 min-h-0 min-w-0 m-4 max-h-[200px] object-cover border-2 object-center rounded-lg max-[850px]:min-h-[150px]"
					/>
					<div className="flex">
						<ul className="w-[200px]">
							<li>
								<div className="flex">
									<p className="mr-auto underline">Vibe:</p>
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
									<p className="mr-auto underline">Flavour:</p>
									<p>{drinkData?.flavour}</p>
								</div>
							</li>
							<li>
								<div className="flex">
									<p className="mr-auto underline">Strength:</p>
									<p>{drinkData?.strength}</p>
								</div>
							</li>
							<li>
								<div className="flex">
									<p className="mr-auto underline">Colour:</p>
									<p>{drinkData?.colour}</p>
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
				<div className="flex-1 flex items-center justify-around h-full flex-col gap-4 p-4">
					<div className="w-full flex flex-col">
						<h3 className="underline mr-auto font-semibold text-lg">Ingredients</h3>
						<ul className="text-base">
							{drinkData?.ingredients.map((ingredient) => (
								<li>{ingredient}</li>
							))}
						</ul>
					</div>
					<div className="w-full flex flex-col">
						<h3 className="underline mr-auto font-semibold text-lg">Tools</h3>
						<ul className="text-base">
							{drinkData?.tools.map((tool) => (
								<li>{tool}</li>
							))}
						</ul>
					</div>
					<div className="w-full flex flex-col">
						<h3 className="underline font-semibold text-lg">Quick steps</h3>
						<ul className="text-base">
							{drinkData?.steps.map((step, idx) => (
								<li>
									{idx + 1}. {step}
								</li>
							))}
						</ul>
					</div>
					<Dialog>
						<Dialog.Trigger asChild>
							<Button className="ml-auto p-0 text-xs" variant={'link'}>
								See more details
							</Button>
						</Dialog.Trigger>
						<Dialog.Content className="rounded-lg">
							<div className="h-[80vh] w-[80vw] max-w-[800px] max-h-[800px] bg-white flex max-[800px]:flex-col max-[800px]:overflow-y-auto">
								<div className="relative border-r-2 w-full bg-gray-200 flex justify-center items-center max-[800px]:h-[30%] max-[800px]:min-h-[150px]">
									<img src={drinkData?.image} className="h-full w-full object-cover object-center" />
									<div className="absolute bottom-1 pb-1 flex justify-around w-full overflow-x-auto">
										<Card className="border-2 p-2">{drinkData?.liquor}</Card>
										<Card className="border-2 p-2">{drinkData?.flavour}</Card>
										<Card className="border-2 p-2">{drinkData?.style}</Card>
									</div>
								</div>
								<div className="min-[800px]:overflow-y-auto w-full flex flex-col">
									<div className="flex p-2 pl-5 w-full border-b-2">
										<h2 className="text-2xl font-semibold">{drinkData?.name}</h2>
										<Dialog.Trigger asChild>
											<XCircleIcon className="ml-auto my-auto hover:cursor-pointer" />
										</Dialog.Trigger>
									</div>

									<ol className="flex flex-col justify-around p-4 gap-6">
										{drinkData?.detailed_steps.map((step, idx) => (
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
				</div>
			</Card.Content>
		</Card>
	);
}
