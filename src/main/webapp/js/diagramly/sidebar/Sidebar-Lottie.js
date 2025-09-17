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
		var s = 'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/lottie/';

		this.setCurrentSearchEntryLibrary('lottie', 'lottie');
		this.addLottieWebPalette(gn, r, sb, s);
		this.setCurrentSearchEntryLibrary();
	};

	Sidebar.prototype.addLottieWebPalette = function(gn, r, sb, s)
	{
		var dt = 'lottie web ';

		api_center_tags = this.getTagsForStencil(gn, 'api center', dt).join(' ');
		console.log(api_center_tags);
		var fns =
		[
			this.createVertexTemplateEntry(s + 'API_Center.svg;',
				r * 0.17, r * 0.17, '', 'API Center', null, null, api_center_tags),
			this.createLottieVertexTemplateEntry(s + 'API_Center.svg;',
				r * 0.17, r * 0.17, '', 'Loading 40 _ Paperplane', null, null, this.getTagsForStencil(gn, 'loading 40 _ paperplane', dt).join(' ')),
			// this.createLottieVertexTemplateEntry(s + 'Loading 40 _ Paperplane.json;',
			// 	r * 0.17, r * 0.17, '', 'Loading 40 _ Paperplane', null, null, this.getTagsForStencil(gn, 'loading 40 _ paperplane', dt).join(' ')),
		];
			
		this.addPalette('lottie', 'Lottie', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};

})();
