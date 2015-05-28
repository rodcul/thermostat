function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true
};

Thermostat.prototype.increase = function() {
  if (this.temperature == 32) {
    throw "Maxiumum temperature is 32 degrees";
  }
  this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature == 10) {
    throw "Minimum temperature is 10 degrees";
  }
  this.temperature -= 1;
};
