
'use strict';
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let table = document.getElementById('container');
function Location(location ,minCustomer,maxCoustomer,avgperSale){
    this.location = location ;
    this.minCustomer = minCustomer ;
    this.maxcoustomer =maxCoustomer;
    this.avgperSale = avgperSale ;
    this.headerRaw=headerRaw;
    this.total=0 ;
    this.randomCustomers=[];
    this.numOfCookiesSoldPerHour=[];

};
Location.prototype.randomCustomerPerHour=function(){
    for(let i = 0 ; i < hours.length ; i++){
        this.randomCustomers.push(randomValue(this.minCustomer ,this.maxcoustomer));
    }
    console.log(this.randomCustomers)
};
Location.prototype.cookiesSoldPerHour=function(){
    for(let i = 0 ; i < hours.length; i++){
    this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgperSale));
    this.total = this.total + this.numOfCookiesSoldPerHour[i];
    }
};

Location.prototype.render =function(){

    let trEl=document.createElement('tr');
    table.appendChild(trEl);
    let td1El =document.createElement('td');
    trEl.appendChild(td1El);
    td1El.textContent=this.location
    for(let i=0;i<hours.length;i++)
    {
        let tdEl = document.createElement('td');
        console.log (this.numOfCookiesSoldPerHour[i])
        tdEl.textContent= this.numOfCookiesSoldPerHour[i]
        trEl.appendChild(tdEl);
    }
    let td2El = document.createElement('td');
    trEl.appendChild(td2El);
    td2El.textContent=this.total;
};

function headerRaw(){
    let trEl=document.createElement('tr');
    let th2El =document.createElement('th');
  trEl.appendChild(th2El);
  th2El.textContent='';

    table.appendChild(trEl);
    for (let i=0 ;i<hours.length;i++){
        let thEl= document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent= hours[i];
        
    }
  let th1El =document.createElement('th');
  trEl.appendChild(th1El);
  th1El.textContent='daily location total ';
}





let seattle = new Location ('seattle',23,65,6.3);
seattle.randomCustomerPerHour();
seattle.cookiesSoldPerHour();
seattle.headerRaw();

seattle.render();
console.log(seattle);

let tokyo = new Location ('tokyo',3,24,1.2);
tokyo.randomCustomerPerHour();
tokyo.cookiesSoldPerHour();
tokyo.render();
console.log(tokyo);

let dubai =new Location ('dubai',11,38,3.7);
dubai.randomCustomerPerHour();
dubai.cookiesSoldPerHour();
dubai.render();
console.log(dubai);

let paris= new Location ('paris',20,38,2.3);
paris.randomCustomerPerHour();
paris.cookiesSoldPerHour();
paris.render();
console.log (paris);

let lima = new Location ('lima',2,16,4.6);
lima.randomCustomerPerHour();
lima.cookiesSoldPerHour();
lima.render();
console.log(lima);

function footerRaw(){
    let trEl=document.createElement('tr');
    table.appendChild(trEl);
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent ='Total';
    for(let i=0; i<seattle.numOfCookiesSoldPerHour.length;i++){
        let thEl=document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = seattle.numOfCookiesSoldPerHour[i] + tokyo.numOfCookiesSoldPerHour[i] + dubai.numOfCookiesSoldPerHour[i] + paris.numOfCookiesSoldPerHour[i] + lima.numOfCookiesSoldPerHour[i]
    }
    let th2El=document.createElement('th');
    trEl.appendChild(th2El);
    th2El.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total
} 
footerRaw();






    render:function(){
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.location;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
        }
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  'Total : ' + this.total + ' Cookies';

    }
}
lima .randomCustomerPerHour();
lima .cookiesSoldPerHour();
lima .render();

function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
        




       
  