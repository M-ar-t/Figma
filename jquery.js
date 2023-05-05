jQuery(function(){

// подчеркивание ссылки при выделении
    var Links = $('.header-left-link')
    var idLink = []
    $.each(Links,function(index, value){
        idLink.push($(this).attr('href'))})
    // console.log(idLink);
    
    Links.on('click',function(){
        $.each(Links,function(index, value){
            idLink.push($(this).attr('href').substring(1))
            $(this).parent().css({
                'border-bottom': 'none'});
          });
        $(this).parent().css({
            'border-bottom': '4px white solid'});
    })


//подчеркивание ссылки при скроллинге на этот блок

        $('.sectionItem').on('mouseenter', function(){
            currentId = $(this)[0].id
            $.each(idLink, function(index, value){
                if(currentId == value.substring(1)){
                    Links.parent().css({
                        'border-bottom': 'none'});
                    $.each(Links, function(index, value){ 
                        if ($(Links[index]).attr('href').substring(1)==currentId){
                                    console.log($(Links[index]).attr('href'));
                                    $(Links[index]).parent().css({
                                'border-bottom': '4px white solid'});
                            }
                        })
                    
                }
            })

        })
        $('.fifth-sec-bottom-blok').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false, 
            autoplay:true,
            // speed:800,
            autoplaySpeed:1000,
            dots:true,
            variableWidth: true,
        });

    $('.slick-dots li button').text('')

    
    var ListImgSecSeven = $('.seven-sec-pic-item,.seven-sec-pic-item_with_desc')
    var ListNavBlokSecSeven = $('.seven-sec-nav-item')
    for (let index = 0; index < 4; index++) {
        $(ListImgSecSeven[index]).on( "mouseenter", ()=>{
            $(ListNavBlokSecSeven[index]).addClass('seven-sec-nav-item-active')
        } ).on("mouseleave", ()=>{
            $(ListNavBlokSecSeven[index]).removeClass('seven-sec-nav-item-active')})
    
    }

    function validEnter(curInput,validMes){
        curInput.on('blur', ()=>{
            if (curInput.val() == ''){
                curInput.removeClass('greenValid').addClass('redValid') 
                if ($(curInput.siblings()).length==0){
                    curInput.parent().append('<span class ="validSpan">'+validMes+'</span>')
                }
            }
            else{
                curInput.removeClass('redValid').addClass('greenValid')
                $(curInput.siblings(['validSpan'])).remove()
            }
        })
    }
    var curInput = [$('#nameInput') ,$('#subNameInput'), $('#emailInput'),$('#phoneInput')]
    var validMes = ['Enter your name!','Enter your subname!','Enter your Email!','Enter your phone number!']

    for (let index = 0; index < curInput.length; index++) {
        validEnter( curInput[index],validMes[index])
    }


    $('form').on('submit',(e)=>{
        e.preventDefault();
        var validName = false
        var validSubname = false
        var validEmail = false
        var validPhone = false


        if(validName == true && validSubname == true &&
            validEmail == true && validPhone == true){
            $('form').unbind().submit()
        }
    })
});