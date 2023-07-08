        var typed = new Typed(".type",{
            strings:["Web Developer", "Competitive Programmer", "Graphic Designer"],
            typeSpeed: 70,
            backSpeed: 65,
            loop: true
        })
        // Start Nav Scroll....
        let nav = document.querySelector('nav');
        window.addEventListener('scroll',()=>{
            nav.classList.toggle('nav-scroll',window.scrollY>0);
        })
      
      // Start About Title Tab Active
        let allTabTitles = document.querySelectorAll('.about-tabs-title h5');
        
        
        let removeActive = ()=>{
            allTabTitles.forEach(tabtitle=>{
                tabtitle.classList.remove('active');
            });     
        }
        allTabTitles.forEach(tabtitle =>{
            tabtitle.addEventListener('click' , ()=>{
                removeActive();
                tabtitle.classList.add('active');
            });
        });
        // Start About Tab....
        let tab1 = document.querySelector('.about-tab1');
        let tab2 = document.querySelector('.about-tab2');
        let tab3 = document.querySelector('.about-tab3');
        
        let title1 = document.querySelector('.title1');
        let title2 = document.querySelector('.title2');
        let title3 = document.querySelector('.title3');

        title1.addEventListener('click' , ()=>{
            tab1.style.display='block';
            tab2.style.display='none';
            tab3.style.display='none';
        });
        title2.addEventListener('click' , ()=>{
            tab2.style.display='block';
            tab3.style.display='none';
            tab1.style.display='none';
        });

        title3.addEventListener('click' , ()=>{
            tab3.style.display='block';
            tab2.style.display='none';
            tab1.style.display='none';
        });
          // Start Phone Menu...
          
