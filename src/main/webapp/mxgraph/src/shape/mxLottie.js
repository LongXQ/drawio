/**
 * Copyright (c) 2006-2015, JGraph Holdings Ltd
 * Copyright (c) 2006-2015, draw.io AG
 */
/**
 * Class: mxLottie
 *
 * Extends <mxShape> to implement an image shape. This shape is registered
 * under <mxConstants.SHAPE_IMAGE> in <mxCellRenderer>.
 * 
 * Constructor: mxLottie
 * 
 * Constructs a new image shape.
 * 
 * Parameters:
 * 
 * bounds - <mxRectangle> that defines the bounds. This is stored in
 * <mxShape.bounds>.
 * image - String that specifies the URL of the image. This is stored in
 * <image>.
 * fill - String that defines the fill color. This is stored in <fill>.
 * stroke - String that defines the stroke color. This is stored in <stroke>.
 * strokewidth - Optional integer that defines the stroke width. Default is
 * 0. This is stored in <strokewidth>.
 */
// <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div id="lottie3"></div></foreignObject>
		

function mxLottie(bounds, image, fill, stroke, strokewidth)
{
	mxShape.call(this);
	// this.bounds = bounds;
	// this.image = image;
	// this.fill = fill;
	// this.stroke = stroke;
	// this.strokewidth = (strokewidth != null) ? strokewidth : 1;
	this.lottie_rendered = false;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxLottie, mxRectangleShape);

/**
 * Variable: preserveImageAspect
 *
 * Switch to preserve image aspect. Default is true.
 */
// mxLottie.prototype.preserveImageAspect = true;

/**
 * Function: getSvgScreenOffset
 * 
 * Disables offset in IE9 for crisper image output.
 */
// mxLottie.prototype.getSvgScreenOffset = function()
// {
// 	return 0;
// };

/**
 * Function: apply
 * 
 * Overrides <mxShape.apply> to replace the fill and stroke colors with the
 * respective values from <mxConstants.STYLE_IMAGE_BACKGROUND> and
 * <mxConstants.STYLE_IMAGE_BORDER>.
 * 
 * Applies the style of the given <mxCellState> to the shape. This
 * implementation assigns the following styles to local fields:
 * 
 * - <mxConstants.STYLE_IMAGE_BACKGROUND> => fill
 * - <mxConstants.STYLE_IMAGE_BORDER> => stroke
 *
 * Parameters:
 *
 * state - <mxCellState> of the corresponding cell.
 */
// mxLottie.prototype.apply = function(state)
// {
// 	mxShape.prototype.apply.apply(this, arguments);
//
// 	this.fill = null;
// 	this.stroke = null;
// 	this.gradient = null;
//
// 	if (this.style != null)
// 	{
// 		this.preserveImageAspect = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_ASPECT, 1) == 1;
// 		this.imageBackground = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BACKGROUND, null);
// 		this.imageBorder = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BORDER, null);
//
// 		// Legacy support for imageFlipH/V
// 		this.flipH = this.flipH || mxUtils.getValue(this.style, 'imageFlipH', 0) == 1;
// 		this.flipV = this.flipV || mxUtils.getValue(this.style, 'imageFlipV', 0) == 1;
//
// 		this.clipPath = mxUtils.getValue(this.style, mxConstants.STYLE_CLIP_PATH, null);
// 	}
// };

/**
 * Function: isHtmlAllowed
 * 
 * Returns true if HTML is allowed for this shape. This implementation always
 * returns false.
 */
// mxLottie.prototype.isHtmlAllowed = function()
// {
// 	return !this.preserveImageAspect;
// };

/**
 * Function: createHtml
 *
 * Creates and returns the HTML DOM node(s) to represent
 * this shape.
 */
mxLottie.prototype.createHtml = function()
{
	var node = document.createElement('div');
	node.style.position = 'absolute';

	return node;
};

/**
 * Function: isRoundable
 * 
 * Disables inherited roundable support.
 */
// mxLottie.prototype.isRoundable = function()
// {
// 	return false;
// };

/**
 * Function: getImageDataUri
 * 
 * Returns the image to be rendered.
 */
// mxLottie.prototype.getImageDataUri = function()
// {
// 	return this.image;
// };

/**
 * Function: configurePointerEvents
 * 
 * Configures the pointer events for the given canvas.
 */
mxLottie.prototype.configurePointerEvents = function(c)
{
	// do nothing
};

/**
 * Function: paintVertexShape
 * 
 * Generic background painting implementation.
 */
mxLottie.prototype.paintVertexShape = function(c, x, y, w, h)
{
	var node = document.createElement('div');
	node.setAttribute('class', 'lottie');

	var fo = c.createElement('foreignObject');

	// Workarounds for print clipping and static position in Safari
	c.setCssText(fo, 'overflow: visible; text-align: left;');
	fo.setAttribute('pointer-events', 'none');
	fo.setAttribute('width', '100%');
	fo.setAttribute('height', '100%');

	fo.appendChild(node);
	c.root.appendChild(fo);
};

/**
 * Function: redraw
 * 
 * Overrides <mxShape.redraw> to preserve the aspect ratio of images.
 */
mxLottie.prototype.redrawHtmlShape = function()
{
	console.log("redrawHtmlShape");
};

mxLottie.prototype.beforePaint = function(c)
{
};

mxLottie.prototype.afterPaint = function(c)
{
	if (this.lottie_rendered) return;
	var container = this.node.getElementsByClassName('lottie')[0];
	lottie.loadAnimation({
		container: container,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'Loading 40 _ Paperplane.json'
	});
	this.lottie_rendered = true;

};

timeI = setInterval(function (){
	var node = document.getElementById('lottie1');

	if (node === null ||  node === undefined) {
		return;
	}

	console.log(node);
		lottie.loadAnimation({
		container: node,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'Loading 40 _ Paperplane.json'
	});
		clearInterval(timeI);

}, 1000);
