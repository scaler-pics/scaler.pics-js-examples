import Scaler from 'scaler.pics';

/* 
Perform the tests from location with good upload and downnload speeds,
(for examle from your server environment) to get the best and real performance results.
*/

const apiKey = process.argv[2] || 'YOUR_API_KEY';

const scaler = new Scaler(apiKey);

const result = await scaler.transform({
	input: { localPath: 'images/test.heic' },
	output: {
		type: 'jpeg',
		fit: { width: 1024, height: 1024 },
		quality: 0.8,
	},
});

console.log('result', result);
