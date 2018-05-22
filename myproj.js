var btn1=document.getElementById("btn1");
var formdiv=document.getElementById("myform");
var array=[];
var j=0,f=0;
var listDiv = document.getElementById("list");
var taskList=document.getElementById('task-list');
var index=-1,target;
var listFlag;

btn1.addEventListener("click",function(event)
{
function1();
});

function function1()
{
	btn1.setAttribute("style","visibility:hidden");//css
	var form1 = document.createElement("form");
	formdiv.appendChild(form1);
	var space1=document.createElement("br");
	form1.appendChild(space1);
	var pname=document.createTextNode("product name : ");
	var namediv=document.createElement("div");
	namediv.appendChild(pname);
	var nameinput=document.createElement("input");
	nameinput.setAttribute("id","pname");
	
	form1.appendChild(namediv);
	namediv.appendChild(nameinput)	
	
	var space2=document.createElement("br");
	form1.appendChild(space2);
	var disc=document.createTextNode("Discription : ");
	var discdiv=document.createElement("div");
	discdiv.appendChild(disc);
	var discinput=document.createElement("input");
	discinput.setAttribute("id","pdisc");
	discdiv.appendChild(discinput);
	form1.appendChild(discdiv);
	
	var space3=document.createElement("br");
	form1.appendChild(space3);
	var price=document.createTextNode("price : ");
	var pricediv=document.createElement("div");
	pricediv.appendChild(price);
	var priceinput=document.createElement("input");
	priceinput.setAttribute("id","pprice");
	pricediv.appendChild(priceinput);
	form1.appendChild(pricediv);
	
	var spaced=document.createElement("br");
	form1.appendChild(spaced);
	var quantity=document.createTextNode("Quantity : ");
	var quantitydiv=document.createElement("div");
	quantitydiv.appendChild(quantity);
	var quantityinput=document.createElement("input");
	quantityinput.setAttribute("id","pquantity");
	quantitydiv.appendChild(quantityinput);
	form1.appendChild(quantitydiv);
	
	var spacee=document.createElement("br");
	form1.appendChild(spacee);
	var btn=document.createElement("input");
	btn.setAttribute("type","button");
	btn.setAttribute("value","submit");
	form1.appendChild(btn);
	btn.addEventListener("click",function(event)
{	
if (listFlag==0)
	{
		myList();
	}
	else
	{
		updateArray();
		listFlag=0;
	}
	listDiv.setAttribute("style","visibility:show");
	//formdiv.setAttribute("style","visibility:hidden");
	btn1.setAttribute("style","visibility:show");
})
}
function myList()
{
	if(f==0)
	{
	var obj=new Object();
	var p_name=document.getElementById("pname");
	var p_Disc=document.getElementById("pdisc");
	var p_Item=document.getElementById("pprice");
	var p_quantity=document.getElementById("pquantity");
	var li=document.createElement("LI");
	obj.name=p_name.value;
	obj.disc=p_Disc.value;
	obj.item=p_Item.value;
	obj.quantity=p_quantity.value;
	p_name.value="";
	p_Disc.value="";
	p_Item.value="";
	p_quantity.value="";
	array.push(obj);
	li.setAttribute("id",j);
	li.innerHTML+=obj.name+"&nbsp&nbsp&nbsp&nbsp"+obj.disc+"&nbsp&nbsp&nbsp&nbsp"+obj.item+"&nbsp&nbsp&nbsp&nbsp"+obj.quantity;
	taskList.appendChild(li);
	}
	if(f==1)
	{
		var x=target;
		var li = document.createElement("LI");
		li.innerHTML=array[index].name+"&nbsp&nbsp&nbsp&nbsp"+array[index].disc+"&nbsp&nbsp&nbsp&nbsp"+array[index].item+
		"&nbsp&nbsp&nbsp&nbsp"+array[index].quantity;
		target.parentNode.replaceChild(li,target.parentNode.childNodes[index]);
		f=0;
	}
	
	var del=document.createElement("input");
	del.setAttribute("type","button");
	del.setAttribute("value","delete");
	li.appendChild(del);
	del.addEventListener("click",function(event){
											var targetParent = event.target.parentNode;
										   targetParent.parentNode.removeChild(targetParent);
										});
	
	var abc=document.createElement("label");
	abc.innerHTML=" ";
	taskList.appendChild(abc);
	
	
	var edit=document.createElement("input");
	edit.setAttribute("type","button");
	edit.setAttribute("value","edit");
	li.appendChild(edit);
	edit.addEventListener("click",function(event){
											var targetParent = event.target.parentNode;
											var p_name=document.getElementById("pname");
											var p_Disc=document.getElementById("pdisc");
											var p_Item=document.getElementById("pprice");
											var p_quantity=document.getElementById("pquantity");
											listDiv.setAttribute("style","visibility:hidden");
											btn1.setAttribute("style","visibility:hidden");
											formdiv.setAttribute("style","visibility:show");
											p_name.value = array[targetParent.id].name;
											p_Disc.value=array[targetParent.id].disc;
											p_Item.value = array[targetParent.id].item;
    										p_quantity.value = array[targetParent.id].quantity;

    										index=targetParent.id;
    										target=targetParent;
											listFlag = 1;
											f=1;

										});
	
	
	

	j++; 
}

function updateArray()
{
	if(index!=-1)
	{
	var p_name=document.getElementById("pname");
	var p_Disc=document.getElementById("pdisc");
	var p_Item=document.getElementById("pprice");
	var p_quantity=document.getElementById("pquantity");
	
	array[index].name=p_name.value;
	array[index].disc=p_Disc.value;
	array[index].item=p_Item.value;
	array[index].quantity=p_quantity.value;
	
	p_name.value="";
	p_Disc.value="";
	p_Item.value="";
	p_quantity.value="";
	
	myList();
	}
}