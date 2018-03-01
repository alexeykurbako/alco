
function operation(oper,ch2){
	switch (oper) {
		case 0:
		//if(ch2<0) return "";
			return "+";break;
		case 1:
		//if(ch2<0) return "+";
			return "-";break;
		case 2: return "*"; break;
		case 3: return "/"; break;
	}
}
function prov(ch2,oper){
	if(oper==1 && ch2<0){
		const sk=1;
		return -ch2;
		}
		return ch2;
}
function result(ch1,ch2,oper){
	switch (oper) {
		case 0: return rez = Math.floor(ch1+ch2); break;
		case 1: return rez = Math.floor(ch1-ch2); break;
		case 2: return rez = ch1*ch2; break;
		case 3: return rez = Math.floor((ch1/ch2)*10)/10; break;
	}
}
function getrandom(min,max){
	const result = Math.floor(Math.random()*(max-min))+min;
	if(result==0)return max;
	return result;
}
while(true){
const min=-10;
const max= 10;
const ch1 = getrandom(min,max);
const ch2 = getrandom(min,max);
const oper = Math.floor(Math.random()*4);
	const temp = prompt(`${ch1}${operation(oper,ch1,ch2)}${ch2}=?`);
	if(temp==result(ch1,ch2,oper)){
		alert('ещё по одной...');
	}
	else
		{
		alert('Хватит с тебя');
		break;
		}
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	