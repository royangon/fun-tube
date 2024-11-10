// fetch, load & show categories on html page

const loadCat = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json() )
    .then((data) => displayCat(data.categories))
    .catch((error) => console.log(error))

};
// creating display categories
const displayCat = (data) => {
    const categoryContainer = document.getElementById("categories")
    data.forEach((item) => {
        console.log(item);
        // create button
        const button = document.createElement("button");
        button.classList = "btn"
        button.innerText = item.category
        // add button to container
        categoryContainer.append(button);

    });

};

loadCat();
displayCat();
