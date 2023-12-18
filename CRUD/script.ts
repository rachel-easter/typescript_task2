let editingIndex: number = -1; // Indicates if we are currently editing a product

// Interface for the product object
interface Product {
    name: string;
    price: number;
}

// Function to add or update a product
function addOrUpdateProduct() {
    const productName = (document.getElementById("productName") as HTMLInputElement).value;
    const productPrice = (document.getElementById("productPrice") as HTMLInputElement).value;

    // Validate inputs
    if (!productName || !productPrice) {
        alert("Please enter both product name and price.");
        return;
    }

    // Create a new product object
    const product: Product = {
        name: productName,
        price: parseFloat(productPrice)
    };

    // Get existing products from local storage or initialize an empty array
    const products: Product[] = JSON.parse(localStorage.getItem("products")) || [];

    if (editingIndex === -1) {
        // Adding a new product
        products.push(product);
    } else {
        // Updating an existing product
        products[editingIndex] = product;
        editingIndex = -1; // Reset editingIndex after updating
    }

    // Save the updated array back to local storage
    localStorage.setItem("products", JSON.stringify(products));

    // Clear the form
    (document.getElementById("productName") as HTMLInputElement).value = "";
    (document.getElementById("productPrice") as HTMLInputElement).value = "";

    // Change button text back to "Add Product"
    document.getElementById("addUpdateButton")!.innerHTML = "Add Product";

    // Show "Cancel" button and hide it when adding a new product
    document.getElementById("cancelUpdateButton")!.style.display = "none";

    // Refresh the product list
    displayProducts();
}

// Function to populate the form for editing
function editProduct(index: number) {
    const products: Product[] = JSON.parse(localStorage.getItem("products")) || [];
    const productToEdit: Product = products[index];

    // Populate the form with the details of the selected product
    (document.getElementById("productName") as HTMLInputElement).value = productToEdit.name;
    (document.getElementById("productPrice") as HTMLInputElement).value = productToEdit.price.toString();

    // Change button text to "Update"
    document.getElementById("addUpdateButton")!.innerHTML = "Update";

    // Show "Cancel" button
    document.getElementById("cancelUpdateButton")!.style.display = "inline-block";

    // Set the editing index
    editingIndex = index;
}

// Function to cancel the update and clear the form
function cancelUpdate() {
    // Clear the form
    (document.getElementById("productName") as HTMLInputElement).value = "";
    (document.getElementById("productPrice") as HTMLInputElement).value = "";

    // Change button text back to "Add Product"
    document.getElementById("addUpdateButton")!.innerHTML = "Add Product";

    // Hide "Cancel" button
    document.getElementById("cancelUpdateButton")!.style.display = "none";

    // Reset the editing index
    editingIndex = -1;
}

// Function to display products in the table
function displayProducts() {
    const productList = document.getElementById("productList");
    productList!.innerHTML = "";

    // Get the list of products from local storage
    const products: Product[] = JSON.parse(localStorage.getItem("products")) || [];

    // Populate the table with product data
    products.forEach((product, index) => {
        const row = productList!.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = product.name;
        cell2.innerHTML = product.price.toFixed(2);

        // Add "Edit" and "Delete" buttons for each product
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            editProduct(index);
        };
        cell3.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            deleteProduct(index);
        };
        cell3.appendChild(deleteButton);
    });
}

// Function to delete a product
function deleteProduct(index: number) {
    // Get the list of products from local storage
    const products: Product[] = JSON.parse(localStorage.getItem("products")) || [];

    // Remove the product at the specified index
    products.splice(index, 1);

    // Save the updated array back to local storage
    localStorage.setItem("products", JSON.stringify(products));

    // Refresh the product list
    displayProducts();
}

// Display products when the page loads
displayProducts();
