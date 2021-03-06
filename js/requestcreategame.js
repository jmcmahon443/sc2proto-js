/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.SC2APIProtocol.RequestCreateGame');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.SC2APIProtocol.LocalMap');
goog.require('proto.SC2APIProtocol.PlayerSetup');


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
proto.SC2APIProtocol.RequestCreateGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.RequestCreateGame.repeatedFields_, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.RequestCreateGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestCreateGame.displayName = 'proto.SC2APIProtocol.RequestCreateGame';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.RequestCreateGame.repeatedFields_ = [3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.RequestCreateGame.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.RequestCreateGame.MapCase = {
  MAP_NOT_SET: 0,
  LOCAL_MAP: 1,
  BATTLENET_MAP_NAME: 2
};

/**
 * @return {proto.SC2APIProtocol.RequestCreateGame.MapCase}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getMapCase = function() {
  return /** @type {proto.SC2APIProtocol.RequestCreateGame.MapCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0]));
};



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
proto.SC2APIProtocol.RequestCreateGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestCreateGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestCreateGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestCreateGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    localMap: (f = msg.getLocalMap()) && proto.SC2APIProtocol.LocalMap.toObject(includeInstance, f),
    battlenetMapName: jspb.Message.getField(msg, 2),
    playerSetupList: jspb.Message.toObjectList(msg.getPlayerSetupList(),
    proto.SC2APIProtocol.PlayerSetup.toObject, includeInstance),
    disableFog: jspb.Message.getField(msg, 4),
    randomSeed: jspb.Message.getField(msg, 5),
    realtime: jspb.Message.getField(msg, 6)
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
 * @return {!proto.SC2APIProtocol.RequestCreateGame}
 */
proto.SC2APIProtocol.RequestCreateGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestCreateGame;
  return proto.SC2APIProtocol.RequestCreateGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestCreateGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestCreateGame}
 */
proto.SC2APIProtocol.RequestCreateGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.LocalMap;
      reader.readMessage(value,proto.SC2APIProtocol.LocalMap.deserializeBinaryFromReader);
      msg.setLocalMap(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBattlenetMapName(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.PlayerSetup;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerSetup.deserializeBinaryFromReader);
      msg.addPlayerSetup(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableFog(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRandomSeed(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRealtime(value);
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
proto.SC2APIProtocol.RequestCreateGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestCreateGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestCreateGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestCreateGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.LocalMap.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerSetupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SC2APIProtocol.PlayerSetup.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional LocalMap local_map = 1;
 * @return {?proto.SC2APIProtocol.LocalMap}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getLocalMap = function() {
  return /** @type{?proto.SC2APIProtocol.LocalMap} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.LocalMap, 1));
};


/** @param {?proto.SC2APIProtocol.LocalMap|undefined} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setLocalMap = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearLocalMap = function() {
  this.setLocalMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasLocalMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string battlenet_map_name = 2;
 * @return {string}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getBattlenetMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setBattlenetMapName = function(value) {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearBattlenetMapName = function() {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasBattlenetMapName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerSetup player_setup = 3;
 * @return {!Array.<!proto.SC2APIProtocol.PlayerSetup>}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getPlayerSetupList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PlayerSetup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PlayerSetup, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.PlayerSetup>} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setPlayerSetupList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.PlayerSetup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PlayerSetup}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.addPlayerSetup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.PlayerSetup, opt_index);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearPlayerSetupList = function() {
  this.setPlayerSetupList([]);
};


/**
 * optional bool disable_fog = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getDisableFog = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setDisableFog = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearDisableFog = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasDisableFog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 random_seed = 5;
 * @return {number}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getRandomSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setRandomSeed = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearRandomSeed = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasRandomSeed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool realtime = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getRealtime = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setRealtime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearRealtime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasRealtime = function() {
  return jspb.Message.getField(this, 6) != null;
};


