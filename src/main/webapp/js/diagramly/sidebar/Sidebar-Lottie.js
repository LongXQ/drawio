/**
 * Copyright (c) 2020-2025, JGraph Holdings Ltd
 * Copyright (c) 2020-2025, draw.io AG
 */
(function()
{
	// Adds Azure shapes
	Sidebar.prototype.addLottiePalette = function()
	{
		var gn = 'mxgraph.lottie';
		var r = 400;
		var sb = this;
		// var s = 'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/';
		var s = 'shape=lottie';
		this.setCurrentSearchEntryLibrary('lottie', 'lottie');
		this.addLottieWebPalette(gn, r, sb, s);
		this.setCurrentSearchEntryLibrary();
	};

	Sidebar.prototype.addLottieWebPalette = function(gn, r, sb, s)
	{
		var dt = 'lottie web ';

		var fns =
		[
			// this.createVertexTemplateEntry(s + 'API_Center.svg;',
			// 	r * 0.17, r * 0.17, '', 'API Center', null, null, this.getTagsForStencil(gn, 'api center', dt).join(' ')),
			this.createVertexTemplateEntry(s,
				r * 0.17, r * 0.17, '', 'API Center', null, null, this.getTagsForStencil(gn, 'api center', dt).join(' ')),
		];
			
		this.addPalette('lottie', 'Lottie', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						var fns_content = fns[i](content);
						content.appendChild(fns_content);
						lottie.loadAnimation({
							container: fns_content.getElementsByClassName('lottie')[0],
							renderer: 'svg',
							loop: true,
							autoplay: true,
							path: 'Loading 40 _ Paperplane.json'
						});
					}
		}));
	};

})();
