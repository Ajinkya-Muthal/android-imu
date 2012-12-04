//======================================================================================================================
//
// fields_validation.js
//
//----------------------------------------------------------------------------------------------------------------------
// PROPRIETARY NOTICE:
// ------------------
// The information contained herein is confidential and/or proprietary to Unusid LTD. It shall not be reproduced or
// disclosed in whole or in part, and may only be used in accordance with the terms of the License Agreement entered
// into with Unusid LTD.
//
// Copyright (c) 2011 Unusid LTD. All rights reserved.
//----------------------------------------------------------------------------------------------------------------------
// DESCRIPTION:
// -----------
// Client script for page data field validetion. The validation functions operate on field that have validation
// property and acts according the text in property.
//----------------------------------------------------------------------------------------------------------------------
// CHANGES LOG:
// -----------
// Revision: 01.00
// By      : Boaz Shnapp
// Date    : 2012/01/19 11:15
// Comments: First Issue
//======================================================================================================================

function fieldsValidator()
{
	//
	// DATA MEMBERS
	// ============

	var labelsArray = new Array();
	var startError	= '<span class="error-highlight">';
	var endError	= '</span>';


	//
	// INIT
	// ====
	// Get fields labels for messages
	// ------------------------------

	$( "label" ).each
	(
		function()
		{
			if( $(this).attr( "for" ) != '' )
			{
				var fld = $(this).attr( "for" );
				var txt = $(this).text();
				labelsArray[fld] = txt;
			}
		}
	);

	//============================================================================
	//
	//	validateShowInOutputBlock()
	//
	//	Scan the field validation and call the proper function.
	//============================================================================
	this.validateShowInOutputBlock = function( elementsQuery, errorsBlock )
	{
		var errorsArr = [];

		//
		// VALIDATE
		// ========

		if( typeof( elementsQuery ) == "string" && elementsQuery.length > 0 )
		{
			elementsQuery += " [validation]";
		}
		else
		{
			elementsQuery = "[validation]";
		}

		$( elementsQuery ).each
		(
			function()
			{
				if( $(this).attr( "disabled" )	!= true && $(this).css( "visibility" )	!= "hidden"	&& $(this).css( "display" )	!= "none" )
				{
					testFieldRules( this, errorsArr );
				}
			}
		);

		//
		// TEST RESULT
		// ===========

		$( errorsBlock + " #errorsList" ).empty();					// Remove all errors messages from output

		$( elementsQuery ).removeClass( "highlight-err-field" );	// Remove all errors visuals from fields

		if( errorsArr.length > 0 )
		{
			showErrorsInTable( errorsArr, errorsBlock + " #errorsList" );
			$( errorsBlock + " #errorsArea" ).removeClass( "errorsDisplayNone" );
		}
		else
		{
			$( errorsBlock + " #errorsArea"  ).addClass( "errorsDisplayNone" );
		}
		return errorsArr.length;
	}

	//============================================================================
	//
	//	validateShowOnForm()
	//
	//	Scan the field validation and call the proper function.
	//============================================================================
	this.validateShowOnForm = function( elementsQuery )
	{
		if( typeof( elementsQuery ) == "string" && elementsQuery.length > 0 )
		{
			elementsQuery += " [validation]";
		}
		else
		{
			elementsQuery = "[validation]";
		}
		$( elementsQuery ).removeClass( "highlight-err-field" );	// Remove all errors visuals from fields

		var errorsFound = false;

		//
		// VALIDATE MAIN LOOP
		// ==================

		$( elementsQuery + "[validation]" ).each
		(
			function()
			{
				if( $(this).attr( "disabled" ) != true && $(this).css( "visibility" ) != "hidden" && $(this).css( "display" ) != "none" )
				{
					var errorsListID = "#" + $(this).attr( "id" ) + "-er";
					$( errorsListID ).empty();

					//
					// Validate
					// --------

					var errorsArr = [];
					testFieldRules( this, errorsArr );

					//
					// Test result
					// -----------

					if( errorsArr.length > 0 )
					{
						errorsFound = true;
						$(this).addClass( "highlight-err-field" );
						var er;

						for( er = 0 ; er < errorsArr.length ; ++er )
						{
							$( errorsListID ).append( '<li class="error-text">' + errorsArr[er][0] + "</li>" );
						}
					}
				}
			}
		);

		return errorsFound;
	}

	//============================================================================
	//
	//	testFieldRules()
	//
	//	Scan the field validation and call the proper validation, results are
	//	stored in the give array.
	//============================================================================
	function testFieldRules( field, errorsArr )
	{
		var fieldValue = field.value;
		var validation;
		var	rule;
		var len;
		var	regExpr		= / /g;
		var i;
		var dataValidationError = false;

		validation = $(field).attr( "validation" ).replace( regExpr, "" );
		validation = validation.toLowerCase().split( "," );

		for( i=0; i<validation.length; ++i )
		{
			rule = validation[i].split( ":" );

			switch( rule[0] )
			{

			case "":break;

			//
			//	must have data
			//	--------------

			case "required":
			case "req":
				if( fieldValue == "" || fieldValue == null || fieldValue.search( "[^ ]" ) == -1 )
				{
					errorsArr.push( [ translate_texts['required'], field ] );
				}
				break;

			//
			//	digits only
			//	-----------

			case "numeric":
			case "num":
				if( fieldValue != "" && fieldValue.search( "[^0-9]" ) != -1 )
				{
					regExpr = /([^0-9]+)/g;
					errorsArr.push( [
						translate_texts['noneNumericChar'] + " " + fieldValue.replace( regExpr, startError + "$1" + endError ),
						field ] );
				}
				break;

			//
			//	digits - only
			//	------------

			case "integer":
			case "int":
				if( fieldValue != "" && (fieldValue.search( "[^0-9\\-]+|-{2,}" ) != -1 || fieldValue.search( "-" ) > 0 ) )
				{
					regExpr = /([^0-9\-]+)/g;
					errorsArr.push( [
						translate_texts['noneNumericChar'] + " " +
						fieldValue.replace( regExpr, startError + "$1" + endError ),
						field ] );
				}
				break;

			//
			//	digits - . only
			//	---------------

			case "currency":
			case "cur":
				if( fieldValue != "" && isNaN( fieldValue ) )
				{
					regExpr = /([^0-9-.]+|-{2,}|\.{2,}|-\B)/g;
					errorsArr.push( [
						translate_texts['noneNumericChar'] + " " +
						fieldValue.replace( regExpr, startError + "$1" + endError ),
						field ] );
				}
				break;

			//
			//	digits . only
			//	-------------

			case "pcurrency":
			case "pcur":
				if( fieldValue != "" && (isNaN( fieldValue ) || fieldValue < 0) )
				{
					regExpr = /([^0-9.]+|\.{2,}|-\B)/g;
					errorsArr.push( [
						translate_texts['noneNumericChar'] + " " + fieldValue.replace( regExpr, startError + "$1" + endError ),
						field ] );
				}
				break;

			//
			//	maximum len
			//	-----------

			case "maxlength":
			case "maxlen":
				len = parseInt( rule[1] );
				if( rule[1] == "" || isNaN( len ) )
				{
					errorsArr.push( [ "Validation rule '" + startError + validation[i] + endError + "' have invalid length value", field ] );
					break;
				}
				if( fieldValue.length > len )
				{
					errorsArr.push( [ translate_texts['valueIsTooLong'] + startError + fieldValue + endError + translate_texts['maxLength'] + len, field ] );
				}
				break;

			//
			//	minimum len
			//	------------

			case "minlength":
			case "minlen":
				len = parseInt( rule[1] );
				if( rule[1] == "" || isNaN( len ) )
				{
					errorsArr.push( [ "Validation rule '" + validation[i] + "' have invalid length value", field ] );
					break;
				}
				if( fieldValue != "" && fieldValue.length < len )
				{
					errorsArr.push( [ translate_texts['valueIsTooShort'] + startError + fieldValue + endError + translate_texts['minLength'] + len, field ] );
				}
				break;

			//
			//	minimum len short message
			//	-------------------------

			case "minlensm":
				len = parseInt( rule[1] );
				if( rule[1] == "" || isNaN( len ) )
				{
					errorsArr.push( [ "Validation rule '" + validation[i] + "' have invalid length value", field ] );
					break;
				}
				if( fieldValue != "" && fieldValue.length < len )
				{
					errorsArr.push( [ translate_texts['valueIsTooShort'], field ] );
				}
				break;

			//
			//	maximum value
			//	-------------

			case "maxvalue":
			case "maxval":
				if( rule[1] == "" )
				{
					errorsArr.push( [ "Validation rule '" + validation[i] + "' dont have a value", field ] );
					break;
				}
				if( fieldValue > rule[1] )
				{
					errorsArr.push( [ translate_texts['valueGtMax'] + startError + fieldValue + endError + translate_texts['maxValue'] + rule[1], field ] );
				}
				break;

			//
			//	maximum number value
			//	--------------------

			case "maxnumvalue":
			case "maxnval":
				if( rule[1] == "" )
				{
					errorsArr.push( [ "Validation rule '" + validation[i] + "' dont have a value", field ] );
					break;
				}
				if( parseFloat(fieldValue) > parseFloat(rule[1]) && ! dataValidationError )
				{
					errorsArr.push( [ translate_texts['valueGtMax'] + startError + fieldValue + endError + translate_texts['maxValue'] + rule[1], field ] );
				}
				break;

			//
			//	minimum value
			//	-------------

			case "minvalue":
			case "minval":
				if( rule[1] == "" )
				{
					errorsArr.push( [ "Validation rule '" + validation[i] + "' dont have a value", field ] );
					break;
				}
				if( fieldValue != "" && fieldValue < rule[1] )
				{
					errorsArr.push( [ translate_texts['valueLtMin'] + startError + fieldValue + endError + translate_texts['minValue'] + rule[1], field ] );
				}
				break;

			//
			//	minimum numeric value
			//	---------------------

			case "minnumvalue":
			case "minnval":
				if( rule[1] == "" )
				{
					errorsArr.push( [ "Validation rule '" + validation[i] + "' dont have a value", field ] );
					break;
				}
				if( fieldValue != "" && parseFloat(fieldValue) < parseFloat(rule[1]) && ! dataValidationError )
				{
					errorsArr.push( [ translate_texts['valueLtMin'] + startError + fieldValue + endError + translate_texts['minValue'] + rule[1], field ] );
				}
				break;

			//
			//	llegal File Name
			//	----------------

			case "legalfilename":
			case "filenam":
				pos = fieldValue.search( "[\\\\/:*?\"<>|.+=\\[\\]()]" );
				if( fieldValue != "" && pos != -1 )
				{
					regExpr = /([\\\\/:*?\"<>|.+=\[\]()]+)/g;
					errorsArr.push( [ translate_texts['legalFilenameChar'] + " " + fieldValue.replace( regExpr, startError + "$1" + endError ), field ] );
				}
				break;

			//
			//	Person Name
			//	-----------

			case "personname":
			case "pname":
				pos = fieldValue.search( "[0-9\\\\/:*?\"<>|+=\\[\\]()~!@#\\$%\\^&]" );
				if( fieldValue != "" && pos != -1 )
				{
					regExpr = /([0-9\\\\/:*?\"<>|+=\[\]()~!@#\\$%5\\^&]+)/g;
					errorsArr.push( [ translate_texts['legalPersonnameChar'] + fieldValue.replace( regExpr, startError + "$1" + endError ), field ] );
				}
				break;

			//
			//	Profile Name
			//	------------

			case "profile":
			case "prof":
				pos = fieldValue.search( "[\\\\<>\"'&]" );
				if( fieldValue != "" && pos != -1 )
				{
					regExpr = /([\\\\<>\"'&]+)/g;
					errorsArr.push( [ translate_texts['legalProfileNameChar'] + fieldValue.replace( regExpr, startError + "$1" + endError ), field ] );
				}
				break;

			//
			//	Identifier Name
			//	----------------

			case "identifiername":
			case "iname":
				pos = fieldValue.search( "[^0-9a-zA-Z_]+" );
				if( fieldValue != "" && pos != -1 )
				{
					regExpr = /([^0-9a-zA-Z_]+)/g;
					errorsArr.push( [ translate_texts['legalProfileNameChar'] + fieldValue.replace( regExpr, startError + "$1" + endError ), field ] );
				}
				break;

			//
			//	Activation Key
			//	--------------

			case "activationkey":
			case "ackey":
				pos = fieldValue.search( "[^0-9a-zA-Z]+" );
				if( fieldValue != "" && pos != -1 )
				{
					regExpr = /([^0-9a-zA-Z]+)/g;
					errorsArr.push( [ translate_texts['legalActivationKeyChar'] + fieldValue.replace( regExpr, startError + "$1" + endError ), field ] );
				}
				break;

			//
			//	Identifier Name
			//	----------------

			case "hostname":
			case "host":
				pos = fieldValue.search( "[^0-9a-zA-Z_\.-]+" );
				if( fieldValue != "" && pos != -1 )
				{
					regExpr = /([^0-9a-zA-Z_\.-]+)/g;
					errorsArr.push( [ translate_texts['legalIdentifierChar'] + fieldValue.replace( regExpr, startError + "$1" + endError ), field ] );
				}
				break;

			//
			//	Password
			//	--------

			case "password":
			case "pass":
				pos = fieldValue.search( "[\"';<> ]+" );
				if( fieldValue != "" && pos != -1 )
				{
					errorsArr.push( [ translate_texts['illegal_password_char'], field ] );
				}
				break;

			//
			//	Email Address
			//	-------------

			case "emailaddress":
			case "email":

				pos = fieldValue.search( /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3}){1,2}$/ );
				if( fieldValue != "" && pos != 0 )
				{
					errorsArr.push( [ translate_texts['illegal_email_address'], field ] );
				}
				break;

			//
			//	Date
			//	----

			case "date":
				pos = fieldValue.search( "^[0-9]{1,2}[/-]{1}[0-9]{1,2}[/-]{1}[0-9]{2,4}$" );
				if( fieldValue != "" && pos != 0 )
				{
					errorsArr.push( [ translate_texts['illegal_date_format'], field ] );
				}
				break;

			//
			//	Phone number
			//	------------

			case "phone":

				pos = fieldValue.search( "^\\+{0,1}[ ]{0,1}[0-9]{1,12}[ \\-]{0,1}[0-9]{0,12}[ \\-]{0,1}[0-9]{0,12}[ \\-]{0,1}[0-9]{0,12}[ \\-]{0,1}[0-9]{0,12}$" );
				if( fieldValue != "" && pos != 0 )
				{
					errorsArr.push( [ translate_texts['illegal_phone_format'], field ] );
				}
				break;

			//
			//	Illegal validation rule
			//	-----------------------

			default:
				errorsArr.push( [ "Illegal validation rule: " + startError + validation[i] + endError, field ] );
				break;
			}
		}
	}

	//============================================================================
	//
	//	showErrorsInTable()
	//
	// Shows errors in array on output element, this function creates compiler
	// like view of errors, user can click on error to get into field with data.
	//============================================================================
	function showErrorsInTable( errorsArr, errTable )
	{
		var linesCount = 0;
		var er, message, className, label;

		for( er = 0 ; er < errorsArr.length ; ++er )
		{
			var field;
			++linesCount;
			if( parseInt(linesCount % 2) == 1 )	className = "errorsTextLineOdd";
			else								className = "errorsTextLineEven";

			message = errorsArr[er][0];
			field = errorsArr[er][1];
			label = labelsArray[ field.id ];
			if( label )
			{
				label = '<span class="ui-state-error-text"><span class="ui-icon ui-icon-lightbulb" style="float:left;"></span></span><span class="errorsFieldLabel">' + label + ' </span>';
			}
			else
			{
				label =  "";
			}

			$( errTable ).append( '<div class="errorsTextLine '+ className + '" goTo="#' + field.id + '">' + '<a href="#"	class="errorsNoDecor" onclick="return false;">' + label + message + "</a></div>" );
			$( errTable + " div:last-child" ).click
			(
				function( eventObject )
				{
					var targetFld = $(eventObject.currentTarget).attr( 'goTo' );
					var tabID     = $(targetFld).attr( 'tabID' );
					var tabPanel  = $(targetFld).attr( 'tabPanel' );

					if( tabID && tabPanel )
					{
						$( tabID ).tabs( 'select', parseInt(tabPanel) );
					}
					$( targetFld ).focus();
				}
			);
			$(field).addClass( "highlight-err-field" );
			$(field).focus
			(
				function( eventObject )
				{
					$(eventObject.currentTarget).removeClass( "highlight-err-field" );
				}
			);
		}
	}
}
