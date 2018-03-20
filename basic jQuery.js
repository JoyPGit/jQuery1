$(document).ready(()=>{
    let count = 1;
    $('.buttonhide1').click(()=>{
        count++;
        if(count%2==0){
            $('.para1').hide([5000]);
        }else($('.para1').show())
        
    })
})

$(document).ready(()=>{
    let count = 1;
    $('.buttonhide2').click(()=>{
        count++;
        if(count%2==0){
            $('.para2').hide([5000]);
        }else($('.para2').show())
        
    })
})

$(document).ready(()=>{
    let count = 1;
    $('.buttonhide3').click(()=>{
        count++;
        if(count%2==0){
            $('.para3').hide([5000]);
        }else($('.para3').show())
        
    })
})

$(document).ready(()=>{
    $('.modalcon').hide('5000');
    $('#modalButtonId').click(()=>{
    let a = $('.modalcon');
    alert(a);
    
    })

    

    $('#tabledivision2').click(function(){
        $('#tabledivision2').addClass('highlight');
        $('#tabledivision4').addClass('highlight');
        $('#tabledivision4').click();
        $('.DropDownList4').click();
        $('#tabledivision3').click();
        DropDownList1.Attributes.Add("onclick", "alert('DropdownClicked')");
        
       

  
    })
    
       
})
    

    

