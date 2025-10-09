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
		

function mxLottie(bounds, fill, stroke, strokewidth)
{
	mxRectangleShape.call(this, bounds, fill, stroke, strokewidth);
	this.lottie_rendered = false;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(mxLottie, mxRectangleShape);

/**
 * Function: paintVertexShape
 * 
 * Generic background painting implementation.
 */
mxLottie.prototype.paintVertexShape = function(c, x, y, w, h)
{
	mxRectangleShape.prototype.paintVertexShape.apply(this, arguments);

	var node = document.createElement('div');
	node.setAttribute('class', 'lottie');
	node.style.height = '100%';
	node.style.width = '100%';
	node.setAttribute('data-lottie', this.getLottieSource());

	var fo = c.createElement('foreignObject');

	// Workarounds for print clipping and static position in Safari
	c.setCssText(fo, 'overflow: visible; text-align: left;');
	fo.setAttribute('pointer-events', 'none');

	fo.setAttribute('width', this.bounds.width);
	fo.setAttribute('height', this.bounds.height);
	fo.setAttribute("x", this.bounds.x);
	fo.setAttribute('y', this.bounds.y);

	fo.appendChild(node);
	c.root.appendChild(fo);
};

mxLottie.prototype.afterPaint = function(c)
{
	// if (this.lottie_rendered) return;
	var container = this.node.getElementsByClassName('lottie')[0];
	const path = this.getLottieSource();
	lottie.loadAnimation({
		container: container,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: path
	});

};

mxLottie.prototype.paintForeground = function(c, x, y, w, h)
{
	mxRectangleShape.prototype.paintForeground.apply(this, arguments);
};

mxLottie.prototype.getLottieSource = function()
{
	const lottie = mxUtils.getValue(this.style, 'lottie', null);
	return lottie;
};