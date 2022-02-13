const hamburger = document.getElementById('hamburg'),
       hamburgerBtn =document.getElementById('menuBox'),


       // CancelBtn
        cancelBtn = document.getElementById('hamgurgerCloseBtn');


       

    

;

// Listeners
loudListeners();


function loudListeners() {
    hamburger.addEventListener('click', function() {
       hamburgerBtn.style.display = 'block';

       cancelBtn.style.display = 'block';

       hamburger.style.display = 'none';
       

    });

    closeMenuBox()
};


function closeMenuBox() {
    document.getElementById('hamgurgerCloseBtn').addEventListener('click', function() {
       x = document.getElementById('menuBox').style.display = 'none'
       hamburgerBtn.style.display = 'none';
       cancelBtn.style.display = 'none';
       hamburger.style.display = 'block';

      
    });

};


