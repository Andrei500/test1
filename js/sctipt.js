//������ ����������� ����
var hidemenu = true;
$(".butt-menu").bind("click",function(){
	if(hidemenu){
		$(".main_menu ul").addClass("visible-nav");
		hidemenu = false;}
	else{
		$(".main_menu ul").removeClass("visible-nav");
		hidemenu = true;}
});

//���������� �����
$("#regsub").bind("click",function(){
	$(".form-alert").css("display","block");
});

//�������� �����
var nonehide = false;
$(".form-alert form").bind("click",function(){nonehide=true;});//���������� �������� ��� ������� �� �����
$(".form-alert").bind("click",function(){
	if(nonehide==false){
		$(".form-alert").css("display","none");}	//������� ���� ��� ����������
	nonehide=false;	//����� ��������
});


//�������� ������ 
$("#reg2").bind("click",function(){
	//��������� ������ �����
	
	var val1 = $("input[name='type']:checked").val();
	if(!val1){
		var err1 = true;//�� ������ ��� �����
	}

	var nomer = $("input[name='nomer']").val();
	if(nomer.length != 13) {
		var err2 = true;//������������ ���� � ������
		$("input[name='nomer']").css("border-color","red");
	}else $("input[name='nomer']").css("border-color","#ccc");
	
	
	var name1 = $("input[name='name1']").val();
	if(name1.length < 1) {
		var err3 = true;//�� ������ ��� 1
		$("input[name='name1']").css("border-color","red");
	}else $("input[name='name1']").css("border-color","#ccc");
	
	
	var name2 = $("input[name='name2']").val();
	if(name2.length < 1) {
		var err4 = true;//�� ������ ��� 2
		$("input[name='name2']").css("border-color","red");
	}else $("input[name='name2']").css("border-color","#ccc");
	
	
	var num = $("input[name='num']").val();
	if(num.length < 1) {
		var err5 = true;//�� ������ ��� ���������
		$("input[name='num']").css("border-color","red");
	}else $("input[name='num']").css("border-color","#ccc");

	//�������� ������ ��������
	var sit = $("select[name='sit']").val();
	var pay = $("select[name='pay']").val();
	
	//�������� ���� ������ ���
	if(!err1 && !err2 && !err3 && !err4 && !err5){	
		//Ajax
		$.ajax({										
			url: "action.php",					//���� ����� ����������� ������
			type: "POST",
			data: ({val1: val1, nomer: nomer, name1: name1 ,name2: name2, num: num, sit: sit, pay: pay}),				//������ ��� ��������
			dataType: "html",
			success: funcSucc					//����������� �������
		});
		
		//�������� ����� ����� ��������
		function funcSucc(data){
			$(".form-alert").css("display","none");
		};
	}
});





	
