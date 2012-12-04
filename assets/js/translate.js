//======================================================================================================================
//
// translate.js
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
// Date    : 05/02/2012 07:10
// Comments: First Issue
//======================================================================================================================

var global_lang_id	= 'en';
var translate_texts = {};

var translate_langs = [];

translate_langs['en'] =
{
	no_network:					"No network detected,<br>Please try later.",
	auto_login:					"Logging to Unus ID servers ...",
	unus_ID:					"Unus ID or Email",
	mobile_number:				"Mobile Phone Number",
	password:					"Password",
	password_rty:				"Retype password",
	login:						"Login",
	no_acc_register:			"Don't have account. Register",
	register_btn:				"Register",
	register_hdr:				"Register",
	first_name:					"First name",
	last_name:					"Last name",
	email:						"Email",
	insert_UnusID:				'Add Unus ID',
	incoming_requests:			'Incoming Requests',
	check_invitation:			'Requests waiting to be approved',
	update_contacts:			'Update contacts',
	update_contacts_desc:		'Synchronize contacts between "Unus ID server" and my mobile device',
	invitation_center:			'Notify my contact details through my Unus ID',
	invite_address_book:		'To my contacts &amp; friends',
	options:					'Options',
	my_unusid:					'My Unus ID: ',

	backup_n_restore:			'Update / Backup / Restore',
	backup_restore_desc:		'Backup enables you to save your contacts in the server / Restore allows you to restore your contacts from the Server into your mobile devices.',
	backup_contacts:			'Backup my Contacts',
	backup_contacts_desc:		'Save my Contacts in the Server, substituting my previous Backup',

	restor_contacts:			'Restore contacts',
	restor_contacts_desc:		'Restore my contacts from the server into my mobile.',
	
	backup_text1:				'The backup is running, if you wish to cancel the backup press the button below.',
	backup_text2:				'Backup DONE',
	backup_cancel:				'Cancel Backup',
	backup_canceled:			'Backup canceled by user.',
	backup_no_contacts:			'No contacts were found for a backup.',
	backup_contacts_done:		' Contacts were sent to the Server.',

	request_not_automatic:		'This Unus ID account does not use automatic approval.\nThe contact information will be available to you when the request is approved.',
	request_added:				'Request added',
	the_contact_added:			'The following new contact was added.',
	want_update_contact:		'Do you want to update this contact ?',
	contact_added:				'Contact added',

	no_name:					'No name',
	inf_phoneNumbers:			'Phone',
	inf_address:				'Address',
	inf_emails:					'Email',
	inf_organization:			'Organization/Company',
	inf_urls:					'URL',	

	close_session:				'Close session',
	country_code:				'Country code:',
	provider_prefix:			'Provider prefix:',
	opt_language:				'Language:',
	
	request_date:				'Request date',

	back_btn:					"Back",
	request_btn:				'Send',
	invite_btn:					'Invite',
	options_btn:				'Options',
	back_btn:					'Back',
	logoff_btn:					'Logoff',
	cancel_btn:					'Cancel',
	invite_btn:					'Send Selected',
	check_all_btn:				'Check All',
	uncheck_all_btn:			'Uncheck All',
	accept_btn:					'Accept',
	accept_all_btn:				'Accept All',
	reject_btn:					'Reject',
	reject_all_btn:				'Reject All',
	add_sel_btn:				'Add Selected',
	upl_sel_btn:				'Upload Selected',
	mobile_all_btn:				'All Mobile > Server',
	server_all_btn:				'All Server > Mobile',
	none_all_btn:				'None',
	update_btn:					'Update',
	show_email_btn:				'View email message',
	
	error_wong_pass:			'Wrong Unus ID or password !',
	error_unusid_found:			'Account with the same Unus ID already exists.',
	error_unusid_not_found:		'Unus ID not found',
	error_email_found:			'Account with the same email address already exists.',
	error_password_dif:			'The two password fields are not the same.',
	error_unusid_in_contacts:	'This Unus ID is already in your contact list.',
	error_add_self_contact:		'You cannot add yourself.',
	error_no_incoming_reeques:	'No requests to be approved',

	invite_text_1:				'Wait until Unus ID finishes reading ...',
	invite_cancel_scan:			'Cancel',
	invite_send_1:				'Sending ...',
	invite_stat_send_done:		'Notifications sent',

	invite_stat_read:			'Reading contacts ...',
	invite_stat_analyz:			'Analyzing contacts ...',
	invite_stat_server_analyz:	'Sending to Server ...',
	invite_stat_display:		'Prepare contacts display ...',
	invite_stat_send_invate:	'Sending to server',
	no_contacts_to_invite:		'No contacts to invite were found.',
	email_subject:				'Subject',
	
	contacts_synchronization:	'Synchronization',
	synchronize_text_1:			' Our app is checking your contacts to determine what needs to be updated.',
	synchronize_text_2:			'',
	synchronize_text_3:			'To cancel, press the button below.',
	synchronize_cancel:			'Cancel Synchronization',

	sync_stat_read:				'Reading contacts ...',
	sync_stat_prep:				'Preparing ...',
	sync_stat_send:				'Analyzing ...',

	sync_conflict:				'Update Contacts',
	sync_no_match:				'Contacts not in the Server',
	sync_server:				' Contacts not in my Mobile',

	conflict_desc:				'Show mobile &amp; server data conflicts',
	no_match_desc:				'Save new Mobile contacts into the Server',
	server_desc:				'Download contacts from the Server into the Mobile',

	sync_conflict_resolve:		'Update Contacts',
	sync_no_conflict:			'No Conflicts',
	sync_conflict_text_1:		'For these contacts both the Server and Mobile phone have different information.',	
	sync_conflict_text_2:		'<b>Choose</b>:<br>Download from server > (to) mobile phone.<br>Or upload from mobile phone > (to) the server.',
	sync_mobile_opt:			'Mobile > Server',
	sync_server_opt:			'Server > Mobile',
	sync_none_opt:				'Do not change',

	sync_no_match_text_1:		'The following contacts were found in Mobile, but not in the Server.',
	sync_all_match:				'All your Mobile contacts were found in the Server.',

	sync_server_text_1:			'The following contacts were found in Server, but not in the Mobile.',
	sync_all_server:			'All your contacts in the Server were found in Mobile.',
	
	restore_contacts:			'Restore',
	restore_stat_read:			'Examine last backup in the Server ...',
	restore_date:				'Backup created on:',
	restore_count1:				'Backup includes ',
	restore_count2:				' contacts',
	restore_etm:				'Estimated restore time: ',
	restore_contacts_btn:		'RESTORE',
	restore_download:			'Downloading backup ...',
	restore_restore:			'Restoring contacts ...',
	restore_done:				'Restore DONE.',
	
	confirm_exit_desc:			'Do you wish to close Unus ID?',
	confirm_exit_title:			'Exit?',
	confirm_exit_buttons:		'Yes,No',

	//
	// Fields
	// ------

	"name/givenName":			"First name",
	"name/familyName":			"Last name",
	"name/middleName":			"Middle name",
	"name/honorificPrefix":		"Name prefix",
	"name/nickname":			"Nickname",
	"name/honorificSuffix":		"Name suffix",
	"phone/home":				"Home phone",
	"phone/mobile":				"Mobile",
	"phone/work":				"Work phone",
	"phone/fax":				"Fax",
	"phone/*":					"Other phone",
	"email/home":				"Home email",
	"email/work":				"Work email",
	"email/*":					"Other email",
	"org/name":					"Organization/Company",
	"org/department":			"Department",
	"org/title":				"Org title",
	"addr/streetAddress":		"Street",
	"addr/locality":			"City",
	"addr/region":				"State",
	"addr/postalCode":			"Post code",
	"addr/country":				"Country",
	"url/home":					"Home URL",
	"url/work":					"Work URL",
	"url/*":					"Other URL",

	//
	// Fields Validation
	// -----------------
	
	required:					'Required field is empty.',
	noneNumericChar:			'A numeric data field contains none numeric character.',
	valueIsTooLong:				'Field contains too many characters ',
	maxLength:					' maximum allowed characters: ',
	valueIsTooShort:			'Field contains too few characters ',
	minLength:					' minimum allowed characters: ',
	valueGtMax:					'Field contains value grate then maximum allowed. ',
	maxValue:					' maximum allowed: ',
	valueLtMin:					'Field contains value less then minimum allowed. ',
	minValue:					' minimum allowed: ',
	legalFilenameChar:			'File name contains illegal character. ',
	legalPersonnameChar:		'Name contains illegal character. ',
	legalProfileNameChar:		'Profile name contains illegal character. ',
	legalIdentifierChar:		'Identifier name contains illegal character. ',
	legalActivationKeyChar:		'Activation-key contains illegal character. ',
	illegal_email_address:		'Wrong email address.',
	illegal_date_format:		'Wrong date.',
	illegal_phone_format:		'Wrong phone number.',
	illegal_password_char:		"Password may not contain: <b>space&lt;&gt;\\\"';</b>",
	bad_password:				"Bad password."
};

translate_langs['es'] =
{
	no_network:					"No hay red detectada,<br>Por favor, inténtelo más tarde.",
	auto_login:					"Inicio de sesión en los servidores de Unus ID ...",
	unus_ID:					"Unus ID o correo electrónico",
	mobile_number:				"Número de teléfono móvil",
	password:					"Contraseña",
	password_rty:				"Repita su contraseña",
	login:						"Iniciar sesión",
	no_acc_register:			"No tienes cuenta. Regístrate",
	register_btn:				"Registrarse",
	register_hdr:				"Registrarse",
	first_name:					"Nombre",
	last_name:					"Apellido",
	email:						"Email",
	insert_UnusID:				'Añadir Unus ID',
	incoming_requests:			'Solicitudes pendientes',
	check_invitation:			'Solicitudes pendientes de ser aprobadas',
	update_contacts:			'Actualización de contactos',
	update_contacts_desc:		'Actualización de mis contactos con el servidor UnusID',
	invitation_center:			'Notificar mi UnusID',
	invite_address_book:		'A mis contactos y amigos',
	options:					'Opciones',
	my_unusid:					'Mi Unus ID: ',

	backup_n_restore:			'Actualizar/C.Seguridad/Restaurar',
	backup_restore_desc:		"Copia de seguridad permite guardar los contactos en el servidor / Restaurar permite recuperar los contactos del servidor en el móvil.",
	backup_contacts:			"Copia de seguridad de mis contactos",
	backup_contacts_desc:		"Guardar los contactos en el servidor.",

	restor_contacts:			'Restaurar contactos',
	restor_contacts_desc:		'Guardar contactos en el móvil.',
	
	backup_text1:				"Si usted desea cancelar la copia de seguridad, pulse el botón de abajo.",
	backup_text2:				"Copia de seguridad efectuada",
	backup_cancel:				"Cancelar copia seguridad",
	backup_canceled:			"Copia de seguridad cancelada por el usuario.",
	backup_no_contacts:			"No hay contactos para hacer copia de seguridad",
	backup_contacts_done:		' Los contactos fueron enviados al servidor.',

	request_not_automatic:		"Esta cuenta Unus ID no utiliza automáticamente el intercambio de datos de contacto. La información estará disponible una vez que la solicitud sea aprobada.",
	request_added:				"Solicitud añadida",
	the_contact_added:			"El nuevo contacto se agregó.",
	want_update_contact:		"¿Desea actualizar este contacto?",
	contact_added:				'Contacto añadido',

	no_name:					'Sin nombre',
	inf_phoneNumbers:			"Teléfono",
	inf_address:				'Dirección',
	inf_emails:					'Email',
	inf_organization:			"Organización/Compañía",
	inf_urls:					'URL',

	close_session:				'Cerrar la sesión',
	country_code:				'Código del país:',
	provider_prefix:			'Proveedor de móvil:',
	opt_language:				'Idioma:',

	request_date:				'Solicitud de la fecha',

	back_btn:					"Volver",
	request_btn:				'Enviar',
	invite_btn:					"Invitar",
	options_btn:				'Opciones',
	back_btn:					'Volver',
	logoff_btn:					"Cerrar sesión",
	cancel_btn:					"Cancelar",
	invite_btn:					"Enviar seleccionado",
	check_all_btn:				"Seleccionar Todos",
	uncheck_all_btn:			'Deseleccionar Todos',
	accept_btn:					'Aceptar',
	accept_all_btn:				"Aceptar todo",
	reject_btn:					"Rechazar",
	reject_all_btn:				"Rechazar todos",
	add_sel_btn:				"Agregar seleccionados",
	upl_sel_btn:				'Cargar Selección',

	mobile_all_btn:				"Todos Móvil > Servidor",
	server_all_btn:				"Todos servidor > Móvil",
	none_all_btn:				'Ninguno',
	update_btn:					"Actualizar",
	show_email_btn:				'Ver Texto E-mail',

	error_wong_pass:			'Unus ID o contraseña incorrecta !',
	error_unusid_found:			"Unus ID ya existe.",
	error_unusid_not_found:		"No se ha encontrado Unus ID",
	error_email_found:			"Cuenta con la dirección de correo electrónico ya existe.",
	error_password_dif:			"Los dos campos de contraseña no son iguales.",
	error_unusid_in_contacts:	'Este Unus ID ya está en tu lista de contactos.',
	error_add_self_contact:		"No se puede agregar.",
	error_no_incoming_reeques:	"No hay solicitudes a la espera de mi aprobación ",

	invite_text_1:				"Espere hasta que Unus ID termine de leer ...",
	invite_cancel_scan:			"Cancelar",
	invite_send_1:				"Enviando ...",
	invite_stat_send_done:		"Las comunicaciones han sido enviadas",

	invite_stat_read:			"Lectura de los contactos ...",
	invite_stat_analyz:			'Análisis de los contactos ...',
	invite_stat_server_analyz:	"Envío al servidor ...",
	invite_stat_display:		"Preparar la pantalla de contactos ...",
	invite_stat_send_invate:	'Enviando al servidor',
	no_contacts_to_invite:		'No hay contactos para invitar.',
	email_subject:				'Asunto',

	contacts_synchronization:	"Sincronización",
	synchronize_text_1:			'Unus ID revisa sus contactos para determinar qué información necesita ser actualizada.',
	synchronize_text_2:			'',
	synchronize_text_3:			"Para cancelar, presione el botón de abajo.",
	synchronize_cancel:			"Cancelar sincronización",

	sync_stat_read:				"Lectura de contactos ...",
	sync_stat_prep:				"Preparación para enviar ...",
	sync_stat_send:				"Envío al servidor ...",

	sync_conflict:				"Actualización de Contactos",
	sync_no_match:				"Contactos que no están en el servidor",
	sync_server:				"Contactos no que están en el Móvil",

	conflict_desc:				'Ver los conflictos entre el Móvil y Servidor',
	no_match_desc:				'Guardar nuevos contactos del móvil en el servidor',
	server_desc:				'Guardar contactos del Servidor al Móvil',

	sync_conflict_resolve:		'Actualización de Contactos',
	sync_no_conflict:			"No hay conflictos",
	sync_conflict_text_1:		"Estos contactos en el servidor y en el móvil tienen diferente información.",
	sync_conflict_text_2:		'<b>Elige</b>:<br>Guardar desde un servidor > (a) al móvil<br>O guardar desde el móvil > (a) al servidor',
	sync_mobile_opt:			'Móvil > Servidor',
	sync_server_opt:			'Servidor > Móvil',
	sync_none_opt:				'No cambie',

	sync_no_match_text_1:		"Los siguientes contactos se encuentran en el Servidor, pero no en el Móvil.",
	sync_all_match:				'Todos los contactos de tu Móvil se encuentran en el Servidor.',

	sync_server_text_1:			" Los siguientes contactos se encuentran en el Móvil pero no en el Servidor.",
	sync_all_server:			'Todos tus contactos del Servidor se encuentra en el Móvil.',

	restore_contacts:			"Restaurar",
	restore_stat_read:			"Examinar la última copia de seguridad en el servidor ...",
	restore_date:				"Copia de seguridad creado en: ",
	restore_count1:				"Copia de seguridad incluye",
	restore_count2:				' contactos',
	restore_etm:				'Estimación de tiempo de restauración: ',
	restore_contacts_btn:		"RESTAURAR",
	restore_download:			"Descarga de copia de seguridad ...",
	restore_restore:			'Restauración de contactos ...',
	restore_done:				"Restauración FINALIZADA.",

	confirm_exit_desc:			'¿Desea salir de Unus ID?',
	confirm_exit_title:			'¿Salir?',
	confirm_exit_buttons:		'Sí,No',
	
	//
	// Fields
	// ------

	"name/givenName":			"Nombre",
	"name/familyName":			"Apellido",
	"name/middleName":			"Segundo Nombre",
	"name/honorificPrefix":		"Prefijo",
	"name/nickname":			"Alias",
	"name/honorificSuffix":		"Sufijo",
	"phone/home":				"Teléfono fijo",
	"phone/mobile":				"Teléfono móvil",
	"phone/work":				"Teléfono del trabajo",
	"phone/fax":				"Fax",
	"phone/*":					"Otro teléfono",
	"email/home":				"Email particular",
	"email/work":				"Email trabajo",
	"email/*":					"Otro Email",
	"org/name":					"Organización/Compañía",
	"org/department":			"Departamento",
	"org/title":				"Puesto",
	"addr/streetAddress":		"Calle",
	"addr/locality":			"Ciudad",
	"addr/region":				"Región",
	"addr/postalCode":			"Código postal",
	"addr/country":				"País",
	"url/home":					"URL Particular",
	"url/work":					"URL Trabajo",
	"url/*":					"URL Otro",

	//
	// Fields Validation
	// -----------------
	
	required:					'Campo obligatorio está vacío.',
	noneNumericChar:			'Un campo de dato numérico contiene caracteres no numéricos.',
	valueIsTooLong:				'El campo contiene demasiados caracteres ',
	maxLength:					' máximos caracteres permitidos: ',
	valueIsTooShort:			'El campo contiene pocos caracteres ',
	minLength:					' mínimos caracteres permitidos: ',
	valueGtMax:					'contiene el valor máximo permitido. ',
	maxValue:					' máxima permitida: ',
	valueLtMin:					'Campo contiene un valor inferior a mínimo permitido. ',
	minValue:					' mínimo permitido: ',
	legalFilenameChar:			'El nombre del archivo contiene un carácter no permitido. ',
	legalPersonnameChar:		'El nombre contiene caracteres no permitidos. ',
	legalProfileNameChar:		'El nombre del perfil contiene un carácter no permitido. ',
	legalIdentifierChar:		'El nombre contiene un carácter ilegal. ',
	legalActivationKeyChar:		'La activación de la clave contiene un carácter no permitido. ',
	illegal_email_address:		'Dirección de correo electrónico incorrecto.',
	illegal_date_format:		'Formato de fecha equivocado.',
	illegal_phone_format:		'Número de teléfono equivocado.',
	illegal_password_char:		"La clave no puede contener: <b>espacio&lt;&gt;\\\"';</b>",
	bad_password:				"Contraseña incorrecta."
};
