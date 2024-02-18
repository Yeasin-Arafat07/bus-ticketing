function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
        element.classList.remove('bg-orange-400'); 
}

function setNumberElementById(elementId ,value){
    const element = document.getElementById(elementId);
    element.innerText = value
}
function setTotalCostById(elementId, value){
    const element = document.getElementById(elementId).innerText;
    const convertedCost = parseInt(element);
    const sum = convertedCost + parseInt(value);
    setNumberElementById(elementId, sum)
}
function setGrandCostById(elementId, value){
    const element = document.getElementById(elementId).innerText;
    const convertedCost = parseInt(element);
    const sum = convertedCost + parseInt(value);
    setNumberElementById(elementId, sum)
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}