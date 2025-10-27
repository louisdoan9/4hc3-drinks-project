import { Input } from './retroui/Input';
import { Button } from './retroui/Button';

export default function Navbar({ setView, setTextFilter }) {
	return (
		<nav className="flex h-[75px]">
			<div className="w-[60%] flex px-4 items-center">
				<Input
					onChange={(e) => setTextFilter(e.target.value)}
					className="w-[90%] h-[60%] border-2 p-2"
					placeholder="Search for a drink..."
				/>
			</div>
			<div className="w-[40%] flex justify-between px-4 items-center ">
				<Button className="border-2 p-2">Hi, User</Button>
				<Button className="border-2 p-2" onClick={() => setView('myBar')}>
					My Bar
				</Button>
				<Button className="border-2 p-2">Saved Recipes</Button>
			</div>
		</nav>
	);
}
