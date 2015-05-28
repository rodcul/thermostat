function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  if (this.temperature == 32) {
    throw "JS sucks";
  }
  this.temperature += 1;
};
