import { Input } from './retroui/Input';
import { Button } from './retroui/Button';
import type { Dispatch, SetStateAction } from 'react';

export default function Navbar({
	setView,
	setTextFilter,
}: {
	setView: Dispatch<SetStateAction<string>>;
	setTextFilter: Dispatch<SetStateAction<string>>;
}) {
	return (
		<nav className="flex h-[75px] mt-2 w-full">
			<div className="w-full flex items-center bg-gray-50">
				<Input
					onChange={(e) => setTextFilter(e.target.value)}
					className="w-[90%] h-[60%] border-2 p-2 rounded-lg"
					placeholder="Search for a drink..."
				/>
			</div>
			<div className="w-full flex justify-between px-4 items-center gap-4">
				<Button className="border-2 p-2">Hi, User</Button>
				<Button className="border-2 p-2" onClick={() => setView('myBar')}>
					My Bar
				</Button>
				<Button className="border-2 p-2">Saved Recipes</Button>
			</div>
		</nav>
	);
}
