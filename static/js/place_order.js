window.onload = function(){
    var dizhiErrorSpan = document.getElementById("dizhiError")
    var dizhiElt = document.getElementById("dizhi")
    dizhiElt.onblur=function(){
        var dizhi = dizhiElt.value
        dizhi = dizhi.trim()
        if(dizhi){
            var regExp = /^.+(区|镇).+(路|街).+号.+号楼.+单元.+(室|户).*$/;
            var ok = regExp.test(dizhi);
            if(ok){

            }else{
                dizhiErrorSpan.innerText="收获地址不合法";
            }
        }else{
            dizhiErrorSpan.innerText="收获地址不能为空"
        }
    }
    dizhiElt.onfocus = function(){
        if(dizhiErrorSpan.innerText!=""){
            dizhiElt.value = "";
        }
        dizhiErrorSpan.innerText="";
    }
    var shouhuoElt = document.getElementById("shouhuo")
    var shouhuoErrorSpan = document.getElementById("shouhuoError")
    shouhuoElt.onblur = function(){
       var shouhuoren = shouhuoElt.value
        var shouhuoren = shouhuoren.trim()
        if(shouhuoren){
            var regExp = /^[\u4E00-\u9FA5]{0,}$/;
            var ok = regExp.test(shouhuoren)
            if(ok){

            }else{
                shouhuoErrorSpan.innerText="收货人输入不合法"
            }
        }else{
            shouhuoErrorSpan.innerText="收货人不能为空"
        }
    }
    shouhuoElt.onfocus = function(){
        if(shouhuoErrorSpan.innerText!=""){
            shouhuoElt.value="";
        }
        shouhuoErrorSpan.innerText = ""
    }
    var dianhuaElt = document.getElementById("dianhua")
    var dianhuaErrorSpan = document.getElementById("dianhuaError")
    dianhuaElt.onblur = function(){
        var dianhua = dianhuaElt.value
        var dianhua = dianhua.trim()
        if(dianhua){
            var regExp = /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/;
            var ok = regExp.test(dianhua)
            if(ok){

            }else{
                dianhuaErrorSpan.innerText="联系电话输入不合法"
            }
        }else{
            dianhuaErrorSpan.innerText="联系电话不能为空"
        }
    }
    dianhuaElt.onfocus= function(){
        if(dianhuaErrorSpan.innerText!=""){
            dianhuaElt.value = ""
        }else{
        }
        dianhuaErrorSpan.innerText=""
        }

        var jieshuElt = document.getElementById("jieshu")
        jieshuElt.onclick=function(){
            dizhiElt.focus();
            dizhiElt.blur();
            shouhuoElt.focus();
            shouhuoElt.blur();
            dianhuaElt.focus();
            dianhuaElt.blur();
            if(dianhuaErrorSpan.innerText=="" && shouhuoErrorSpan.innerText=="" && dianhuaErrorSpan.innerText==""){
                var form = document.getElementById("formElt")
                form.submit()
            }
        }
}