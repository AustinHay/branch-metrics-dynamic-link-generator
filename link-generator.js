
// Dynamic Link Generator Function

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

	// // Add Branch Reserved Values
	iosUrl = window.document.getElementById('iosUrl').value;
	androidUrl = window.document.getElementById('androidUrl').value;
	desktopUrl = window.document.getElementById('desktopUrl').value;
	windowsUrl = window.document.getElementById('windowsUrl').value;
	blackberryUrl = window.document.getElementById('blackberryUrl').value;
	fireUrl = window.document.getElementById('fireUrl').value;
	fallbackUrl = window.document.getElementById('fallbackUrl').value;
	afterClickUrl = window.document.getElementById('afterClickUrl').value;
	deeplink_path = window.document.getElementById('deeplink_path').value; 
	ogTitle = window.document.getElementById('ogTitle').value;
	ogDescription = window.document.getElementById('ogDescription').value;
	ogImage = window.document.getElementById('ogImage').value;
	ogVideo = window.document.getElementById('ogVideo').value;
	ogUrl = window.document.getElementById('ogUrl').value;
	ogType = window.document.getElementById('ogType').value;
	ogRedirect = window.document.getElementById('ogRedirect').value;
    
    var branchReservedData = {};

   		if (iosUrl.length > 0) {
    		branchReservedData['$ios_url']=iosUrl;
    	}

    	 if (androidUrl.length > 0) {
    		branchReservedData['$android_url']=androidUrl;
		}

		if (desktopUrl.length > 0) {
    		branchReservedData['$deskto_url']=desktopUrl;
		}

	// 	if (windowsUrl.length > 0) {
	// 		'$windows_url'= windowsUrl;
	// 	}

	// 	if (blackberryUrl.length > 0) {
	// 		'$blackberry_url'= blackberryUrl;
	// 	}

	// 	if (fireUrl.length > 0) {
	// 		'$fire_url'= fireUrl;
	// 	}

	// 	if (fallbackUrl.length > 0) {
	// 	'$fallback_url'= fallbackUrl;
	// 	}	

	// 	if (afterClickUrl.length > 0) {
	// 		'$after_click_url'=afterClickUrl;
	// 	}

	// 	if (deeplink_path.length > 0) {
	// 		'$deeplink_path'=deeplink_path;
	// 	}

	// 	if (ogTitle.length > 0) {
	// 		'$og-title'=ogTitle;
	// 	}

	// 	if (ogDescription.length > 0) {
	// 		'$og-description'=ogDescription;
	// 	}

	// 	if (ogImage.length > 0) {
	// 		'$og-image'=ogImage;
	// 	}

	// 	if (ogVideo.length > 0) {
	// 		'$og-video'=ogVideo;
	// 	}

	// 	if (ogUrl.length > 0) {
	// 		'$og-url'=ogUrl;
	// 	}

	// 	if (ogType.length > 0) {
	// 		'$og-type'=ogType;
	// 	}

	// 	if (ogRedirect.length > 0) {
	// 		'$og-redirect'=ogRedirect;
	//     }

	// JSON Convertion
	JSON.stringify(branchReservedData);	
    console.log(branchReservedData);

	// Base 64 Encoding
    if (jQuery.isEmptyObject(branchReservedData) != true ) {
		var base64data = window.btoa(JSON.stringify(branchReservedData));
		window.document.getElementById('encodedData').value = base64data;

		// Form new link with data added in.
		link = link + 'data=' + base64data + '==';
	}
		
	// Base64 Encoded Data Validation
	var unencodedData = window.atob(base64data);
	console.log(unencodedData)

	window.document.getElementById('unencodedData').value = unencodedData;

	// Final Link Creation
	window.document.getElementById('generatedDyanmicLink').value = link
};

// Clipboard Function
function copyToClipboard(text) {
	document.getElementById('generatedDyanmicLink').innerHTML
  	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
};
