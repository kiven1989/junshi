    //part1
    var name;
    var familyname;
    var checksexValue;
    var sex1;
    var telPhone;
    var email;
    var fox;
    var address;
    var postcode;
    var city;
    var country;
   
    var doctorName;  
    var desk;
    var hospital;
    var doctorTelphone;
    var doctorEmail;              
    var followState;
    
    //part2
    var patientSex;
    var checksexValue2;
    var patientName;
    var patientfamilyname;
    var patientBirday;
    var PatientWeight;
    
    //part3
    var adverseEvent_title;
    var adverseEvent_beginTime;
    var adverseEvent_endTime;
    var eventEnding;
    var checksexValue3;

    //part4
    var product_title;
    var medicine_beginTime;
    var medicine_endTime;
    var productType;
    var adaptationdisease;
    var dosage;
    var usagefrequency;
    var batchnumber;
	
	
	
    $("#sexSelect").change(function () {
       checksexValue=$("#sexSelect").val();
    });

    $("#sexSelect2").change(function () {
       checksexValue2=$("#sexSelect2").val();
    });
    
    $("#eventEndingSelect").change(function () {
       checksexValue3=$("#eventEndingSelect").val();
    });

    $(".steps div").eq(0).addClass('step-active');
    $(".step-list").hide();
    $("#aeFormStep1").show();
    
   $('input[type=radio][name=type]').change(function() {
        if (this.value == 'drugs') {
            alert("hello 1");
        }
        else if (this.value == 'vaccine') {
            alert("hello 2");
        }
  });
    $("#form-submit").click(function() {
        //获得附加信息
        var addMessageContent=$("#addMessageContent").val();
        var category_id=$("#category_id").val();
        var event_strjson = "";
        var event_arr = "";
        var event_lenEnd = document.getElementById("tab_0").rows.length;
        if (event_lenEnd > 0) {
            for (var j = 0; j < event_lenEnd; j++) {
                var id = j + 1;
                var adverseEvent_title1 = document.getElementById("adverseEvent_title" + id).value;
                var adverseEvent_beginTime1 = document.getElementById("adverseEvent_beginTime" + id).value;
                var adverseEvent_endTime1 = document.getElementById("adverseEvent_endTime" + id).value;
                var eventEnding1= document.getElementById("eventEnding" + id).value;
                event_arr += '{"adverseEvent_title":' + '"' + adverseEvent_title1 + '"' + ', "adverseEvent_beginTime":' + '"' + adverseEvent_beginTime1 + '"' + ', "adverseEvent_endTime":' + '"' + adverseEvent_endTime1 + '"' + ', "eventEnding":' + '"' + eventEnding1 + '"' + '}' + ',';
            }
        }
            event_arr = event_arr.substring(0, event_arr.length - 1);
            event_strjson = "[" + event_arr + "]";
        var product_strjson = "";
        var product_arr = "";
        var product_lenEnd = document.getElementById("tab_1").rows.length;
        if (product_lenEnd > 0) {
            for (var j = 0; j < product_lenEnd; j++) {
                var id = j + 1;
                var product_title1 = document.getElementById("product_title" + id).value;
                var adaptationdisease1 = document.getElementById("adaptationdisease" + id).value;
                var dosage1 = document.getElementById("dosage" + id).value;
                var usagefrequency1= document.getElementById("usagefrequency" + id).value;
                var batchnumber1 = document.getElementById("batchnumber" + id).value;
                var medicine_beginTime1 = document.getElementById("medicine_beginTime" + id).value;
                var medicine_endTime1= document.getElementById("medicine_endTime" + id).value;
                var productType1=document.getElementById("productType" + id).value;
                product_arr += '{"product_title":' + '"' + product_title1 + '"' + ',"productType":' + '"' + productType1 + '"' + ', "adaptationdisease":' + '"' + adaptationdisease1 + '"'+ ', "dosage":' + '"' + dosage1 + '"'+ ', "usagefrequency":' + '"' + usagefrequency1 + '"'+ ', "batchnumber":' + '"' + batchnumber1 + '"' + ', "medicine_beginTime":' + '"' + medicine_beginTime1 + '"'+ ', "medicine_endTime":' + '"' + medicine_endTime1 + '"' + '}' + ',';
            }
            }
            product_arr = product_arr.substring(0, product_arr.length - 1);
            product_strjson = "[" + product_arr + "]";

    

        $.ajax({
            type: 'post',
            url: "http://121.42.10.139:8028/index.php/api/Report/reportAdd",
            data: { 
                    //part1
                    name: name, 
                    languageType:1,
                    category_id:category_id,
                    familyname: familyname, 
                    sex1: sex1, 
                    telPhone: telPhone, 
                    fox: fox, 
                    address: address,
                    email: email, 
                    postcode: postcode, 
                    city: city, 
                    country: country, 
                    addMessageContent:addMessageContent,
                    //part2
                    doctorName: doctorName, 
                    desk: desk,
                    hospital: hospital, 
                    doctorTelphone: doctorTelphone, 
                    doctorEmail: doctorEmail, 
                    followState:followState,
                    //part3
                    patientName: patientName, 
                    patientfamilyname: patientfamilyname, 
                    patientBirday: patientBirday,
                    patientSex: patientSex, 
                    PatientWeight:PatientWeight,
                    //part4
                    event_list:event_strjson,
                    //part5
                    product_list:product_strjson
                              },
            dataType: "json",
			headers:{'token':'15738257957'},
            success: function (data) {
                if (data.code == 0) {
                    $("#msgalt").html(data.message);
                    console.log(data.msg)
                    $("#msgalt").show();
                    setTimeout(function () {
                        $("#msgalt").hide();
                        window.location.href="index.html";
                    }, 5000);
                    return false;
                } else {
                    $("#msgalt").html(data.message);
                    console.log(data.message)
                    $("#msgalt").show();
                    
                    setTimeout(function () {
                        $("#msgalt").hide();
                        window.location.href="index.html";
                    }, 5000);
                    return false;
                }
    
            },
            error: function (data) {
                $("#msgalt").html(data.msg);
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 5000);
                return false;
            }
    })
});
    
        // 1
        $("#gotostep2").click(function(event) {
            var validated = true;
            name=$("#username").val();
            familyname=$("#userfamilyname").val();
            telPhone=$("#userTelPhone").val();
            fox=$("#userFox").val();
            address=$("#address").val();
            email=$("#userEmail").val();
            postcode=$("#postcode").val();
            city=$("#city").val();
            country=$("#country").val();
            doctorName=$("#doctorName").val();
            desk=$("#desk").val();
            hospital=$("#hospital").val();
            doctorTelphone=$("#doctorTelphone").val();
            doctorEmail=$("#doctorEmail").val();
            
            if($("#RememberMe").prop('checked')){
                followState="是否愿意接受跟进随访： 是";
            }
            else{
                followState="是否愿意接受跟进随访： 否";
            }


            if($("#category_id").val()==1){
            if(!$("#RememberMe1").prop('checked')){
                $("#msgalt").html("请确认您是一名医生或医疗专业人士!");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            }
            }
            if (familyname == "") {
                $("#msgalt").html("姓氏不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            };

            if (checksexValue == "0" || checksexValue == null || checksexValue == "") {
                $("#msgalt").html("性别不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            };
            

            if(checksexValue=="1"){
                sex1="男";
                validated = false;
            }
            else{
                sex1="女";
                validated = false;
            }

            if(telPhone!=""){
                if(!(/^1(3|4|5|7|8)\d{9}$/.test(telPhone))){ 
                    $("#msgalt").html("手机号码有误，请重填！");
                    $("#msgalt").show();
                    setTimeout(function () {
                        $("#msgalt").hide();
                    }, 3000);
                    return false;
                    validated = false;
                }
            }

            if (telPhone == "" && email=="") {
                $("#msgalt").html("联系电话/电子邮箱地址必填一个！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            };

            if (country == "") {
                $("#msgalt").html("国家不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            };
            if (!validated) {
              $(".step-list").hide();
              $("#aeFormStep2").show();
              $(".steps div").removeClass('step-active');
              $(".steps div").eq(1).addClass("step-active");
            };
        });


            $('#gotostep3').click(function(event) {
              var validated = true;
                patientName=$("#patientName").val();
                PatientWeight=$("#PatientWeight").val();
                patientfamilyname=$("#patientfamilyname").val();
                patientBirday=$("#theme01").val();
                    
                    if (patientfamilyname == "") {
                $("#msgalt").html("姓氏不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            };

            if (PatientWeight == "") {
                $("#msgalt").html("体重不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            };

                    if (checksexValue2 == "0" || checksexValue2 == null || checksexValue2 == "") {
                    $("#msgalt").html("性别不能为空！");
                    $("#msgalt").show();
                    setTimeout(function () {
                        $("#msgalt").hide();
                    }, 3000);
                    return false;
                validated = false;
                    };


                if(checksexValue2=="1"){
                    patientSex="男";
                validated = false;
                }
                else{
                        patientSex="女";
                validated = false;
                    }
                if (!validated) {
                    $(".step-list").hide();
                    $("#aeFormStep3").show();
                    $(".steps div").removeClass('step-active');
                    $(".steps div").eq(2).addClass("step-active");
                }
            });

         $('#gotostep4').click(function(event) {
            var validated = true;
            var length=document.getElementById("tab_0").rows.length;
            if(length=="0"){
                $("#msgalt").html("不良事件数据不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            }
            if(validated){
            $(".step-list").hide();
            $("#aeFormStep4").show();
            $(".steps div").removeClass('step-active');
            $(".steps div").eq(3).addClass("step-active");}
          
          })

        $('#gotostep5').click(function(event) {
            var validated = true;
            var length=document.getElementById("tab_1").rows.length;
            if(length=="0"){
                $("#msgalt").html("产品信息数据不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                validated = false;
            }
            if(validated){
            $(".step-list").hide();
            $("#aeFormStep5").show();
            $(".steps div").removeClass('step-active');
            $(".steps div").eq(4).addClass("step-active");}
        })

        function product_add(){
            product_title=$("#product_title").val();
            medicine_beginTime=$("#theme04").val();
            medicine_endTime=$("#theme05").val();
            productType=$('input[name="productType"]:checked').val()
            
            var dosagetype=$('input[name="dosage"]:checked').val();
            if(dosagetype=="fixed"){
                dosage="使用固定剂量，240mg";
            }
            else if(dosagetype=="weight"){
                dosage="按体重使用,体重为:"+$("#PatientWeight").val()+"";            
            }
            else if(dosagetype=="other"){
                dosage="按实际使用剂量:"+$("#testdosage").val()+"";
            }
            adaptationdisease=$("#adaptationdisease").val();
            medicine_endTime=$("#theme05").val();
            var usagefrequencyType=$('input[name="usagefrequency"]:checked').val();
            if(usagefrequencyType!="otherUsagefrequency"){
                usagefrequency=usagefrequencyType;
            }
            else{
                if($("#usagefrequency").val()==""){
                    $("#msgalt").html("实际使用频率不能为空！");
                    $("#msgalt").show();
                    setTimeout(function () {
                        $("#msgalt").hide();
                    }, 3000);
                    return false;
                }
                else{
                    usagefrequency="按实际使用频率:"+$("#usagefrequency").val();
                }
                           
            }
            batchnumber=$("#batchnumber").val();
            
            if (product_title == "") {
                $("#msgalt").html("产品名称不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                };
            //事件时间判断
            var start = new Date(medicine_beginTime.replace("-", "/").replace("-", "/"));
            var end = new Date(medicine_endTime.replace("-", "/").replace("-", "/"));
            if(start>end){
                $("#msgalt").html("起始日期不能大于结束日期！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
            }
            //获取表的行数
            var tab = document.getElementById("tab_1").rows.length;
            //行数+1：代表要新增的行数的序号
            tabplus = parseInt(tab + 1);

            var newTr = document.getElementById("tab_1").insertRow();
            //添加列
            var newTd0 = newTr.insertCell();
            var newTd1 = newTr.insertCell();
            var newTd2 = newTr.insertCell();
            var newTd3 = newTr.insertCell();
            var newTd4 = newTr.insertCell();
            var newTd5 = newTr.insertCell();
            var newTd6 = newTr.insertCell();
            var newTd7 = newTr.insertCell();
            var newTd8 = newTr.insertCell();

            var str1 = "product_title" + tabplus.toString();
            var str2 = "adaptationdisease" + tabplus.toString();
            var str3 = "dosage" + tabplus.toString();
            var str4 = "usagefrequency" + tabplus.toString();
            var str5 = "batchnumber" + tabplus.toString();
            var str6 = "medicine_beginTime" + tabplus.toString();
            var str7 = "medicine_endTime" + tabplus.toString();
            var str8 = "productType" + tabplus.toString();
            
            newTd0.innerHTML = '<td ><input type="text" id="' + str1 + '" value="' +product_title + '" disabled="disabled" /></td>';
            newTd1.innerHTML = '<td ><input type="text" id="' + str2 + '" value="' +adaptationdisease + '" disabled="disabled" /></td>';
            newTd2.innerHTML = '<td ><input type="text" id="' + str3 + '" value="' +dosage + '" disabled="disabled" /></td>';
            newTd3.innerHTML = '<td ><input type="text" id="' + str4 + '" value="' +usagefrequency + '" disabled="disabled" /></td>';
            newTd4.innerHTML = '<td ><input type="text" id="' + str5 + '" value="' +batchnumber + '" disabled="disabled" /></td>';
            newTd5.innerHTML = '<td ><input type="text" id="' + str6 + '" value="' +medicine_beginTime + '" disabled="disabled" /></td>';
            newTd6.innerHTML = '<td ><input type="text" id="' + str7 + '" value="' +medicine_endTime + '" disabled="disabled" /></td>';
            newTd7.innerHTML = '<td ><input type="text" id="' + str8 + '" value="' +productType + '" disabled="disabled" /></td>';
            newTd8.innerHTML = '<td ><a class=\"delete\" onclick="product_del(' + tabplus + ')">删除</a><td>';
            
            $("#product_title").val("");
            $("#adaptationdisease").val("");
            $("#batchnumber").val("");
            $('input[name="usagefrequency"]:eq(0)').prop("checked",true);
            $('input[name="productType"]:eq(0)').prop("checked",true);
            $('input[name="dosage"]:eq(0)').prop("checked",true);
        }

        function product_del(id){
            var mytable = document.getElementById("tab_1");
            //获取表的行数
            var len = document.getElementById("tab_1").rows.length;

            //获取删除的行的开头序号
            var rowid = document.getElementById("product_title" + id).parentNode.parentNode.rowIndex;
            
            if (document.getElementById("product_title" + id).value != "") {
                if (window.confirm("确认删除吗？")) {
                    rowid = parseInt(rowid -1);
                    mytable.deleteRow(rowid);
                }
                else {
                    return false;
                }
            }
            else {
                mytable.deleteRow(rowid);
            }
            //<!--如果不是删除最后一行，先将后面行输入的数据保存-->
            if (id < len) {
                var txtContent = new Array([len - id]);
                var txtHours = new Array([len - id]);
                var k = 0;
                for (var i = id; i < len; i++) {
                    var a = parseInt(i+1);
                    txtContent[k] = document.getElementById("adverseEvent_title" + a).value;
                    txtHours[k] = document.getElementById('eventEnding' + a).value;
                    mytable.deleteRow(document.getElementById("txtNum" + a).parentNode.parentNode.rowIndex);
                    k++;
                }
                // <!--删除以后重排序。-->
                for (var i = 0; i < k; i++) {
                    funNew_add();
                    var b = parseInt(i + id);
                    document.getElementById('adverseEvent_title' + b).value = txtContent[i];
                    document.getElementById('eventEnding' + b).value = txtHours[i];
                }
            }
        }

        function event_add(){
            adverseEvent_title=$("#adverseEvent_title").val();
            adverseEvent_beginTime=$("#theme02").val();
            adverseEvent_endTime=$("#theme03").val();
            if(checksexValue3=="1"){
                    eventEnding="痊愈无后遗症";
                }
            else if(checksexValue3=="2"){
                    eventEnding="好转有后遗症";
                }
            else if(checksexValue3=="3"){
                    eventEnding="好转中";
                }
            else if(checksexValue3=="4"){
                    eventEnding="导致死亡";
                }
            else if(checksexValue3=="5"){
                    eventEnding="不知道";
                }
            else{
                eventEnding="未提供";
            }
            if (adverseEvent_title == "") {
                $("#msgalt").html("不良事件名称不能为空！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
                };
            //事件时间判断
            var start = new Date(adverseEvent_beginTime.replace("-", "/").replace("-", "/"));
            var end = new Date(adverseEvent_endTime.replace("-", "/").replace("-", "/"));
            if(start>end){
                $("#msgalt").html("开始日期不能大于结束日期！");
                $("#msgalt").show();
                setTimeout(function () {
                    $("#msgalt").hide();
                }, 3000);
                return false;
            }
            //获取表的行数
            var tab = document.getElementById("tab_0").rows.length;
            //行数+1：代表要新增的行数的序号
            tabplus = parseInt(tab + 1);

            var newTr = document.getElementById("tab_0").insertRow();
            //添加列
            var newTd0 = newTr.insertCell();
            var newTd1 = newTr.insertCell();
            var newTd2 = newTr.insertCell();
            var newTd3 = newTr.insertCell();
            var newTd4 = newTr.insertCell();

            var str1 = "adverseEvent_title" + tabplus.toString();
            var str2 = "adverseEvent_beginTime" + tabplus.toString();
            var str3 = "adverseEvent_endTime" + tabplus.toString();
            var str4 = "eventEnding" + tabplus.toString();
            
            newTd0.innerHTML = '<td ><input type="text" id="' + str1 + '" value="' +adverseEvent_title + '" disabled="disabled" /></td>';
            newTd1.innerHTML = '<td ><input type="text" id="' + str2 + '" value="' +adverseEvent_beginTime + '" disabled="disabled" /></td>';
            newTd2.innerHTML = '<td ><input type="text" id="' + str3 + '" value="' +adverseEvent_endTime + '" disabled="disabled" /></td>';
            newTd3.innerHTML = '<td ><input type="text" id="' + str4 + '" value="' +eventEnding + '" disabled="disabled" /></td>';
            newTd4.innerHTML = '<td ><a class=\"delete\" onclick="event_del(' + tabplus + ')">删除</a><td>';
            
            $("#adverseEvent_title").val("");
         }

        function event_del(id){
            var mytable = document.getElementById("tab_0");
            //获取表的行数
            var len = document.getElementById("tab_0").rows.length;

            //获取删除的行的开头序号
            var rowid = document.getElementById("adverseEvent_title" + id).parentNode.parentNode.rowIndex;
            
            if (document.getElementById("adverseEvent_title" + id).value != "" || document.getElementById("eventEnding" + id).value != "") {
                if (window.confirm("确认删除吗？")) {
                    rowid = parseInt(rowid -1);
                    mytable.deleteRow(rowid);
                }
                else {
                    return false;
                }
            }
            else {
                mytable.deleteRow(rowid);
            }
            //<!--如果不是删除最后一行，先将后面行输入的数据保存-->
            if (id < len) {
                var txtContent = new Array([len - id]);
                var txtHours = new Array([len - id]);
                var k = 0;
                for (var i = id; i < len; i++) {
                    var a = parseInt(i+1);
                    txtContent[k] = document.getElementById("adverseEvent_title" + a).value;
                    txtHours[k] = document.getElementById('eventEnding' + a).value;
                    mytable.deleteRow(document.getElementById("txtNum" + a).parentNode.parentNode.rowIndex);
                    k++;
                }
                // <!--删除以后重排序。-->
                for (var i = 0; i < k; i++) {
                    funNew_add();
                    var b = parseInt(i + id);
                    document.getElementById('adverseEvent_title' + b).value = txtContent[i];
                    document.getElementById('eventEnding' + b).value = txtHours[i];
                }
            }
        }
    /* Step 1*/
    $("#backtostep1").click(function() {
        $(".step-list").hide();
        $("#aeFormStep1").show();
        $(".steps div").removeClass('step-active');
        $(".steps div").eq(0).addClass('step-active');
    });
    /* Step 2*/
    /* Step 3 */
    $("#backtostep2").click(function() {
        $(".step-list").hide();
        $("#aeFormStep2").show();
        $(".steps div").removeClass('step-active');
        $(".steps div").eq(1).addClass('step-active');
    });
    $("#backtostep3").click(function() {
        $(".step-list").hide();
        $("#aeFormStep3").show();
        $(".steps div").removeClass('step-active');
        $(".steps div").eq(2).addClass('step-active');
    });
    $("#backtostep4").click(function() {
        $(".step-list").hide();
        $("#aeFormStep4").show();
        $(".steps div").removeClass('step-active');
        $(".steps div").eq(3).addClass('step-active');
    });
    $("#backtostep5").click(function() {
        $("#trackerContainer").show();
        $("#aeFormStep5").show();
        $("#errorContainer").hide();
        $(".steps div").removeClass('step-active');
        $(".steps div").eq(4).addClass('step-active');
    });