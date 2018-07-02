import Axios from 'axios';

const axios = {
	test: function() {
		Axios.get("static/json/test.json").then(function (res) {
			console.log(res)
		}).catch(function (e) {
			console.log("----");
			console.log(e)
		})
	}
}

export default axios