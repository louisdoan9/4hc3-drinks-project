import type { Dispatch, SetStateAction } from 'react';
import { Button } from './retroui/Button';
import { Select } from './retroui/Select';

export default function Filter({
	setTagFilters,
	tagFilters,
}: {
	setTagFilters: Dispatch<SetStateAction<string[]>>;
	tagFilters: string[];
}) {
	function addToFilter(value: string) {
		if (!tagFilters.includes(value)) {
			setTagFilters([...tagFilters, value]);
		}
	}

	return (
		<div className="flex px-4 min-w-0 flex-1">
			<Select onValueChange={(e) => addToFilter(e)} value="filter" defaultValue={'filter'}>
				<Select.Trigger className="mb-3 rounded-lg">
					<Select.Value>Filter</Select.Value>
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						<Select.Label className="pl-1 font-bold">Liquor</Select.Label>
						<Select.Item className="hover:cursor-pointer" value="Vodka">
							Vodka
						</Select.Item>
						<Select.Item className="hover:cursor-pointer" value="Tequila">
							Tequila
						</Select.Item>
						<Select.Item className="hover:cursor-pointer" value="Gin">
							Gin
						</Select.Item>
					</Select.Group>
					<Select.Group>
						<Select.Label className="pl-1 font-bold">Flavour</Select.Label>
						<Select.Item className="hover:cursor-pointer" value="Sweet">
							Sweet
						</Select.Item>
						<Select.Item className="hover:cursor-pointer" value="Sour">
							Sour
						</Select.Item>
						<Select.Item className="hover:cursor-pointer" value="Spicy">
							Spicy
						</Select.Item>
					</Select.Group>
				</Select.Content>
			</Select>
			<div className="pb-3 flex-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				<div className="flex px-4 gap-2 flex-1 min-w-0">
					{tagFilters.map((tag) => (
						<Button
							className="hover:bg-red-400"
							onClick={() => setTagFilters([...tagFilters].filter((e) => e !== tag))}
						>
							{tag}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
