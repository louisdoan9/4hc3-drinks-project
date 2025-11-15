import { useState, type Dispatch, type SetStateAction } from 'react';
import MyBarAdd from './MyBarAdd';
import { Button } from './retroui/Button';
import { Card } from './retroui/Card';
import { Dialog } from './retroui/Dialog';
import { Input } from './retroui/Input';

type item = { type: string; item: string; amount: number };

export default function MyBar({ setView }: { setView: Dispatch<SetStateAction<string>> }) {
	const [amount, setAmount] = useState<number>();
	const [x, setX] = useState(0);

	function getImages(item: string) {
		if (item === 'Vodka') {
			return 'https://www.saq.com/media/catalog/product/1/1/110056-1_1642110633.png?optimize=high&fit=bounds&height=&width=&format=jpeg';
		} else if (item === 'Tequila') {
			return 'https://www.everythingwine.ca/media/catalog/product/1/8/183883_el-tequileno-blanco-tequila-750-ml.gif?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700';
		} else if (item === 'Gin') {
			return 'https://aem.lcbo.com/content/dam/lcbo/products/2/1/6/7/216721.jpg.thumb.1280.1280.jpg';
		} else if (item === 'Lime juice') {
			return 'https://m.media-amazon.com/images/I/71UEmVKXU1L.jpg';
		} else if (item === 'Simple syrup') {
			return 'https://i5.walmartimages.com/asr/3ac640d5-04a7-4d60-bcc0-8a62194306b9.33ef50ec9b0121fd419f91095ed254d3.jpeg';
		} else if (item === 'Soda water') {
			return 'https://shoptoronto.eataly.ca/cdn/shop/products/wfv07YX_e1a3cfb0-433d-4802-bd44-93d2c80a544c_1000x.jpg?v=1625672423';
		} else if (item === 'Mint') {
			return 'https://bfasset.costco-static.com/U447IH35/as/5h4zn6p7cc3gjjw9jgm5pw/1275752__1psd?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200';
		} else if (item === 'Ice') {
			return 'https://www.snexplores.org/wp-content/uploads/2019/11/860_cold_colder_coldest_ice.png';
		}
	}

	return (
		<>
			<nav className="flex h-[75px] mt-4">
				<div className="w-[60%] flex justify-around items-center">
					<Button className="border-2 mr-auto ml-2 p-2" onClick={() => setView('home')}>
						Home
					</Button>
				</div>
			</nav>

			{JSON.parse(localStorage.getItem('items') ?? '[]').length === 0 ? (
				<div className="w-full h-full flex justify-center items-center">
					No items added yet. Press "Add Item" to get started.
				</div>
			) : (
				<section className="h-full flex flex-col min-h-[400px]" key={x}>
					<div className="flex flex-col min-h-0 h-full px-4 py-4">
						<h2 className="text-2xl">Drinks</h2>
						<div className="h-full flex gap-8 overflow-x-auto p-2 min-h-0 overflow-y-hidden">
							{JSON.parse(localStorage.getItem('items') ?? '[]')?.map(
								(item: item) =>
									item.type === 'drink' && (
										<Card className="h-full max-h-[200px] w-[175px] min-w-[150px] relative flex flex-col pt-1 pb-0">
											<div className="flex justify-center border-b-2 px-2">
												<h2>{item.item}</h2>
												<Dialog onOpenChange={() => setAmount(undefined)}>
													<Dialog.Trigger asChild>
														<Button variant={'link'} className="ml-auto p-0">
															Edit
														</Button>
													</Dialog.Trigger>
													<Dialog.Content className="rounded-xl overflow-auto">
														<Card className="h-[80vh] w-[80vw] max-w-[400px] max-h-[200px] overflow-y-auto bg-white flex flex-col gap-8">
															<Card.Content className="p-4 flex flex-col h-full gap-6 justify-center items-center">
																<div className="flex flex-col">
																	<h2 className="text-2xl">Amount(mL)</h2>
																	<div className="flex gap-5">
																		<Input
																			onChange={(e) => setAmount(parseInt(e.target.value))}
																			type="number"
																			className="w-full h-[30px] border-2 p-2 rounded-lg"
																		/>
																	</div>
																</div>
																<div className="flex justify-around gap-4">
																	<Dialog.Trigger>
																		<Button variant={'outline'} className="bg-red-400 p-2 px-4">
																			Cancel
																		</Button>
																	</Dialog.Trigger>
																	<Dialog.Trigger>
																		<Button
																			disabled={amount === undefined}
																			onClick={() => {
																				if (localStorage.getItem('items')) {
																					const items = JSON.parse(localStorage.getItem('items') ?? '');
																					const updatedItem = {
																						...items.filter((x: item) => x.item === item.item)[0],
																						amount: amount && amount >= 0 ? amount : 0,
																					};
																					const updatedList = items.map((item: item) => {
																						if (item.item === updatedItem.item) {
																							return updatedItem;
																						}
																						return item;
																					});
																					localStorage.setItem('items', JSON.stringify(updatedList));
																					setX(x + 1);
																				}
																			}}
																			variant={'outline'}
																			className={`bg-green-400 p-2 px-4 ${
																				amount === undefined && 'cursor-not-allowed'
																			}`}
																		>
																			Edit
																		</Button>
																	</Dialog.Trigger>
																</div>
															</Card.Content>
														</Card>
													</Dialog.Content>
												</Dialog>
											</div>
											<div className="overflow-hidden flex justify-center items-center flex-1 min-h-0 p-1">
												<img
													src={getImages(item.item)}
													className="object-contain overflow-hidden h-full min-h-0"
												/>
											</div>
											<h3 className="text-center">{item.amount}mL Left</h3>
										</Card>
									)
							)}
						</div>
					</div>

					<div className="flex flex-col min-h-0 h-full px-4 py-4">
						<h2 className="text-2xl">Ingredients</h2>
						<div className="h-full flex gap-8 overflow-x-auto p-2 min-h-0 overflow-y-hidden">
							{JSON.parse(localStorage.getItem('items') ?? '[]')?.map(
								(item: item) =>
									item.type === 'ingredient' && (
										<Card className="max-h-[200px] w-[175px] min-w-[150px] relative flex flex-col pt-1 pb-0">
											<div className="flex justify-center border-b-2 px-2">
												<h2>{item.item}</h2>
												<Dialog onOpenChange={() => setAmount(undefined)}>
													<Dialog.Trigger asChild>
														<Button variant={'link'} className="ml-auto p-0">
															Edit
														</Button>
													</Dialog.Trigger>
													<Dialog.Content className="rounded-xl overflow-auto">
														<Card className="h-[80vh] w-[80vw] max-w-[400px] max-h-[200px] overflow-y-auto bg-white flex flex-col gap-8">
															<Card.Content className="p-4 flex flex-col h-full gap-6 justify-center items-center">
																<div className="flex flex-col mt-auto">
																	<h2 className="text-2xl">Amount(mL)</h2>
																	<div className="flex gap-5">
																		<Input
																			onChange={(e) => setAmount(parseInt(e.target.value))}
																			type="number"
																			className="w-full h-[30px] border-2 p-2"
																		/>
																	</div>
																</div>
																<div className="flex justify-around gap-4">
																	<Dialog.Trigger>
																		<Button variant={'outline'} className="bg-red-400 p-2 px-4">
																			Cancel
																		</Button>
																	</Dialog.Trigger>
																	<Dialog.Trigger>
																		<Button
																			disabled={amount === undefined}
																			onClick={() => {
																				if (localStorage.getItem('items')) {
																					const items = JSON.parse(localStorage.getItem('items') ?? '');
																					const updatedItem = {
																						...items.filter((x: item) => x.item === item.item)[0],
																						amount: amount && amount >= 0 ? amount : 0,
																					};
																					const updatedList = items.map((item: item) => {
																						if (item.item === updatedItem.item) {
																							return updatedItem;
																						}
																						return item;
																					});
																					localStorage.setItem('items', JSON.stringify(updatedList));
																					setX(x + 1);
																				}
																			}}
																			variant={'outline'}
																			className={`bg-green-400 p-2 px-4 ${
																				amount === undefined && 'cursor-not-allowed'
																			}`}
																		>
																			Edit
																		</Button>
																	</Dialog.Trigger>
																</div>
															</Card.Content>
														</Card>
													</Dialog.Content>
												</Dialog>
											</div>
											<div className="overflow-hidden flex justify-center items-center flex-1 min-h-0 p-1">
												<img
													src={getImages(item.item)}
													className="object-contain overflow-hidden h-full min-h-0"
												/>
											</div>
											<h3 className="text-center">{item.amount}g Left</h3>
										</Card>
									)
							)}
						</div>
					</div>
				</section>
			)}

			<div className="overflow-hidden w-full pb-2">
				<MyBarAdd setX={setX} x={x} />
			</div>
		</>
	);
}
