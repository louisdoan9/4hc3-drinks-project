import { useEffect, useState } from 'react';
import { Button } from './retroui/Button';
import { Card } from './retroui/Card';
import { Dialog } from './retroui/Dialog';
import { Input } from './retroui/Input';
import { Select } from './retroui/Select';
import { ingredients, liquors } from '@/data';

export default function MyBarAdd({ x, setX }) {
	const [type, setType] = useState<string>();
	const [selected, setSelected] = useState<string>();
	const [amount, setAmount] = useState<string>();

	useEffect(() => {
		setSelected(undefined);
		setAmount('');
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
				<Button variant={'link'} className="text-2xl flex justify-center shadow-2xl border-t-2 bg-gray-200">
					Add Item
				</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Card className="h-fit w-[40vw] bg-white flex flex-col gap-8">
					<Card.Content className="p-4 flex flex-col h-full gap-6">
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl">Type</h2>
							<div className="flex justify-around">
								<div className="flex justify-center gap-2">
									<label htmlFor="drink">Drink</label>
									<input
										onClick={() => setType('drink')}
										type="radio"
										className="min-w-4 hover:cursor-pointer"
										name="type"
										id="drink"
									/>
								</div>
								<div className="flex justify-center gap-2">
									<label htmlFor="ingredient">Ingredient</label>
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
										<Select.Trigger className="mb-3">
											<Select.Value>{selected ?? 'Select'}</Select.Value>
										</Select.Trigger>
										<Select.Content>
											{type === 'drink' && (
												<Select.Group>
													{liquors.map(
														(liquor) =>
															JSON.parse(localStorage.getItem('items') ?? '[]').filter(
																(x) => x.item === liquor
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
																(x) => x.item === ingredient
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
										onChange={(e) => setAmount(e.target.value)}
										disabled={!type}
										type="number"
										value={amount}
										className="w-full h-[30px] border-2 p-2"
									/>
								</div>
							</div>
						)}

						{type && (
							<div className="flex justify-around">
								<Dialog.Trigger>
									<Button variant={'outline'} className="bg-red-400 p-2 px-4">
										Cancel
									</Button>
								</Dialog.Trigger>
								<Dialog.Trigger>
									<Button
										disabled={!selected || !amount}
										onClick={() => {
											if (localStorage.getItem('items')) {
												const prev = JSON.parse(localStorage.getItem('items') ?? '');
												localStorage.setItem(
													'items',
													JSON.stringify([...prev, { type: type, item: selected, amount: amount }])
												);
											} else {
												localStorage.setItem(
													'items',
													JSON.stringify([{ type: type, item: selected, amount: amount }])
												);
											}
											setX(x + 1);
										}}
										variant={'outline'}
										className={`bg-green-400 p-2 px-4 ${
											(!selected || !amount) && 'hover:cursor-not-allowed'
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
