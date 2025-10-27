import { Button } from './retroui/Button';
import { Select } from './retroui/Select';

export default function Filter({ setTagFilters, tagFilters }) {
	function addToFilter(value) {
		if (!tagFilters.includes(value)) {
			setTagFilters([...tagFilters, value]);
		}
	}

	return (
		<div className="items-center flex pl-4">
			<Select onValueChange={(e) => addToFilter(e)} value="filter" defaultValue={'filter'}>
				<Select.Trigger className="mb-3">
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
			<div className="w-full overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				<div className="flex px-4 gap-2 w-full">
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
