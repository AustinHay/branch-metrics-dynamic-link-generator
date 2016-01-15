
function createDynamicLink() {
	// Takes inputs and creates a link out of them.

	// // Create base link.
	var link = 'https://'

	// Grab link domain.
	domain = window.document.getElementById('domain').value;
	console.log(domain.length)
	if (domain.length > 0) {
		var link = link + domain;
	} 
	else {
		var link = link + 'bnc.lt/';
	}

	// Add API /a/ link syntax.
	var link = link + '/a/'

	// Add Branch Key.
	branchKey = window.document.getElementById('branchKey').value;
	var link = link + branchKey

	// Add Start of Query Params
	var link = link + '?'

	// Add Miscellaneous Query Params
	miscQueryParams1 = window.document.getElementById('miscQueryParams1').value;
	miscQueryParams2 = window.document.getElementById('miscQueryParams2').value;
	miscQueryParams3 = window.document.getElementById('miscQueryParams3').value;
	miscQueryParams4 = window.document.getElementById('miscQueryParams4').value;
	miscQueryParams5 = window.document.getElementById('miscQueryParams5').value;

	if (miscQueryParams1.length > 0) {
		var link = link +  miscQueryParams1;
	}

	if (miscQueryParams2.length > 0) {
		var link = link +'&'+ miscQueryParams2;
	}

	if (miscQueryParams3.length > 0) {
		var link = link +'&'+ miscQueryParams3;
	}

	if (miscQueryParams4.length > 0) {
		var link = link +'&'+ miscQueryParams4;
	}

	if (miscQueryParams5.length > 0) {
		var link = link +'&'+ miscQueryParams5;
	}

	// Add Branch Analytics Tags
	channel = window.document.getElementById('channel').value;
	feature = window.document.getElementById('feature').value;
	campaign = window.document.getElementById('campaign').value;
	stage = window.document.getElementById('stage').value;
	tag1 = window.document.getElementById('tag1').value;
	tag2 = window.document.getElementById('tag2').value;
	tag3 = window.document.getElementById('tag3').value;
	tag4 = window.document.getElementById('tag4').value;
	tag5 = window.document.getElementById('tag5').value;

	if (channel.length > 0) {
		var link = link + '&' + 'channel=' + channel;
	}

	if (feature.length > 0) {
		var link = link + '&' + 'feature=' + feature;
	}

	if (campaign.length > 0) {
		var link = link + '&' + 'campaign=' + campaign;
	}

	if (stage.length > 0) {
		var link = link + '&' + 'stage=' + stage;
	}

	if (tag1.length > 0) {
		var link = link + '&' + 'tags[]=' + tag1;
	}

	if (tag2.length > 0) {
		var link = link + '&' + 'tags[]=' + tag2;
	}

	if (tag3.length > 0) {
		var link = link + '&' + 'tags[]=' + tag3;
	}

	if (tag4.length > 0) {
		var link = link + '&' + 'tags[]=' + tag4;
	}

	if (tag5.length > 0) {
		var link = link + '&' + 'tags[]=' + tag5;
	}

window.document.getElementById('generatedDyanmicLink').innerHTML = link
}
