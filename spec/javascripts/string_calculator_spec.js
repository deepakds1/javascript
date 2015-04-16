describe ("StringCalculator",function(){
it("should return 0 when empty string is pass",function() {
expect(StringCalculator.add ("")).toEqual(0);
});


it("should support 1 number",function() {
expect(StringCalculator.add ("2")).toEqual(2);
});

});