const relatedProductsList = [
        {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/11/mpotakia-disola-me-eswteriki-ependusi-gounas-lasti-115519-fvh0-e1730981631781-510x578.jpg",
        name: "Ανδρικά Sneakers",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2022/03/leyka-flatform-sneakers-me-mayri-leptomereia-siliad-sne-lyr466-whtblk-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/11/e23-20238-34-dsc_0665_1_0-510x510.jpeg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/05/0t3a9646-1-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/02/0t3a8489-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/04/0t3a9251-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/06/0t3a9337-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
        {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/04/0t3a9251-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/06/0t3a9337-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/04/0t3a9251-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
    {
        image: "https://www.ilgusto.gr/wp-content/uploads/2024/06/0t3a9337-510x510.jpg",
        name: "Σχετικό Προϊόν",
        price: "€49.99",
    },
];

const relatedProducts = document.getElementById("relatedProducts");

for (let i = 0; i < relatedProductsList.length; i++) {
    const product = relatedProductsList[i];
    const productElement = document.createElement("div");
    productElement.classList.add(...["col-md-3","gallery-item"]);
    productElement.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <p class="card-text">${product.name}</p>
                <p class="price">${product.price}</p>
            </div>
        </div>
    `;
    relatedProducts.appendChild(productElement);
}