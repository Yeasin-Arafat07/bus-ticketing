const allSeat = document.getElementsByClassName('seat')
    let count = 0;

            const price = document.getElementById('economy').childNodes[3].innerText;
            const pattern = document.getElementById('economy').childNodes[5].innerText;
            
    
    

    for(const seat of allSeat){
        seat.addEventListener("click", function(e){
            count = count+1;
            console.log(e.value);
            setNumberElementById('Seat-count', count);
            
            const seatName = e.target.innerText;
            const SelectedPlace = document.getElementById('Selected-place');

            const li = document.createElement('li');
            const p = document.createElement('p');
            p.innerText = seatName;
            const p2 = document.createElement('p');
            p2.innerText = pattern;
            const p3 = document.createElement('p');
            p3.innerText = price;

            li.appendChild(p)
            li.appendChild(p2)
            li.appendChild(p3)

            SelectedPlace.appendChild(li)

            const totalCost = document.getElementById('total-cost').innerText;
            const convertedTotalCost = parseInt(totalCost);
            const sum = convertedTotalCost + parseInt(price)
            setNumberElementById('total-cost', sum);

            // const sum = cost + parseInt(price);
            const cost = getNumberElementById('total-cost')
        })
    }
