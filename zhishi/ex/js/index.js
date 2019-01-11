function Person()
{
	this.name="xiaoming";
}
Person.prototype.name="123";
var p1=new Person();
alert(p1.name+":"+p1.__proto__.name);
Person.prototype={"constructor":"Person","name":"xiaofang"};