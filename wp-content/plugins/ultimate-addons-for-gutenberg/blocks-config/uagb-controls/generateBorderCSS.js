import generateCSSUnit from '@Controls/generateCSSUnit';
const generateBorderCSS = ( attributes, prefix, deviceType = 'desktop' ) => {
	if( 'default' !== attributes[ prefix + 'BorderStyle' ] ){
	switch( deviceType ) {
        case 'tablet':
          deviceType = 'Tablet';
          break;
        case 'mobile':
          deviceType = 'Mobile';
          break;
        default:
            deviceType = '';
      }

	const borderCSS = {}
	const borderStyle = attributes[prefix + 'BorderStyle'];
	const borderColor = attributes[prefix + 'BorderColor'];
	
	const borderTopWidth = generateCSSUnit( attributes[prefix + 'BorderTopWidth' +deviceType ], 'px' );
	const borderRightWidth = generateCSSUnit( attributes[prefix + 'BorderRightWidth' +deviceType], 'px' );
	const borderBottomWidth = generateCSSUnit( attributes[prefix + 'BorderBottomWidth' +deviceType], 'px' );
	const borderLeftWidth = generateCSSUnit( attributes[prefix + 'BorderLeftWidth' +deviceType], 'px' );

	const borderTopLeftRadius = generateCSSUnit( attributes[prefix + 'BorderTopLeftRadius' +deviceType], attributes[prefix + 'BorderRadiusUnit' +deviceType] );
	const borderTopRightRadius = generateCSSUnit( attributes[prefix + 'BorderTopRightRadius' +deviceType], attributes[prefix + 'BorderRadiusUnit' +deviceType] );
	const borderBottomRightRadius = generateCSSUnit( attributes[prefix + 'BorderBottomRightRadius' +deviceType], attributes[prefix + 'BorderRadiusUnit' +deviceType] );
	const borderBottomLeftRadius = generateCSSUnit( attributes[prefix + 'BorderBottomLeftRadius' +deviceType], attributes[prefix + 'BorderRadiusUnit' +deviceType] );
	
			if( 'none' !== attributes[prefix + 'BorderStyle'] && '' !== attributes[prefix + 'BorderStyle'] ){
				borderCSS['border-top-width'] = borderTopWidth;
				borderCSS['border-right-width'] = borderRightWidth;
				borderCSS['border-bottom-width'] = borderBottomWidth;
				borderCSS['border-left-width'] = borderLeftWidth;
				borderCSS['border-color'] = borderColor;
			}
			borderCSS['border-style'] = borderStyle;
			borderCSS['border-top-left-radius'] = borderTopLeftRadius;
			borderCSS['border-top-right-radius'] = borderTopRightRadius;
			borderCSS['border-bottom-right-radius'] = borderBottomRightRadius;
			borderCSS['border-bottom-left-radius'] = borderBottomLeftRadius;
	return borderCSS;
		};

};

export default generateBorderCSS;