export default function Navbar({ setView }) {
	return (
		<nav className="flex h-[75px] bg-red-200">
			<div className="w-[60%] flex justify-center items-center">
				<input className="w-[90%] h-[60%] border-2 p-2" placeholder="Search for a drink..." />
			</div>
			<div className="w-[40%] flex justify-around items-center ">
				<button className="border-2 p-2">Hi, User</button>
				<button className="border-2 p-2" onClick={() => setView('myBar')}>
					My Bar
				</button>
				<button className="border-2 p-2">Saved Recipes</button>
			</div>
		</nav>
	);
}
