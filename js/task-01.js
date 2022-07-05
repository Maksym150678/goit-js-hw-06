const categoriesItemEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesItemEl.length);

console.log(categoriesItemEl);

categoriesItemEl.forEach(el => {
    const searchTitile = el.querySelector('h2');
    console.log(`Category: ${searchTitile.textContent}`);
    const numbersOfList = el.querySelectorAll('ul > li');
    console.log(`Elements: ${numbersOfList.length}`);

});