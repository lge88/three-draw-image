
module.exports = exports = drawImage;

var THREE = require( 'three' );

function drawImage( url, done ) {

  var obj = new THREE.Object3D();
  THREE.ImageUtils.loadTexture( url, null, function( t ) {
    var i = t.image, w = i.width, h = i.height;
    var mat = new THREE.MeshLambertMaterial( { map: t } );
    var geo = new THREE.PlaneGeometry( w, h );
    var mesh = new THREE.Mesh( geo, mat );
    obj.add( mesh );
    obj.image = i;
    obj.texture = t;
    if ( typeof done === 'function' ) { done( obj );  }
  } );

  return obj;
}
