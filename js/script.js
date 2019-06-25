(function(){
    var $menu = document.getElementsByName('header');

    //menu movel
    var $navigationMenu = document.querySelector('[data-js="btn_menu_nav"]');
    $navigationMenu.addEventListener('click', navigation);
    //window.addEventListener('click', navigation)

    function navigation(){
        document.body.classList.toggle('move')
        document.body.classList.toggle('show');

    };


    window.addEventListener('scroll', setupNav);
    
    function setupNav(){
        var posYScroll = getYscroll()
        
        if(posYScroll > 300 && !hasClassFx()){
            document.body.classList.add('fx');
        } 
        
        if(posYScroll <= 300 && hasClassFx()) {
            document.body.classList.remove('fx');
        }
    }
    
    function getYscroll(){
        return window.pageYOffset;
    }
    
    function hasClassFx(){
        return !!document.querySelector('.fx')
    }
})()