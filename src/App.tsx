import Navbar from './components/Navbar';
import Filter from './components/Filter';
import DrinksList from './components/DrinksList';
import DrinkPreview from './components/DrinkPreview';
import { useState } from 'react';
import MyBar from './components/MyBar';

function App() {
	const [view, setView] = useState('home');
	const [selectedDrink, setSelectedDrink] = useState<number | undefined>();
	const [textFilter, setTextFilter] = useState('');
	const [tagFilters, setTagFilters] = useState<string[]>([]);

	return view === 'home' ? (
		<main className="flex flex-col h-full">
			<Navbar setView={setView} setTextFilter={setTextFilter} />

			<section className="h-full flex overflow-y-auto">
				<div className="flex flex-col w-[60%]">
					<Filter setTagFilters={setTagFilters} tagFilters={tagFilters} />

					<DrinksList setSelectedDrink={setSelectedDrink} textFilter={textFilter} tagFilters={tagFilters} />
				</div>
				<div className="w-[40%] p-4 mt-[30px]">
					<DrinkPreview selectedDrink={selectedDrink} />
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
