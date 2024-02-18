const allSeat = document.getElementsByClassName('seat')
   
    let count = 0;
    let less = 1;

            const price = document.getElementById('economy').childNodes[3].innerText;
            const pattern = document.getElementById('economy').childNodes[5].innerText;
            
    
    

    for(const seat of allSeat){
        seat.addEventListener("click", function(e){
            // limitation area
            if(count > 3){
                alert('You can not take more than 4' )
                return;
            }
           seat.disable = true;

            count = count+1;
            console.log(e.value);
            setNumberElementById('Seat-count', count);
            
            
            const seatName = e.target.innerText;
            const SelectedPlace = document.getElementById('Selected-place');
            // color area
            e.target.style.backgroundColor = "green";
            e.target.setAttribute = 'disable';

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
        //   seat left area
            const seatLeft = document.getElementById('seat-left').innerText;
            const convertedText = parseInt(seatLeft);
            document.getElementById('seat-left').innerText = convertedText - parseInt(less)



            SelectedPlace.appendChild(li)

            setTotalCostById('total-cost', price);
            setGrandCostById('grand-total', price)
            // const grandTotal = document.getElementById('grand-total').innerText;
            // const convertedGrandCost = parseInt(grandTotal);
            // const sum2 = convertedGrandCost + parseInt(price)


            // setNumberElementById('total-cost', sum);
            setNumberElementById('grand-total', sum2);

            // const sum = cost + parseInt(price);
            // const cost = getNumberElementById('total-cost')
        })

    }

    function lastClick(){
        hideElementById('main');
        hideElementById('header');
        hideElementById('footer');
        showElementById('success');

    }

    // coupon section

    const submitButton = document.getElementById('submit');
    const input = document.getElementById('input');

    input.addEventListener("keyup", (e) => {
        const value = e.currentTarget.value;
        if(value === "NEW15" || "Couple 20"){
            submitButton.disabled = true;
        }else{
            submitButton.disabled = false
        }
    })
