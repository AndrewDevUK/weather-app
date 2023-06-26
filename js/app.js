const API_KEY = "d9acc0c70fe1453082b124200232606";
const URL = "http://api.weatherapi.com/v1/current.json";
const DEFAULT_LOC = "Doncaster";

$.ajax(URL, {
    type: "GET",
    data: {
        key: API_KEY,
        q: DEFAULT_LOC
    },
    success: function(data) {
        $('#location').text(data.location.name);
        $('#condition').html(data.current.temp_c + '&degC ' + data.current.condition.text);
        $("#conditionImage").attr("src", data.current.condition.icon);
    }
});

