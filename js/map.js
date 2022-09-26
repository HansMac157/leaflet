var map = L.map('map').setView([0.3136,32.581], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([0.3136,32.581]).addTo(map)
		.bindPopup('GPO')
		.openPopup();	