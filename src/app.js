const numberInput = document.getElementById('oldalhossz');
const parseButton = document.getElementById('parseButton');

parseButton.addEventListener("click", () => {
    const oldalhossz = parseFloat(numberInput.value); 

    if (!isNaN(oldalhossz)) { 
        const area = (16 * oldalhossz * oldalhossz) / (4 * Math.tan(Math.PI / 16));
        console.log("A szabályos 16 szög területe: " + area);
    } else {
        console.log("Hiba! Kérem, adjon meg egy számot.");
    }
});

