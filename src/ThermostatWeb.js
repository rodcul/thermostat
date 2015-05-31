var thermostat = new Thermostat();

$(document).ready(function() {

  backgroundColor();

	$('#up').on('click', function() {
		thermostat.increase();
		$('#temperature').html(thermostat.temperature);
    backgroundColor();

	});

	$('#down').on('click', function() {
		thermostat.decrease();
		$('#temperature').html(thermostat.temperature);
    backgroundColor();
	});

	$('#reset').on('click', function() {
		thermostat.reset();
		$('#temperature').html(thermostat.temperature);
    backgroundColor();
	});

	$('#togglePowerSavingMode').on('click', function() {
		thermostat.togglePowerSavingMode();
		if (thermostat.powerSavingMode) {
			$('#powerSavingMode').html('ON')
		} else {
			$('#powerSavingMode').html('OFF')
		}
    $('#temperature').html(thermostat.temperature);
    backgroundColor();
	});

    function backgroundColor(){
      document.body.style.backgroundColor = thermostat.color();
    };
});
