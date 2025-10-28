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

export const liquors = ['Vodka', 'Tequila', 'Gin'];

export const ingredients = ['Lime juice', 'Simple syrup', 'Soda water', 'Mint', 'Ice'];

export const drinksData: Drink[] = [
	{
		id: 1,
		name: 'Citrus Spark',
		liquor: 'Vodka',
		flavour: 'Sour',
		rating: 4,
		steps: [
			'Add vodka and lime juice',
			'Shake on ice',
			'Strain into a chilled glass',
			'Top with soda water',
			'Garnish with mint leaf',
		],
		style: 'Refreshing',
		time: '5 mins',
		difficulty: 'Easy',
		ingredients: ['Vodka', 'Lime juice', 'Soda water', 'Ice', 'Mint'],
		tools: ['Shaker', 'Strainer', 'Glass', 'Bar spoon'],
		image: 'https://images.unsplash.com/photo-1549746423-e5fe9cafded8?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 2,
		name: 'Fiery Agave',
		liquor: 'Tequila',
		flavour: 'Spicy',
		rating: 5,
		steps: [
			'Add tequila, lime juice, and simple syrup',
			'Shake with ice',
			'Strain into a glass',
			'Garnish with mint',
		],
		style: 'Bold',
		time: '6 mins',
		difficulty: 'Medium',
		ingredients: ['Tequila', 'Lime juice', 'Simple syrup', 'Ice', 'Mint'],
		tools: ['Shaker', 'Strainer', 'Glass', 'Jigger'],
		image: 'https://images.unsplash.com/photo-1550512358-5c497af22d15?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 3,
		name: 'Sweet Blossom',
		liquor: 'Gin',
		flavour: 'Sweet',
		rating: 3,
		steps: ['Add gin and simple syrup', 'Shake on ice', 'Strain into a glass', 'Top with soda water'],
		style: 'Elegant',
		time: '4 mins',
		difficulty: 'Easy',
		ingredients: ['Gin', 'Simple syrup', 'Soda water', 'Ice'],
		tools: ['Shaker', 'Strainer', 'Glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1668771899398-1cdd763f745e?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 4,
		name: 'Tequila Ember',
		liquor: 'Tequila',
		flavour: 'Spicy',
		rating: 4,
		steps: [
			'Add tequila, simple syrup, and soda water',
			'Shake on ice',
			'Strain into a glass',
			'Garnish with mint leaf',
		],
		style: 'Warm',
		time: '7 mins',
		difficulty: 'Medium',
		ingredients: ['Tequila', 'Simple syrup', 'Soda water', 'Ice', 'Mint'],
		tools: ['Shaker', 'Strainer', 'Glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1679075335374-c7a0d7e4ef15?auto=format&fit=crop&w=800&q=80',
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
			'Strain into a glass',
			'Garnish with mint leaf',
		],
		style: 'Classic',
		time: '5 mins',
		difficulty: 'Easy',
		ingredients: ['Vodka', 'Lime juice', 'Simple syrup', 'Ice', 'Mint'],
		tools: ['Shaker', 'Strainer', 'Glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1687354256687-b5ee47c043c1?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 6,
		name: 'Sweet Drift',
		liquor: 'Gin',
		flavour: 'Sweet',
		rating: 4,
		steps: [
			'Add gin, soda water, and simple syrup',
			'Stir gently with ice',
			'Serve in a glass',
			'Garnish with mint leaf',
		],
		style: 'Light',
		time: '4 mins',
		difficulty: 'Easy',
		ingredients: ['Gin', 'Simple syrup', 'Soda water', 'Ice', 'Mint'],
		tools: ['Shaker', 'Bar spoon', 'Glass'],
		image: 'https://images.unsplash.com/photo-1453824979084-c8fd42932378?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 7,
		name: 'Smoky Citrus',
		liquor: 'Tequila',
		flavour: 'Sour',
		rating: 3,
		steps: [
			'Add tequila, lime juice, and soda water',
			'Shake on ice',
			'Strain into a glass',
			'Garnish with mint leaf',
		],
		style: 'Refreshing',
		time: '6 mins',
		difficulty: 'Medium',
		ingredients: ['Tequila', 'Lime juice', 'Soda water', 'Ice', 'Mint'],
		tools: ['Shaker', 'Strainer', 'Glass'],
		image: 'https://images.unsplash.com/photo-1635547018520-043b6f0e1a36?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 8,
		name: 'Spiced Garden',
		liquor: 'Gin',
		flavour: 'Spicy',
		rating: 5,
		steps: [
			'Add gin, lime juice, and simple syrup',
			'Shake with ice',
			'Strain into a glass',
			'Garnish with mint leaf',
		],
		style: 'Zesty',
		time: '5 mins',
		difficulty: 'Easy',
		ingredients: ['Gin', 'Lime juice', 'Simple syrup', 'Ice', 'Mint'],
		tools: ['Shaker', 'Strainer', 'Glass'],
		image:
			'https://plus.unsplash.com/premium_photo-1661344277834-bde1f854ec10?auto=format&fit=crop&w=800&q=80',
	},
];
