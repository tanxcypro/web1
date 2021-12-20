
function submitform() {
 let nama= document.getElementById("name").value
 let email=document.getElementById("input-email").value
 let pilih=document.getElementById("pilih").value
 let kata=document.getElementById("kata").value
 console.log(nama)
    
    
    if ((email=='')||(nama=='')||(pilih=='')||(kata=='') ) {
        alert (" harus diisi")
        
        
    }else{
        
    }

    let emailPenerima='afifmunajat@gmail.com'
    let a=document.createElement('a')
    a.href='mailto:'+emailPenerima+'?Subject='+nama+'&body='+kata+''
    a.click()
}

   