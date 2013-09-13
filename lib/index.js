
module.exports = exports = drawImage;

var THREE = require( 'three' );

function drawImage( url, done ) {

  var obj = new THREE.Object3D();
  var mesh, mat, geo;

  THREE.ImageUtils.loadTexture( url, null, function( t ) {
    var i = t.image, w = i.width, h = i.height;
    geo = new THREE.PlaneGeometry( w, h );
    mat = new THREE.MeshLambertMaterial( { map: t } );
    mesh = new THREE.Mesh( geo, mat );
    obj.add( mesh );
    obj.image = i;
    obj.texture = t;
    if ( typeof done === 'function' ) { done( obj );  }
  } );

  obj.show = function() {
    mesh.visible = true;
  };

  obj.hide = function() {
    mesh.visible = false;
  };

  return obj;
}
