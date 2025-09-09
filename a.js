const scrollingElement = (document.scrollingElement || document.body);

const bot=()=> {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
function confirmation(){
    console.log("function_started");
    var check_val=document.getElementsByClassName('check');
    var list_i = new Array();
    for(val of check_val){
        if(val.checked == true) 
        {   
            list_i.push(val.getAttribute('id'));
            console.log(val.getAttribute('id'));
        }
    }
    if(list_i.length == 0){
        document.getElementById("c_one_desc").style.display="none";
        document.getElementById("c_two_desc").style.display="none";
        document.getElementById("c_three_desc").style.display="none";
        document.getElementById("c_four_desc").style.display="none";
        alert("Choose atleast one");
    }

    else{
        var result = "";
        var j = 1;
        const hobbies = ["Badminton", "Photography", "Movie Watching", "Listening Songs"];
        const ids = ["c_one", "c_two", "c_three", "c_four"]
        for (var i = 0; i < check_val.length; i++) {
            if (check_val[i].checked) {
                result += j + ". " + hobbies[i] + "\n";
                j++;
            }
        }

        alert("Please confirm your choices\n" + result);

        for (var i = 0; i < check_val.length; i++) {
            if (check_val[i].checked) {
                document.getElementById(ids[i] + "_desc").style.display="flex";
            }
            else document.getElementById(ids[i] + "_desc").style.display="none";
        }
    }
}