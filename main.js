function getVal() {
    
    const princiapl = document.querySelector('.princiapl').value;
    const term = document.querySelector('.term').value;
    const annual_rate = document.querySelector('.annual_rate').value/100;
    let mm = document.querySelector("#mm").value;
    let dd = document.querySelector("#dd").value;
    let yy = document.querySelector("#yy").value;
    
    let num_of_payments=term*12;
    let monthly_rate=annual_rate/12;
    let mortgage_payment=princiapl*(monthly_rate*Math.pow((1+monthly_rate),num_of_payments))/((Math.pow((1+monthly_rate),num_of_payments)-1));
    let months_counter=1;
    let beginning_balance=princiapl;
    let payment=mortgage_payment;
    let interest_p=beginning_balance*monthly_rate;
    let principal_p=mortgage_payment-interest_p;
    let ending_balance=beginning_balance-principal_p;


    document.querySelector("#prif").textContent=princiapl;
    document.querySelector("#termf").textContent=term;
    document.querySelector("#arf").textContent=annual_rate*100;
    document.querySelector("#idf").textContent=` ${mm}/${dd}/${yy}`;
    document.querySelector("#nopf").textContent=num_of_payments;
    document.querySelector("#mrf").textContent=monthly_rate.toFixed(5);
    document.querySelector("#mpf").textContent=mortgage_payment.toFixed(2);

    

    const mainpars = document.querySelector(".mainpars");
    mainpars.classList.add("mainpars2");




    function tableCreate() {
        
    const tablee = document.querySelector(".table"),
        tbl = document.createElement('table');
            for (let i = 0; i <= num_of_payments; i++) 
            {
            
                const tr = tbl.insertRow();
                if(i%2!=0)
                {
                    tr.style.backgroundColor="rgb(182, 182, 182)";
                }
                else
                {
                    tr.style.backgroundColor="white";
                }
                for (let j = 1; j <= 7; j++) 
                {    const td = tr.insertCell();
                    //thead
                    if(j==1 && i==0)
                    {
                        td.appendChild(document.createTextNode(`Monthes:`));
                        td.style.borderColor="balck";
                    }
                    if(j==2 && i==0)
                    td.appendChild(document.createTextNode(`Date:`));
                    if(j==3 && i==0)
                    td.appendChild(document.createTextNode(`Beginning Balance`));
                    if(j==4 && i==0)
                    td.appendChild(document.createTextNode(`Payment:`));
                    if(j==5 && i==0)
                    td.appendChild(document.createTextNode(`Interest:`));
                    if(j==6 && i==0)
                    td.appendChild(document.createTextNode(`Principal:`));
                    if(j==7 && i==0)
                    td.appendChild(document.createTextNode(`Ending Balance:`));
                    //tbody
                    if(j==1 && i>0)
                    {
                        td.appendChild(document.createTextNode(months_counter));
                        months_counter++;
                    }
                    if(j==2 && i>0)
                    {
                        td.appendChild(document.createTextNode(` ${mm}/${dd}/${yy}`));
                        
                        if(mm!=12)
                        {
                            mm++;
                            
                        }
                        else
                        {
                            if((yy%10)!=9)
                            {
                                yy++;
                                mm=1;
                            }
                            else
                            {
                                
                                yy/=10;
                                yy=Math.floor(yy);
                                lastd=yy%10;
                                lastd+=1;
                                lastd=Math.floor(lastd);
                                lastd*=10;
                                yy/=10;
                                yy=Math.floor(yy);
                                yy*=100;
                                yy+=lastd;
                                mm=1;
                            }
                        }
                    }
                    
                    if(j==3 && i>0)
                    {
                        td.appendChild(document.createTextNode(beginning_balance));
                        beginning_balance=ending_balance.toFixed(2);
                    }
                    
                    if(j==4 && i>0)
                    {   
                        td.appendChild(document.createTextNode(payment.toFixed(2)));
                    }
                    
                    if(j==5 && i>0)
                    {
                        td.appendChild(document.createTextNode(interest_p.toFixed(2)));
                        interest_p=beginning_balance*monthly_rate;
                    }
                        
                    if(j==6 && i>0)
                    {
                        
                        td.appendChild(document.createTextNode(principal_p.toFixed(2)));
                        principal_p=mortgage_payment-interest_p;
                    }
                    
                    if(j==7 && i>0)
                    {
                        if(i != num_of_payments)
                        {
                            td.appendChild(document.createTextNode(ending_balance.toFixed(2)));
                            ending_balance-=principal_p;
                        }
                        else
                        {
                            td.appendChild(document.createTextNode(`0`));
                        }
                        
                        
                    }
                    
                }
    }
    tablee.appendChild(tbl);
}

tableCreate();

}


let span = document.querySelector(".movingbtn");
window.onscroll = function()
{
    if(this.scrollY>=500)
    {
        span.classList.add("show");
    }
    else
    {
        span.classList.remove("show");
    }
};


// let form = document.querySelector(".form");
// let btn = document.querySelector(".btn");
// {
//     if(btn.onclick())
//     {
//         form.style.display="none";
//     }
//     else
//     {
//         span.classList.add("form");
//     }
// };


    








