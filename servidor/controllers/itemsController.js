var Request = require('request');
var fetch = require('node-fetch');
var getItemsHelper = require('../helpers/getItemsHelper');

exports.searchItems = async (req, resp) => {
	let filteredItems = [];
	let result = {
		author: {
			name: 'Selene',
			lastName: 'Faccioli',
		},
		categories: [],
		items: [],
	};

	try {
		const response = await fetch(
			`https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.q}`
		).then((res) => res.json());
		filteredItems = response.results.slice(0, 4);

		result.items = getItemsHelper.mapItems(filteredItems);
		result.categories = getItemsHelper.mapCategories(response.filters);
		resp.send(result);
	} catch (error) {
		console.log(error);
	}
};

exports.getItem = async (req, resp) => {
	let result = {
		author: {
			name: 'Selene',
			lastName: 'Faccioli',
		}
	};
   // MLA916188006
	try {
		const item = await fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
			.then((res) => res.json());
		

		const itemDescription = await fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`)
		   .then((res) => res.json());	

		result.item = getItemsHelper.mapItemById(item, itemDescription);

		resp.send(result);   
	} catch (error) {
		console.log(error);
	}
} 


exports.getCategories = async (req, resp) => {
	let result = [];
	try {
		const categoriesObject = await fetch(`https://api.mercadolibre.com/categories/${req.params.id}`)
			.then((res) => res.json());
		
		result = categoriesObject.path_from_root.map(category => category.name);
		resp.send(result);   
	} catch (error) {
		console.log(error);
	}
} 
