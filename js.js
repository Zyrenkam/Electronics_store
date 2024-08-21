var counter = {};

for (var i=0; i<=35; i++){
    counter[i] = 0;
}


function func(num){
    console.log(counter);
    if (counter[Number(num)] % 2 == 0){
        var image = document.getElementById('img ' + num);
        image.style.display = 'none';
    
        var text = document.getElementById('desc ' + num);
        text.style.display = 'block';

        counter[Number(num)]++;
    }else{
        var image = document.getElementById('img ' + num);
        image.style.display = 'block';
    
        var text = document.getElementById('desc ' + num);
        text.style.display = 'none';

        counter[Number(num)]++;
    }
    return;
}



//-------------------------------------------------------

var input,search,pr,result,result_arr, result_store;

function FindOnPage(name, status) {

	input = document.getElementById(name).value;
	
	if (input.length<1 && status==true) {
		alert('Для поиска вы должны ввести два или более символов');
        location.reload();
	}  
    
    function FindOnPageGo() {
        search = '/'+input+'/g';  //делаем из строки регуярное выражение
	    pr = document.body.innerHTML;   
	    result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
	    result_arr = []; 

        for(var i=0; i<result.length; i++) {
	        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:#94a5cc; border-radius:9px;">'+input+'</span>');
        }
	    for(var i=0; i<result.length;i++) {
		    pr=pr.replace(result[i],result_arr[i]);
		}
	    document.body.innerHTML = pr;

    }

    if(status) { 
        FindOnPageGo();
    }

	
    if(!status) { location.reload();}
}

