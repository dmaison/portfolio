module.exports = function( app, dir ){
	
	app.get( '/api/experience', function( req, res ){

		var jobs = [
			{
				title: 'Senior Developer / Tech Support',
				employer: 'interlinkONE, inc.',
				site: 'http://interlinkone.com',
				years: '5',
				description: 'Used skills with SQL, ASP, XHTML, CSS, Javascript, and AJAX, while working as part of a team to develop innovative logistics, marketing, and contact management technologies.',
				bullets: [
					'Designed and implemented development conventions for new application',
					'Developed new applications using node and mongo',
					'Developed wireframes for new applications built around UI/UX',
					'Worked with clients to develop new or improve current functionality to meet their needs',
					'Received copy from clients and collaborated to create landing pages and emails',
					'Implementing web standards and the jQuery library into the product',
					'Designed database tables using SQL to accommodate new or existing functional'
				]
			},
			{
				title: 'Fuels Specialist',
				employer: 'USAF Reserves',
				site: 'http://www.airforce.com/careers/detail/fuels-specialist/',
				years: '3',
				description: 'Worked with the mission operations control center at Dover AFB & Westover ARB to coordinate and dispatch personnel to successfully refuel aircraft in a timely and efficient manner. Also, maintained accurate billing records and accounting for all fuels and cryogenics products.',
				bullets: [
					'Processed over 12 thousand fueling transactions, ensuring timely and accurate billing',
					'Completed 6 End of Month/Year fuels account reconciliations with zero discrepancies',
					'Maintained 100% document retention, resulting in zero lost fuels transactions',
					'Supervised 3 personnel, guaranteeing timely/accurate accounting of fuels transactions',
					'Trained 6 personnel on proper use of petroleum products and facilities',
					'Authored and presented daily safety/environmental briefings for 11 personnel'
				]
			},
			{
				title: 'Fuels Specialist',
				employer: 'USAF',
				site: 'http://www.airforce.com/careers/detail/fuels-specialist/',
				years: '4',
				description: 'Worked directly with the Fuels Service Center at Dover AFB and Westover ARB to distribute jet fuel and ground fuels, as well as issuing cryogenics products in a timely manner. Also, performed hydrant systems operations, including refuels, defuels, flushes, transfers, and receipts.',
				bullets: []
			}
		]

		res.status( 200 );
		res.send( jobs );

	});

	app.get( '/api/qualifications/', function( req, res ){

		var langs = {
			server: [ 
				{ language: 'Node', experience: 3 }, 
				{ language: 'PHP', experience: 3 }, 
				{ language: 'Classic ASP', experience: 3 }, 
				{ language: '.NET', experience: 3 } 
			],

			db: [
				{ language: 'Mongo', experience: 3 }, 
				{ language: 'Redis', experience: 3 }, 
				{ language: 'SQL', experience: 3 }
			],

			compiled: [
				{ language: 'C', experience: 3 },
				{ language: 'C#', experience: 3 },
				{ language: 'Visual Basic', experience: 3 }
			],

			web: [
				{ language: 'HTML 5', experience: 3 },
				{ language: 'CSS 3', experience: 3 },
				{ language: 'Javascript', experience: 3 },
				{ language: 'AJAX', experience: 3 },
				{ language: 'JSON', experience: 3 },
				{ language: 'XML', experience: 3 }
			],

			libs: [
				{ language: 'jQuery', experience: 3 },
				{ language: 'Prototype.js', experience: 3 },
				{ language: 'script.aculo.us', experience: 3 },
				{ language: 'Angular.js', experience: 3 },
				{ language: 'Backbone.js', experience: 3 },
				{ language: 'Bootstrap', experience: 3 },
				{ language: 'Semantic UI', experience: 3 }
			],

			versionControl: [
				{ language: 'GitHub', experience: 3 },
				{ language: 'Visual SourceSafe', experience: 3 },
			],

			other: [
				{ language: 'SOAP', experience: 3 },
				{ language: 'RESTful Web Services', experience: 3 },
				{ language: 'Windows Powershell Command Line', experience: 3 },
				{ language: 'Ubuntu Command line', experience: 3 },
				{ language: 'Adobe Creative Suites', experience: 3 },
			]
		};

		res.status( 200 );
		res.send( langs );

	});

	// Front end
	app.get( '*', function( req, res ){
		res.sendFile( dir + '/client/views/index.html' );
	});
	
}