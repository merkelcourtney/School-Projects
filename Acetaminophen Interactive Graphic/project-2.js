// Courtney Merkel // cpmerkel
// Project 2 JS
// Web Design 2: Spring 2020

// PART ONE
// --------
// populate the HTML with the data

const drugsId = document.querySelector('#drugs');

drugList.forEach((drug, index) => {
    const html = `
    <figure data-drug-name="${drug.name}" data-drug-amount="${drug.amount}">
        <img src="images/${drug.slug}.jpg" alt="${drug.slug}">
        <figcaption>${drug.name}</figcaption>
    </figure>`
    drugsId.insertAdjacentHTML('beforeend', html);
});

// PART FOUR
// ---------
// call addDrug() when a drug is clicked

const allDrugs = document.querySelectorAll('figure');

const addEventToDrug = function(drug) {
    drug.addEventListener('click', function () { addDrug(drug)});
};

allDrugs.forEach(addEventToDrug);

// PART FIVE
// ---------
// addDrug(): make drug look visibly selected using CSS
// update total amount of acetaminophen
// update lethal dose bar
// update dose bar's label
// total dose and warning message

let totalDose = 0;

function messageUpdate() {
    let messageSpace = document.querySelector('#message');
    if (totalDose < 4000) {
        let message = `
        <p>TOTAL<br><span class="totalColor">${totalDose}</span><br>milligrams</p>`
        messageSpace.innerHTML = message;
    } else if (totalDose < 8000) {
        let message = `
        <p>TOTAL<br><span class="totalColor">${totalDose}</span><br>milligrams</p>
        <p>You've exceeded the FDA's recommended maximum daily limit of acetaminophen.</p>`
        messageSpace.innerHTML = message;
        let totalColor = document.querySelector('.totalColor');
        totalColor.style.cssText = `color: #D5B612`;
        console.dir(totalColor);
    } else if (totalDose < 15000) {
        let message = `
        <p>TOTAL<br><span class="totalColor">${totalDose}</span><br>milligrams</p>
        <p>You've exceeded the level at which liver damage can occur if taken for several days, according to McNeil, the maker of Tylenol.</p>`
        messageSpace.innerHTML = message;
        let totalColor = document.querySelector('.totalColor');
        totalColor.style.cssText = `color: #D17827`;
    } else if (totalDose >= 15000) {
        let message = `
        <p>TOTAL<br><span class="totalColor">${totalDose}</span><br>milligrams</p>
        <p>You've exceeded the threshold toxic dose of acetaminophen. A single dose at this level can result in death, according to medical experts and literature.</p>`
        messageSpace.innerHTML = message;
        let totalColor = document.querySelector('.totalColor');
        totalColor.style.cssText = `color: #C20802`;
    }
}

function updateBar() {
 let height = (totalDose/15000)*100;
 let span = document.querySelector('.bar');
 let labelHeight = document.querySelector('.label');
 if (height <= 100) {
    span.style.cssText = `height: ${height}%`;
    labelHeight.style.cssText = `bottom: ${height}%`;
 } else if (height > 100) {
    span.style.cssText = `height: 100%`;
    labelHeight.style.cssText = `bottom: 100%`;
 }
}

function addDrug(drug) {
    drug.classList.add('selected');
    let amount = drug.dataset.drugAmount;
    let name = drug.dataset.drugName;
    totalDose = totalDose + parseInt(amount);
    const label = document.querySelector('.label');
    label.innerText = `${name} ${amount} mg`;
    messageUpdate();
    updateBar();
}
