export default function DrinksList() {
	return (
		<div className="overflow-y-auto py-4" dir="rtl">
			<div className="flex gap-8 flex-wrap min-h-0" dir="ltr">
				{Array.from({ length: 10 }).map(() => (
					<div className="h-[150px] w-[30%] min-w-[150px] relative flex flex-col items-center">
						<div className="h-full w-full min-h-0 bg-gray-300 flex justify-center items-center">(Image)</div>
						<h3 className="absolute bottom-[15px] left-[50%] translate-[-50%]">⭐⭐⭐</h3>
						<h2 className="bg-gray-200 w-full text-center">Name</h2>
					</div>
				))}
			</div>
		</div>
	);
}
