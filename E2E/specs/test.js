//Run for hybrid application which build on browser and support mobile
describe('Go to google', function (){
 it ('Search Daytona Systems', function(){
     browser.ignoreSynchronization =true;
	 browser.get('https://www.google.com/');
	 element(by.xpath("//*[@title='Search']")).sendKeys('Daytona Systems');
	 element(by.name('btnK')).click();
	 element(by.xpath("//span[contains(text(),'Daytona Systems (India) Pvt. Ltd.')]")).isDisplayed();
 });
 });
