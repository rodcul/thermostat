function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true
};

Thermostat.prototype.increase = function() {
  if (this.temperature == 32 && this.powerSavingMode == false) {
    throw "Maxiumum temperature is 32 degrees with power saving mode off";
  }

  else if (this.temperature == 25 && this.powerSavingMode == true) {
    throw "Maxiumum temperature is 25 degrees with power saving mode on";
  }

  this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature == 10) {
    throw "Minimum temperature is 10 degrees";
  }
  this.temperature -= 1;
};
