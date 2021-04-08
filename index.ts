import async from "async";
import _ from "lodash";
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

//Returns top image from Flickr for a tag
function getFlickrImage(tag : string, callback : (arg0 : Error | null,arg1 :string)=>void) {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON( flickerAPI, {
		tags: tag,
		tagmode: 'any',
		format: 'json'
	})
	.done(function(data : any) {
		var items = data.items;
		callback(null, items[0].media.m);	
	});
}

//List of tags we want to search on Flickr
var tags = [
	'alistar',
	'blitzcrank',
	'caitlyn'
];

//==================================async.each========================================
// each(arr, iterator, [callback])
var imageList : string[] = [];
async.each(tags, function(tag, callback) {
	var image : any = {};
	image.tag = tag;
	getFlickrImage(tag, function(err, url) {
		if (err) {
			callback(err);
			return;
		}
		if (url) {
			image.url = url;
			imageList.push(image);
			callback();
		}
	});
}, function(err) {
	if (err) {
		console.log('one of the api failed, the whole thing will fail now');
	} else {
		console.log('Image List', imageList);
	}
});

//==================================async.forEachOf========================================
//each(arr, iterator, [callback])
// var imageList = [];
// var tags = {
// 	tag_a: 'alistar',
// 	tag_b: 'blitzcrank',
// 	tag_c: 'caitlyn'
// };

// async.forEachOf(tags, function(value, key, callback) {
// 	var image = {};
// 	getFlickrImage(value, function(err, url) {

// 		if (err) {
// 			callback(err);
// 			return;
// 		}
// 		if (url) {
// 			image.tag = value;
// 			image.url = url;
// 			imageList.push(image);
// 			callback();
// 		}
// 	});
// }, function(err) {
// 	if (err) {
// 		console.log('one of the api failed, the whole thing will fail now');
// 	} else {
// 		console.log('Image List', imageList);
// 	}
// });