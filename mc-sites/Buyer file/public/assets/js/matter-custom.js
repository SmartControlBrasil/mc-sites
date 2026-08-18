function initSimulation() {
	var Engine = Matter.Engine,
		Render = Matter.Render,
		Events = Matter.Events,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse,
		World = Matter.World,
		Bodies = Matter.Bodies;

	// create an engine
	var engine = Engine.create(),
		world = engine.world;

	// Get the container element and its dimensions
	var containerElement = document.querySelector(
		".tags-container, .tags-container2",
	);
	var containerWidth = containerElement.clientWidth;
	var containerHeight = containerElement.clientHeight;

	// create a renderer
	var render = Render.create({
		element: containerElement,
		engine: engine,
		options: {
			width: containerWidth,
			height: containerHeight,
			// pixelRatio: 2,
			pixelRatio: 4,
			background: "rgba(0, 0, 0, 1)",
			wireframes: false,
		},
	});

	// create bounds
	var ground = Bodies.rectangle(
		containerWidth / 2 + 160,
		containerHeight + 80,
		containerWidth + 320,
		160,
		{ render: { fillStyle: "#fff" }, isStatic: true },
	);
	var wallLeft = Bodies.rectangle(
		-80,
		containerHeight / 2,
		160,
		containerHeight,
		{ isStatic: true },
	);
	var wallRight = Bodies.rectangle(
		containerWidth + 80,
		containerHeight / 2,
		160,
		1200,
		{ isStatic: true },
	);
	var roof = Bodies.rectangle(
		containerWidth / 2 + 160,
		-80,
		containerWidth + 320,
		160,
		{ isStatic: true },
	);

	// object colors & variables
	var tagVideos = "#EDDC8C";
	var videos = "#B3E8F3";
	var abouts = "#4D4D4D";

	var border = 2;
	var radius = 20;

	// create objects

	// tagVideo & design
	var categories1 = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev1.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories2 = Bodies.rectangle(containerWidth / 2 - 150, 460, 122, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev2.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories3 = Bodies.rectangle(containerWidth / 2 + 250, 420, 204, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev3.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories4 = Bodies.rectangle(containerWidth / 2 - 75, 380, 204, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev4.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	// video
	var categories5 = Bodies.rectangle(containerWidth / 2 - 74, 540, 194, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev5.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories6 = Bodies.rectangle(containerWidth / 2 + 174, 490, 216, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev6.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories7 = Bodies.rectangle(containerWidth / 2 - 142, 440, 167, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev7.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories8 = Bodies.rectangle(containerWidth / 2 - 10, 260, 260, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev8.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	//misc
	var categories9 = Bodies.rectangle(containerWidth / 2 - 242, 420, 174, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev9.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories10 = Bodies.rectangle(containerWidth / 2 + 60, 300, 285, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev10.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories11 = Bodies.rectangle(containerWidth / 2, 320, 170, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev11.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories12 = Bodies.rectangle(containerWidth / 2 - 59, 260, 60, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev1.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});

	var categories13 = Bodies.rectangle(containerWidth / 2 - 10, 260, 260, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev2.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	//misc
	var categories14 = Bodies.rectangle(containerWidth / 2 - 242, 420, 174, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev5.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories15 = Bodies.rectangle(containerWidth / 2 + 60, 300, 285, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev7.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});
	var categories16 = Bodies.rectangle(containerWidth / 2, 320, 170, 56, {
		chamfer: { radius: radius },
		render: {
			sprite: {
				texture: "./assets/img/development/dev8.png",
				xScale: 1,
				yScale: 1,
			},
		},
	});

	// Original Shape
	// var tagFotografie = Bodies.rectangle(70, 500, 133, 40, {render: { fillStyle: tagVideos}, chamfer: {radius: 20}})

	// add all of the bodies to the world
	World.add(engine.world, [
		ground,
		wallLeft,
		wallRight,
		roof,
		categories1,
		categories2,
		categories3,
		categories4,
		categories5,
		categories6,
		categories7,
		categories8,
		categories9,
		categories10,
		categories11,
		categories12,
		categories13,
		categories14,
		categories15,
		categories16,
	]);

	// add mouse control
	var mouse = Mouse.create(render.canvas),
		mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false,
				},
			},
		});

	World.add(world, mouseConstraint);

	// keep the mouse in sync with rendering
	render.mouse = mouse;

	// Allow page scrolling in matter.js window
	mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
	mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

	// Detect clicks vs. drags
	let click = false;

	document.addEventListener("mousedown", () => (click = true));
	document.addEventListener("mousemove", () => (click = false));

	// Create a On-Mouseup Event-Handler
	Events.on(mouseConstraint, "mouseup", function (event) {
		var mouseConstraint = event.source;
		var bodies = engine.world.bodies;
		if (!mouseConstraint.bodyB) {
			for (i = 0; i < bodies.length; i++) {
				var body = bodies[i];
				// Check if clicked or dragged
				if (click === true) {
					if (
						Matter.Bounds.contains(
							body.bounds,
							mouseConstraint.mouse.position,
						)
					) {
						var bodyUrl = body.url;

						// Hyperlinking feature
						if (bodyUrl != undefined) {
							//window.location.href = bodyUrl;
							window.open(bodyUrl, "_blank");
						}
						break;
					}
				}
			}
		}
	});

	// run the engine
	Engine.run(engine);

	// run the renderer
	Render.run(render);
}

function setupMatterObserver() {
	var containerElement = document.querySelector(
		".tags-container, .tags-container2",
	);

	if (!containerElement) {
		window.addEventListener("load", setupMatterObserver, { once: true });
		return;
	}

	var observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				initSimulation();
				observer.disconnect();
			}
		});
	}, {});

	observer.observe(containerElement);
}

setupMatterObserver();
