import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { Button } from './retroui/Button';
import { Card } from './retroui/Card';
import { Dialog } from './retroui/Dialog';
import { Input } from './retroui/Input';
import { Select } from './retroui/Select';
import { ingredients, liquors } from '@/data';

type item = { type: string; item: string; amount: number };

export default function MyBarAdd({ x, setX }: { x: number; setX: Dispatch<SetStateAction<number>> }) {
	const [type, setType] = useState<string>();
	const [selected, setSelected] = useState<string>();
	const [amount, setAmount] = useState<number>();

	useEffect(() => {
		setSelected(undefined);
		setAmount(undefined);
	}, [type]);

	return (
		<Dialog
			onOpenChange={() => {
				setType(undefined);
				setSelected(undefined);
				setAmount(undefined);
			}}
		>
			<Dialog.Trigger asChild>
				<Button
					variant={'link'}
					className="text-2xl flex justify-center shadow-2xl border-t-2 bg-amber-300 rounded-b-none"
				>
					Add Item
				</Button>
			</Dialog.Trigger>
			<Dialog.Content className="rounded-xl overflow-auto">
				<Card className="h-[80vh] w-[80vw] max-w-[400px] max-h-[400px] overflow-y-auto bg-white flex flex-col gap-8">
					<Card.Content className="flex flex-col h-full gap-6">
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl">Type</h2>
							<div className="flex justify-around">
								<div className="flex justify-center gap-2">
									<label htmlFor="drink" className="text-xl">
										Drink
									</label>
									<input
										onClick={() => setType('drink')}
										type="radio"
										className="min-w-4 hover:cursor-pointer"
										name="type"
										id="drink"
									/>
								</div>
								<div className="flex justify-center gap-2">
									<label htmlFor="ingredient" className="text-xl">
										Ingredient
									</label>
									<input
										onClick={() => setType('ingredient')}
										type="radio"
										className="min-w-4 hover:cursor-pointer"
										name="type"
										id="ingredient"
									/>
								</div>
							</div>
						</div>

						{type && (
							<div className="flex flex-col flex-1">
								<h2 className="text-2xl">Name</h2>
								<div className="flex flex-col h-full">
									<Select onValueChange={(e) => setSelected(e)} value="filter" defaultValue={'filter'}>
										<Select.Trigger className="mb-3 rounded-lg">
											<Select.Value>{selected ?? 'Select'}</Select.Value>
										</Select.Trigger>
										<Select.Content>
											{type === 'drink' && (
												<Select.Group>
													{liquors.map(
														(liquor) =>
															JSON.parse(localStorage.getItem('items') ?? '[]').filter(
																(x: item) => x.item === liquor
															).length === 0 && (
																<Select.Item className="hover:cursor-pointer" value={liquor}>
																	{liquor}
																</Select.Item>
															)
													)}
												</Select.Group>
											)}
											{type === 'ingredient' && (
												<Select.Group>
													{ingredients.map(
														(ingredient) =>
															JSON.parse(localStorage.getItem('items') ?? '[]').filter(
																(x: item) => x.item === ingredient
															).length === 0 && (
																<Select.Item className="hover:cursor-pointer" value={ingredient}>
																	{ingredient}
																</Select.Item>
															)
													)}
												</Select.Group>
											)}
										</Select.Content>
									</Select>
								</div>
							</div>
						)}

						{type && (
							<div className="flex flex-col mt-auto">
								<h2 className="text-2xl">Amount(mL) / Weight(g)</h2>
								<div className="flex gap-5">
									<Input
										onChange={(e) => setAmount(parseInt(e.target.value))}
										disabled={!type}
										type="number"
										value={amount}
										className="w-full h-[30px] border-2 p-2 rounded-lg"
									/>
								</div>
							</div>
						)}

						{type && (
							<div className="flex justify-around pb-4">
								<Dialog.Trigger>
									<Button variant={'outline'} className="bg-red-400 p-2 px-4">
										Cancel
									</Button>
								</Dialog.Trigger>
								<Dialog.Trigger>
									<Button
										disabled={!selected || amount === undefined}
										onClick={() => {
											return;
											if (localStorage.getItem('items')) {
												const prev = JSON.parse(localStorage.getItem('items') ?? '');
												localStorage.setItem(
													'items',
													JSON.stringify([
														...prev,
														{ type: type, item: selected, amount: amount && amount >= 0 ? amount : 0 },
													])
												);
											} else {
												localStorage.setItem(
													'items',
													JSON.stringify([
														{ type: type, item: selected, amount: amount && amount >= 0 ? amount : 0 },
													])
												);
											}
											setX(x + 1);
										}}
										variant={'outline'}
										className={`bg-green-400 p-2 px-4 ${
											(!selected || amount === undefined) && 'hover:cursor-not-allowed'
										}`}
									>
										Add
									</Button>
								</Dialog.Trigger>
							</div>
						)}
					</Card.Content>
				</Card>
			</Dialog.Content>
		</Dialog>
	);
}
