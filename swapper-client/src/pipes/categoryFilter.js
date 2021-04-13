const categoryFilter = (arr, category) => {
    if(!category) return arr;

    return arr.filter(item => category.includes(item.category));
};
export default categoryFilter;