export type Liquors = 'Vodka' | 'Tequila' | 'Gin' | 'Whiskey' | 'Rum' | 'Brandy';
export type Flavours = 'Sweet' | 'Sour' | 'Spicy' | 'Fruity' | 'Herbal' | 'Floral' | 'Smoky';

export type Drink = {
	id: number;
	name: string;
	liquor: Liquors;
	flavour: Flavours;
	rating: number;
	steps: string[];
	style: string;
	time: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	ingredients: string[];
	tools: string[];
	image: string;
};

export const drinksData: Drink[] = [
	{
		id: 1,
		name: 'Citrus Spark',
		liquor: 'Vodka',
		flavour: 'Sour',
		rating: 4,
		steps: [
			'Add vodka and lemon juice',
			'Shake on ice',
			'Strain into a chilled glass',
			'Top with soda water',
			'Garnish with lemon slice',
		],
		style: 'Refreshing',
		time: '5 mins',
		difficulty: 'Easy',
		ingredients: ['Vodka', 'Lemon juice', 'Soda water', 'Ice', 'Lemon slice'],
		tools: ['Shaker', 'Strainer', 'Chilled glass', 'Bar spoon'],
		image:
			'https://images.unsplash.com/photo-1549746423-e5fe9cafded8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
	},
	{
		id: 2,
		name: 'Fiery Agave',
		liquor: 'Tequila',
		flavour: 'Spicy',
		rating: 5,
		steps: [
			'Add tequila, lime juice, and chili syrup',
			'Shake with ice',
			'Strain into a rocks glass',
			'Add chili salt rim',
			'Serve immediately',
		],
		style: 'Bold',
		time: '6 mins',
		difficulty: 'Medium',
		ingredients: ['Tequila', 'Lime juice', 'Chili syrup', 'Salt', 'Ice'],
		tools: ['Shaker', 'Strainer', 'Rocks glass', 'Jigger'],
		image:
			'https://images.unsplash.com/photo-1550512358-5c497af22d15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
	},
	{
		id: 3,
		name: 'Sweet Blossom',
		liquor: 'Gin',
		flavour: 'Sweet',
		rating: 3,
		steps: [
			'Add gin and simple syrup',
			'Shake on ice',
			'Strain into a martini glass',
			'Garnish with a cherry',
		],
		style: 'Elegant',
		time: '4 mins',
		difficulty: 'Easy',
		ingredients: ['Gin', 'Simple syrup', 'Ice', 'Cherry'],
		tools: ['Shaker', 'Strainer', 'Martini glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1668771899398-1cdd763f745e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
	},
	{
		id: 4,
		name: 'Tequila Ember',
		liquor: 'Tequila',
		flavour: 'Spicy',
		rating: 4,
		steps: [
			'Add tequila, orange juice, and hot honey',
			'Shake with ice',
			'Pour into a rocks glass',
			'Top with chili flakes',
		],
		style: 'Warm',
		time: '7 mins',
		difficulty: 'Medium',
		ingredients: ['Tequila', 'Orange juice', 'Hot honey', 'Chili flakes'],
		tools: ['Shaker', 'Strainer', 'Rocks glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1679075335374-c7a0d7e4ef15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
	},
	{
		id: 5,
		name: 'Frosted Citrus',
		liquor: 'Vodka',
		flavour: 'Sour',
		rating: 5,
		steps: [
			'Add vodka, lime juice, and simple syrup',
			'Shake on ice',
			'Strain into a coupe glass',
			'Garnish with lime wheel',
		],
		style: 'Classic',
		time: '5 mins',
		difficulty: 'Easy',
		ingredients: ['Vodka', 'Lime juice', 'Simple syrup', 'Ice'],
		tools: ['Shaker', 'Strainer', 'Coupe glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1687354256687-b5ee47c043c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388',
	},
	{
		id: 6,
		name: 'Sweet Drift',
		liquor: 'Gin',
		flavour: 'Sweet',
		rating: 4,
		steps: [
			'Add gin, honey syrup, and soda water',
			'Stir gently with ice',
			'Serve in a highball glass',
			'Garnish with mint',
		],
		style: 'Light',
		time: '4 mins',
		difficulty: 'Easy',
		ingredients: ['Gin', 'Honey syrup', 'Soda water', 'Mint', 'Ice'],
		tools: ['Mixing glass', 'Bar spoon', 'Highball glass'],
		image:
			'https://images.unsplash.com/photo-1453824979084-c8fd42932378?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580',
	},
	{
		id: 7,
		name: 'Smoky Citrus',
		liquor: 'Tequila',
		flavour: 'Sour',
		rating: 3,
		steps: [
			'Add tequila, grapefruit juice, and lime juice',
			'Shake on ice',
			'Strain into a coupe glass',
			'Top with a salt rim',
		],
		style: 'Refreshing',
		time: '6 mins',
		difficulty: 'Medium',
		ingredients: ['Tequila', 'Grapefruit juice', 'Lime juice', 'Salt', 'Ice'],
		tools: ['Shaker', 'Strainer', 'Coupe glass'],
		image:
			'https://images.unsplash.com/photo-1635547018520-043b6f0e1a36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
	},
	{
		id: 8,
		name: 'Spiced Garden',
		liquor: 'Gin',
		flavour: 'Spicy',
		rating: 5,
		steps: [
			'Add gin, ginger syrup, and lime juice',
			'Shake with ice',
			'Strain into a chilled glass',
			'Garnish with basil leaf',
		],
		style: 'Zesty',
		time: '5 mins',
		difficulty: 'Easy',
		ingredients: ['Gin', 'Ginger syrup', 'Lime juice', 'Basil', 'Ice'],
		tools: ['Shaker', 'Strainer', 'Chilled glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1661344277834-bde1f854ec10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
	},
];
