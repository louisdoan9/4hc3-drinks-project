export default function Filter() {
	return (
		<div className="bg-purple-200 h-[75px] items-center flex p-2">
			<select className="w-[175px] min-h-[30px] h-[60%] border-2" value="filter" defaultValue={'filter'}>
				<option className="hidden" value="filter">
					Filter
				</option>
				<optgroup label="Liquor">
					<option value="vodka">Vodka</option>
					<option value="tequila">Tequila</option>
					<option value="gin">Gin</option>
				</optgroup>
				<optgroup label="Flavour">
					<option value="sweet">Sweet</option>
					<option value="sour">Sour</option>
					<option value="spicy">Spicy</option>
				</optgroup>
			</select>
		</div>
	);
}
