// 
var order =prompt("what do you want candy or flowers");
while (order !="flowers" && order !="candy")
{ 
    order =prompt("what do you want candy or fiowers?");
}

var itemorder ='';
if (order== "flowers")
{ 
    itemorder = '<data:image/jpeg;base64,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" />';            
}
else
{
    itemorder = '<img src="https://www.hangar-12.com/hubfs/candy.jpg"/>';
}

var numof = prompt(" how many do you want ?");
var result = '';
for(var i=0 ; i < numof ; i++ )
{
    result = result + itemorder ;

}
document.write(result);


