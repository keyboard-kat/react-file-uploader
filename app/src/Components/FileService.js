function FileService(params) {
	var xhr = new XMLHttpRequest();
	xhr.open(params.method, params.url);
	xhr.overrideMimeType(params.data.type);
	xhr.send(params.data);
}

module.exports = FileService;
