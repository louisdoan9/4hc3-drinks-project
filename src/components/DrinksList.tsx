import { drinksData } from '@/data';
import { Card } from './retroui/Card';
import type { Dispatch, SetStateAction } from 'react';
import { type Drink } from '@/data';

export default function DrinksList({
	setSelectedDrink,
	textFilter,
	tagFilters,
}: {
	setSelectedDrink: Dispatch<SetStateAction<number | undefined>>;
	textFilter: string;
	tagFilters: string[];
}) {
	const filteredDrinks = drinksData.filter((drink) => {
		// return drink.name.toLowerCase().includes(textFilter.toLowerCase()) && filterDrinks(drink)
		return drink;
	});

	function filterDrinks(drink: Drink) {
		if (!tagFilters || tagFilters.length === 0) return true;

		const availableIngredients = localStorage.getItem('items')
			? JSON.parse(localStorage.getItem('items') ?? '')?.map((x: { item: string; amount: string }) => x)
			: [];

		return tagFilters.every((tag) => {
			if (tag === 'MyBar Ingredients') {
				return drink.ingredients.every((ing) => {
					const found = availableIngredients.find((x: { item: string; amount: string }) => x.item === ing);
					return found && Number(found.amount) > 0;
				});
			}

			return (
				drink.liquor === tag ||
				drink.flavour === tag ||
				drink.strength === tag ||
				drink.colour === tag ||
				drink.style === tag ||
				drink.difficulty === tag
			);
		});
	}

	return (
		<div className="overflow-y-auto p-4 w-full" dir="rtl">
			<div className="flex gap-8 flex-wrap min-h-0" dir="ltr">
				{filteredDrinks.length === 0 && (
					<div className="w-full h-full flex justify-center items-center">
						No drinks match selected filters
					</div>
				)}
				{filteredDrinks.map((drink) => (
					<Card
						onClick={() => setSelectedDrink(drink.id)}
						className="h-[250px] w-[30%] min-w-[150px] relative flex flex-col items-center hover:cursor-pointer overflow-hidden"
					>
						<img
							src={drink.image}
							className="h-full w-full min-h-0 flex justify-center items-center object-cover object-center"
						/>
						<h3 className="absolute bottom-8 left-[50%] translate-[-50%] bg-white/75 rounded-4xl px-2">
							{Array.from({ length: drink.rating }).map(() => '⭐')}
						</h3>
						<Card.Header className="max-h-fit p-2 border-t-2 w-full text-nowrap">
							<h2 className="w-full text-center">{drink.name}</h2>
						</Card.Header>
					</Card>
				))}
			</div>
		</div>
	);
}
