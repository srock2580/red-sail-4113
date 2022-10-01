import { navbar, footer } from "./component/nav_foot.js";
document.querySelector(".navbar").innerHTML = navbar();
document.querySelector(".footer").innerHTML = footer();

const data = JSON.parse(localStorage.getItem("cartStorage")) || [];
const cartContainer = document.querySelector(".cart-container");

const getLocalData = () => {
  cartContainer.innerHTML = "";
  data.forEach((element, index) => {
    const imageTag = document.createElement("img");
    const brandTag = document.createElement("h3");
    const detailTag = document.createElement("p");
    const priceTag = document.createElement("h4");

    const selectTag = document.createElement("select");
    const optionTag1 = document.createElement("option");
    const optionTag2 = document.createElement("option");
    const optionTag3 = document.createElement("option");
    const optionTag4 = document.createElement("option");
    const optionTag5 = document.createElement("option");

    const brTag = document.createElement("br");

    optionTag1.innerText = "Qty: 1";
    optionTag2.innerText = "Qty: 2";
    optionTag3.innerText = "Qty: 3";
    optionTag4.innerText = "Qty: 4";
    optionTag5.innerText = "Qty: 5";

    optionTag1.value = "1";
    optionTag2.value = "2";
    optionTag3.value = "3";
    optionTag4.value = "4";
    optionTag5.value = "5";

    const removeButton = document.createElement("button");

    const imageDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const cartDiv = document.createElement("div");

    imageTag.src = element.image;
    brandTag.innerText = element.brand;
    detailTag.innerText = element.description;
    priceTag.innerText = "Rs. " + Math.floor(element.price) + " /-";
    removeButton.innerText = "Remove";

    // click on remove button
    removeButton.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("cartStorage", JSON.stringify(data));
      getLocalData();
      updateTotal(0)
    });

    // change on quantity
    selectTag.addEventListener("change", () => {
      const qnt = Number(selectTag.value);
      const fullPrice = qnt * Math.floor(element.price);
      priceTag.innerText = "Rs. " + Math.floor(fullPrice) + " /-";

      updateTotal(Math.floor(fullPrice) - Math.floor(element.price))
    });

    selectTag.append(
      optionTag1,
      optionTag2,
      optionTag3,
      optionTag4,
      optionTag5
    );
    imageDiv.append(imageTag);
    descriptionDiv.append(
      brandTag,
      detailTag,
      priceTag,
      selectTag,
      brTag,
      removeButton
    );
    cartDiv.append(imageDiv, descriptionDiv);
    cartContainer.append(cartDiv);

    const cartCount = data.length;
    document.querySelector(".cart_count").innerText = cartCount;
  });
};
getLocalData();


function updateTotal(fullPrice) {
  let total = 0
  data.forEach(element => {
    total += Math.floor(element.price)
  });

  total += Math.floor(fullPrice)

  document.querySelector('.total_amount').innerText = "Rs. " + Math.floor(total) + " /-";
}
updateTotal(0)

document.querySelector('.checkout_button').addEventListener('click', () => {
  window.location.href = 'address.html'
})