describe("Thermostat", function(){
    it("starts at 20 degrees",function(){
      var thermostat = new Thermostat;
      expect(thermostat.temperature).toEqual(20);
    });

    it("can increase the temp by 1",function(){
      var thermostat = new Thermostat;
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it("maximum temperature is 32 degrees",function(){
      var thermostat = new Thermostat;
      thermostat.temperature = 31;
      thermostat.increase();
      expect(function(){thermostat.increase()}).toThrow();
    });
});
