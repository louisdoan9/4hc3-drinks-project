import Navbar from './components/Navbar';
import Filter from './components/Filter';
import DrinksList from './components/DrinksList';
import DrinkPreview from './components/DrinkPreview';
import { useState } from 'react';
import MyBar from './components/MyBar';

function App() {
	const [view, setView] = useState('home');

	return view === 'home' ? (
		<main className="flex flex-col h-full">
			<Navbar setView={setView} />

			<section className="h-full flex overflow-y-auto">
				<div className="flex flex-col w-[60%]">
					<Filter />

					<DrinksList />
				</div>
				<div className="w-[40%] p-4 mt-[30px]">
					<DrinkPreview />
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
