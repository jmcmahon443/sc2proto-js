/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.ResponseCreateGame');
goog.provide('proto.SC2APIProtocol.ResponseCreateGame.Error');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseCreateGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseCreateGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseCreateGame.displayName = 'proto.SC2APIProtocol.ResponseCreateGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseCreateGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseCreateGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseCreateGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1),
    errorDetails: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseCreateGame}
 */
proto.SC2APIProtocol.ResponseCreateGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseCreateGame;
  return proto.SC2APIProtocol.ResponseCreateGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseCreateGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseCreateGame}
 */
proto.SC2APIProtocol.ResponseCreateGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ResponseCreateGame.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseCreateGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseCreateGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseCreateGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ResponseCreateGame.Error} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseCreateGame.Error = {
  MISSINGMAP: 1,
  INVALIDMAPPATH: 2,
  INVALIDMAPDATA: 3,
  INVALIDMAPNAME: 4,
  INVALIDMAPHANDLE: 5,
  MISSINGPLAYERSETUP: 6,
  INVALIDPLAYERSETUP: 7,
  MULTIPLAYERUNSUPPORTED: 8
};

/**
 * optional Error error = 1;
 * @return {!proto.SC2APIProtocol.ResponseCreateGame.Error}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseCreateGame.Error} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseCreateGame.Error} value */
proto.SC2APIProtocol.ResponseCreateGame.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseCreateGame.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error_details = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseCreateGame.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseCreateGame.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


