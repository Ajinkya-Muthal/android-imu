//======================================================================================================================
//
// unusid.js
//
//----------------------------------------------------------------------------------------------------------------------
// PROPRIETARY NOTICE:
// ------------------
// The information contained herein is confidential and/or proprietary to UnusID LTD.
// It shall not be reproduced or disclosed in whole or in part, and may only be used in accordance with the terms of the
// License Agreement entered into with UnusID LTD.
//
// Copyright (c) 2012 UnusID LTD. All rights reserved.
//----------------------------------------------------------------------------------------------------------------------
// CHANGES LOG:
// -----------
// Revision: 01.00
// By      : Boaz Shnapp
// Date    : 07/02/2012 07:35
// Comments: First Issue
//======================================================================================================================

var unusID =
{
	services_URL:	"https://www.unusid.com/prd/services.php",
	county_code:	972,
	provider_code:	54

};

//
// Pages initialize
// ----------------

$( function()
{
	$( document ).ajaxError(
	function( event, request, settings )
	{
		console.log( 'Network error occurred while trying to access server.' );
		navigator.notification.vibrate( 2000 );
		navigator.notification.beep( 2 );
		navigator.notification.alert(
            'Network error occurred while trying to access server.',
            function(){ $.mobile.hidePageLoadingMsg(); },
            'Network Error' );
	});
});

//
// Set jQuery mobile's default configuration
// -----------------------------------------

$(document).bind( "mobileinit",
function()
{
	$.mobile.touchOverflowEnabled = true;
});

