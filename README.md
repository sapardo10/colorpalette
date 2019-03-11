# colorpalette

web::

http://nasty-food.surge.sh/

Reflexión: Ve usted algún problema con los screenshots tomados por Cypress al intentar hacer Visual Regression Testing ? Agregue su respuesta al documento de la entrega.

En los pantallazos se mantiene el estado focus sobre los botones, es decir que aparece un marco azul claro sobre el boton que se oprimio durante la prueba, esto posiblemente generará una inconsistencia donde solo pasa por cuestiones normales del navegador.

### ResembleJs

¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?
-  Cuando se utiliza para analizar una sola imagen, la información que se puede extraer de los resultados de la herramienta son los valores en forma RGB, junto con el brillo de la imagen siendo un valor de 0 a 255 tambien. Proporciona una escala de blanco y negro y el alfa de la imagen (opacidad).
Ejemplo de respuesta:
{
	  red: 100,
	  green: 100,
	  blue: 100,
	  brightness: 100,
	  alpha: 100,
	  white: 100,
	  black: 100
	}

¿Qué información puedo obtener al comparar dos imagenes?
-  La información que devuelve resemblejs es el porcentaje de diferencia entre las dos imagenes, unas variables que indican si las imagenes son de diferente tamaño y en caso de serlo que tanto difieren.
{
	  misMatchPercentage : 100, // %
	  isSameDimensions: true, // or false
	  dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
	  getImageDataUrl: function(){}
}

¿Qué opciones se pueden seleccionar al realizar la comparación ?
-  Se puede configurar lo siguiente:
Cambiar el tamaño de las imagenes para que queden igual, no ignorar nada, ignorar colores, ignorar alfa, ignorar antialiasing, dimensiones sobre la imagen para comparar solo secciones, activar una comparacion completa para imagenes muy grandes.
-  Sobre el output tambien se puede configurar si se desea opaco o transparente y como se desea ver la diferencia de las imagenes.
