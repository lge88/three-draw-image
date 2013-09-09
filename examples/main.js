var ISEViewport = require( 'ise-viewport' );
var EditorControls = require( 'ise-editor-controls' );
var drawImage = require( 'three-draw-image' );
var THREE = require( 'three' );

var viewport = ISEViewport();
var scene = viewport.scene;
var controls = EditorControls( viewport.camera, viewport.container );

// build scene:

var i1 = drawImage( 'facade_1.jpg', function( obj ) {
  var w = 200, iw = obj.image.width, s= w/iw;
  obj.scale.set( s, s, 1 );
} );
scene.add( i1 );

var i2 = drawImage( 'Truss_bridge.jpg', function( obj ) {
  var w = 400, iw = obj.image.width, s= w/iw;
  obj.scale.set( s, s, 1 );
} );
i2.position.add( { x:0, y:0, z:200 } );
scene.add( i2 );
