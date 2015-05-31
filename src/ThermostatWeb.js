var thermostat = new Thermostat();

$(document).ready( function() {
  $('#up').on('click', function(){
    thermostat.increase();
    $('#temperature').html(thermostat.temperature);

  });

  $('#down').on('click', function(){
    thermostat.decrease();
    $('#temperature').html(thermostat.temperature);
  });

  $('#reset').on('click', function(){
    thermostat.reset();
    $('#temperature').html(thermostat.temperature);
  });
});
