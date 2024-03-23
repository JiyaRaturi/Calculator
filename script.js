let str='0';
const display=document.querySelector(".dis");
let button=document.querySelectorAll(".btn");
let btn_array=Array.from(button);
let ans_hint=document.querySelector(".answer_hint");
let plus_minus=document.querySelector(".plus_minus");
display.innerHTML=str;
let check_bkt=false;
btn_array.forEach((btn)=>{
    btn.addEventListener('click', (ele)=>{
        if(ele.target.innerHTML=='C'){
            str='0';
            display.innerHTML=str;
            ans_hint.innerHTML=' ';
        }
        else if(ele.target.innerHTML=='='){
            let ans=eval(str);
            str=ans.toString();
            display.innerHTML=str;
            ans_hint.innerHTML=' ';
        }
        else if(ele.target.innerHTML=='+/-'){
            if(str.length==1 ){
                str='(-';
            }
            else{
                str+='(-';
            }
            display.innerHTML=str;
            check_bkt=true;
        }
        else{
            if(ele.target.innerHTML=='( )'){
                if(str.length==1 && str[0]=='0'){
                    str='(';
                    console.log("inside ( this" ,str);
                    check_bkt=true;
                }
                else{
                    if(check_bkt==true){
                        str+=')';
                        check_bkt=false;
                        ans_hint.innerHTML=eval(str);
                    }
                    else{
                        str+='(';
                        check_bkt=true;
                    }
                }
                display.innerHTML=str;
            }
            else if(str.length==1 && str[0]=='0'){
                str=ele.target.innerHTML;
                ans_hint.innerHTML=' ';
                display.innerHTML=str;
            }
            else{
                if(ele.target.innerHTML=='1' || ele.target.innerHTML=='2' || ele.target.innerHTML=='3' || ele.target.innerHTML=='4' || ele.target.innerHTML=='5' || ele.target.innerHTML=='6' || ele.target.innerHTML=='7' || ele.target.innerHTML=='8' || ele.target.innerHTML=='9' || ele.target.innerHTML=='0' ){
                    str+=ele.target.innerHTML;
                    console.log(str);
                    if((str.includes('+') || str.includes('-') || str.includes('*') || str.includes('/') || str.includes('%'))){
                        if(str.includes('(') && str.includes('-')){
                                if(str.includes(')') ){
                                 let temp=eval(str);
                                 ans_hint.innerHTML=temp;
                                 console.log("if eval hu");
                                }
                                else{
                                    display.innerHTML=str;
                                    console.log("if else hu");
                                }
                        }
                        else{
                            console.log("else hu");
                            ans_hint.innerHTML=eval(str);
                        }
                    }
                    else{
                        ans_hint.innerHTML=' ';
                    }
                }
                else if(ele.target.innerHTML=='+' || ele.target.innerHTML=='-' || ele.target.innerHTML=='*' || ele.target.innerHTML=='/' || ele.target.innerHTML=='%'){
                    str+=ele.target.innerHTML;
                    ans_hint.innerHTML=' ';
                }
                else{
                    str+=ele.target.innerHTML;
                }
                    display.innerHTML=str;
            }
        }
    })
}) 
const backspace=()=>{
    ans_hint.innerHTML=' ';
    if(str.length==1){
        str='0';
    }
    else if(str.length>0){
        str=str.slice(0, -1);
        console.log("hnji");
    }
    display.innerHTML=str;
}
