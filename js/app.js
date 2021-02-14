'use strict';
let hours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 
let seattleCookies = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=seattleCookies.max-seattleCookies.min;
        let randomCount=Math.random() * range+seattleCookies.min;
         return Math.ceil(randomCount);
      },
      
    

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(seattleCookies.randomCust() *seattleCookies.avgCookieSale);
            seattleCookies.hourlySales.push(numOfCookies);
            seattleCookies.dailySales += numOfCookies;
        }
    },
    render: function () {
        let divEl = document.getElementById('body');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let header2 = document.createElement('h2');
        articleEl.appendChild(header2);
        header2.textContent = this.location;
        
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        
        let liEl; 
        for(let i = 0 ; i <hours.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i]+': '+seattleCookies.hourlySales[i]+' cookies';
        }
        }
    }
seattleCookies.hourlyDailySales();
seattleCookies.render();


let tokyoCookies = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookieSale: 1.2,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=tokyoCookies.max-tokyoCookies.min;
        let randomCount=Math.random() * range+tokyoCookies.min;
         return Math.ceil(randomCount);
      },
      
    

    hourlyDailySales :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(tokyoCookies.randomCust() *tokyoCookies.avgCookieSale);
            tokyoCookies.hourlySales.push(numOfCookies);
            tokyoCookies.dailySales += numOfCookies;
        }
    },
    render: function () {
        let divEl = document.getElementById('body');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let header2 = document.createElement('h2');
        articleEl.appendChild(header2);
        header2.textContent = this.location;
        
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        
        let liEl; 
        for(let i = 0 ; i <hours.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i]+': '+tokyoCookies.hourlySales[i]+' cookies';
        }
        }
    }
    tokyoCookies.hourlyDailySales();
    tokyoCookies.render();


    let dubaiCookies = {
        location: 'dubai',
        min: 11,
        max: 38,
        avgCookieSale: 3.7,
        hourlySales:[],
        dailySales:0,
    
       randomCust :function () {
            let range=dubaiCookies.max-dubaiCookies.min;
            let randomCount=Math.random() * range+dubaiCookies.min;
             return Math.ceil(randomCount);
          },
          
        
    
        hourlyDailySales :function () {
            for (let i=0;i<hours.length;i++){
                let numOfCookies= Math.ceil(dubaiCookies.randomCust() *dubaiCookies.avgCookieSale);
                dubaiCookies.hourlySales.push(numOfCookies);
                dubaiCookies.dailySales += numOfCookies;
            }
        },
        render: function () {
            let divEl = document.getElementById('body');
            let articleEl = document.createElement('article');
            divEl.appendChild(articleEl);
            let header2 = document.createElement('h2');
            articleEl.appendChild(header2);
            header2.textContent = this.location;
            
            let ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            
            let liEl; 
            for(let i = 0 ; i <hours.length; i++)
            {
                liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = hours[i]+': '+dubaiCookies.hourlySales[i]+' cookies';
            }
            }
        }
        dubaiCookies.hourlyDailySales();
        dubaiCookies.render();

        let pariscookies = {
            location: 'Paris',
            min: 20,
            max: 38,
            avgCookieSale: 2.3,
            hourlySales:[],
            dailySales:0,
        
           randomCust :function () {
                let range=pariscookies.max-pariscookies.min;
                let randomCount=Math.random() * range+pariscookies.min;
                 return Math.ceil(randomCount);
              },
              
            
        
            hourlyDailySales :function () {
                for (let i=0;i<hours.length;i++){
                    let numOfCookies= Math.ceil(pariscookies.randomCust() *pariscookies.avgCookieSale);
                    pariscookies.hourlySales.push(numOfCookies);
                    pariscookies.dailySales += numOfCookies;
                }
            },
            render: function () {
                let divEl = document.getElementById('body');
                let articleEl = document.createElement('article');
                divEl.appendChild(articleEl);
                let header2 = document.createElement('h2');
                articleEl.appendChild(header2);
                header2.textContent = this.location;
                
                let ulEl = document.createElement('ul');
                articleEl.appendChild(ulEl);
                
                let liEl; 
                for(let i = 0 ; i <hours.length; i++)
                {
                    liEl = document.createElement('li');
                    ulEl.appendChild(liEl);
                    liEl.textContent = hours[i]+': '+pariscookies.hourlySales[i]+' cookies';
                }
                }
            }
            pariscookies.hourlyDailySales();
            pariscookies.render();


        let limaCookies = {
            location: 'Lima',
            min: 2,
            max: 16,
            avgCookieSale: 4.6,
            hourlySales:[],
            dailySales:0,
        
           randomCust :function () {
                let range=limaCookies.max-limaCookies.min;
                let randomCount=Math.random() * range+limaCookies.min;
                 return Math.ceil(randomCount);
              },
              
            
        
            hourlyDailySales :function () {
                for (let i=0;i<hours.length;i++){
                    let numOfCookies= Math.ceil(limaCookies.randomCust() *limaCookies.avgCookieSale);
                    limaCookies.hourlySales.push(numOfCookies);
                    limaCookies.dailySales += numOfCookies;
                }
            },
            render: function () {
                let divEl = document.getElementById('body');
                let articleEl = document.createElement('article');
                divEl.appendChild(articleEl);
                let header2 = document.createElement('h2');
                articleEl.appendChild(header2);
                header2.textContent = this.location;
                
                let ulEl = document.createElement('ul');
                articleEl.appendChild(ulEl);
                
                let liEl; 
                for(let i = 0 ; i <hours.length; i++)
                {
                    liEl = document.createElement('li');
                    ulEl.appendChild(liEl);
                    liEl.textContent = hours[i]+': '+limaCookies.hourlySales[i]+' cookies';
                }
                }
            }
            limaCookies.hourlyDailySales();
            limaCookies.render();


        




       
  