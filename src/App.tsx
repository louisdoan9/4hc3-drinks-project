import Filter from './components/Filter';
import DrinksList from './components/DrinksList';
import DrinkPreview from './components/DrinkPreview';
import { useState } from 'react';
import MyBar from './components/MyBar';
import { Input } from './components/retroui/Input';
import { Button } from './components/retroui/Button';

function App() {
	const [view, setView] = useState('home');
	const [selectedDrink, setSelectedDrink] = useState<number | undefined>();
	const [textFilter, setTextFilter] = useState('');
	const [tagFilters, setTagFilters] = useState<string[]>([]);

	return view === 'home' ? (
		<main className="flex flex-col h-full">
			<section className="h-full flex overflow-y-auto max-[700px]:flex-col-reverse">
				<div className="flex flex-col bg-gray-50 min-w-0">
					<div className="w-full flex items-center bg-gray-50 p-4">
						<Input
							onChange={(e) => setTextFilter(e.target.value)}
							className="w-[90%] h-10 border-2 p-2 rounded-lg"
							placeholder="Search for a drink..."
						/>
					</div>
					<Filter setTagFilters={setTagFilters} tagFilters={tagFilters} />

					<DrinksList setSelectedDrink={setSelectedDrink} textFilter={textFilter} tagFilters={tagFilters} />
				</div>
				<div className="w-full p-4 flex justify-center items-center flex-col gap-4">
					<div className="w-full flex justify-between px-4 items-center gap-4 mb-auto">
						<Button className="border-2 p-2">Hi, User</Button>
						<Button className="border-2 p-2" onClick={() => setView('myBar')}>
							My Bar
						</Button>
						<Button className="border-2 p-2">Saved Recipes</Button>
					</div>
					{selectedDrink ? (
						<DrinkPreview selectedDrink={selectedDrink} />
					) : (
						<div className="mb-auto">No drink selected</div>
					)}
				</div>
			</section>
		</main>
	) : (
		<main className="flex flex-col h-full">
			<MyBar setView={setView} />
		</main>
	);
}

export default App;
