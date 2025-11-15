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
			<section className="h-full flex overflow-y-auto max-[600px]:flex-col-reverse">
				<div className="w-full min-w-0 flex flex-col bg-gray-50">
					<div className="flex items-center bg-gray-50 p-4">
						<Input
							onChange={(e) => setTextFilter(e.target.value)}
							className="w-[90%] h-10 border-2 p-2 rounded-lg"
							placeholder="Search for a drink..."
						/>
					</div>
					<Filter setTagFilters={setTagFilters} tagFilters={tagFilters} />

					<DrinksList setSelectedDrink={setSelectedDrink} textFilter={textFilter} tagFilters={tagFilters} />
				</div>
				<div className="w-[80%] p-4 flex justify-center items-center flex-col gap-4 max-[850px]:w-full">
					<div className="flex px-0 gap-2 mb-auto w-full justify-around items-center">
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
