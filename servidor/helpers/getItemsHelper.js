

exports.mapItems = items => {
    return items.map(item => {
        const condition = item.attributes.find(attribute => attribute.id === 'ITEM_CONDITION');
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: item.price - parseInt(item.price)
            },
            picture: item.thumbnail,
            condition: condition.value_name,
            free_shipping: item.shipping.free_shipping
        }
    })
} 

exports.mapCategories = filters => {
    const categoriesObject = filters.find(filter => filter.id === 'category');
    const paths = categoriesObject.values.find(value => value.path_from_root).path_from_root;
    const categories = paths.map(p => p.name);

    return categories;
}

exports.mapItemById = (item, description) => {
    const condition = item.attributes.find(attribute => attribute.id === 'ITEM_CONDITION');

    const completedItem = {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item.price - parseInt(item.price)
        },
        picture: item.pictures[0].secure_url,
        condition: condition.value_name,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        category: item.category_id,
        description: description.plain_text
    };

    return completedItem;
}