$('.autoModel').click(function(){
    $('.autoModel').removeClass('current');
    $(this).addClass('current');
    var carName =  $(this).data('name');
    $('.autoShow').attr('class', 'autoShow');
    $('.autoShow').addClass('current-' + carName);
})

$(".wholly").click(function(){
    $(".carCitroen").css("display","none");
    $(".carCitroenWholly").css("display","block");
}) 

$(".standardPlusPlusPlus").click(function(){
    $(".carCitroen").css("display","none");
    $(".carCitroenStandardPlusPlusPlus").css("display","block");
}) 

$(".standardPlusPlus").click(function(){
    $(".carCitroen").css("display","none");
    $(".carCitroenStandardPlusPlus").css("display","block");
}) 

$(".standardPlus").click(function(){
    $(".carCitroen").css("display","none");
    $(".carCitroenStandardPlus").css("display","block");
}) 

$(".standard").click(function(){
    $(".carCitroen").css("display","none");
    $(".carCitroenStandard").css("display","block");
}) 

