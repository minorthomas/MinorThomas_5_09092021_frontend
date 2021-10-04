let productLocalStorage = JSON.parse(localStorage.getItem("cameraBasket"))

const basketDom = () => {
    
    //Creation du si le localStorage est vide, affiché "panier vide" sinon afficher la boucle for et les articles
    if (productLocalStorage === null) {
        let basketEmpty = document.createElement("p")
        basketEmpty.setAttribute("id", "basket_empty")
        basketEmpty.textContent = "Votre panier est vide"
        document.querySelector("#basket_summary").appendChild(basketEmpty)
    } else {
        for (let i = 0; i < productLocalStorage.length; i++) {
            let basketArticle = document.createElement("article")
            document.querySelector("#basket_summary").appendChild(basketArticle)
    
            //Creation de la div qui englobe les details du panier
            let basketProducts = document.createElement("div")
            basketProducts.classList.add("basket_products")
            basketArticle.appendChild(basketProducts)

            //Creation du paragraphe principal qui englobe l'article + quantité + prix
            let basketFirstProduct = document.createElement("p")
            basketFirstProduct.classList.add("basket_first_product")
            basketProducts.appendChild(basketFirstProduct)            
            basketFirstProduct.textContent = "Article: " + "Appareil photo " + productLocalStorage[i].name

            //Creation du paragraphe secondaire qui englobe l'article secondaire
            let basketSecondProduct = document.createElement("p")
            basketSecondProduct.classList.add("basket_second_product")
            basketProducts.appendChild(basketSecondProduct)
            basketSecondProduct.textContent = "Lentille: " + productLocalStorage[i].lenses

            //Creation du div pour le prix
            let basketProductPrice = document.createElement("div")
            basketProductPrice.classList.add("basket_product_price")
            basketArticle.appendChild(basketProductPrice)           
            basketProductPrice.innerHTML = productLocalStorage[i].price
            // let stringToNumber = parseInt(productLocalStorage[i].price, 10) 

            let basketRemoveArticle = document.createElement("button")
            basketRemoveArticle.classList.add("basket_clear")
            basketArticle.appendChild(basketRemoveArticle)
            basketRemoveArticle.textContent = "Supprimer l'article"

            let productSeparation = document.createElement("div")
            productSeparation.classList.add("product_separation")
            document.querySelector("#basket_summary").appendChild(productSeparation)
        }
    }
    if (productLocalStorage === null){
        let totalPrice = document.querySelector("#basket_total_price")
        totalPrice.textContent = "0"
        console.log(totalPrice)

    } else {
        //creer un tableau vide
        let totalPrice = []
        let sum = 0
        //creer une boucle qui va permettre de recuperer chaque prix et de les ajouter au tableau
        for (let i = 0; i < productLocalStorage.length; i++) {
            totalPriceBasket = productLocalStorage[i].price

            totalPrice.push(totalPriceBasket) //ajoute le prix au tableau
        }


        let stringToNumber = parseInt(totalPrice, 10)
        console.log(stringToNumber)

    }

//recuperer le span prix
//recuperer tous les prix des objets
//additionner tous les prix
//afficher les prix
}

//--------------------------------------------

const clearOneProduct = () => {
    let clearButton = document.querySelectorAll(".basket_clear")

    for (let i = 0; i < clearButton.length; i++) {
        clearButton[i].addEventListener("click", (e) => {
            let selectProductIndex = productLocalStorage[i]
            console.log(selectProductIndex)
      
        })
    }
}

//------------------------
const clearAllProduct = () => {
    let clearAllButton = document.querySelector("#clear_all_products")

    clearAllButton.addEventListener("click", (e) => {
        localStorage.removeItem("cameraBasket")
        location.reload()
    })
}

basketDom()
clearOneProduct()
clearAllProduct()