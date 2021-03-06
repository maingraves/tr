class LeMondeWidget extends Widget {
	
	constructor(id, app) {
		super(id, LeMondeModel, LeMondeView, LeMondeController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = false;
		this.sizeX = 2;
		this.sizeY = 0.5;
		this.radius = 15;
	}
	
	async ready() {
		super.ready();
		
		this.controller.load();
	}
	
}

class LeMondeModel extends WidgetModel {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

}

class LeMondeView extends WidgetView {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	draw() {
		super.draw();
		//this.link = HH.create("a");
		//SS.style(this.link, {"fontSize": "10px", "textDecoration": "none"});
		//this.stage.appendChild(this.link);
		this.bloc = HTML.create("input");
		this.bloc.setAttribute("type", "text");
		this.bloc.setAttribute("value", "Entrer un mot");
		this.stage.appendChild(this.bloc);
		//this.texte = HH.create("h3");
		//this.texte.innerHTML = this.article;
		//this.stage.appendChild(this.texte);
		
	}
	
	//update(title, link) {
	//	this.link.innerHTML = title;
	//	HH.attr(this.link, {"href": "https://www.lemonde.fr" + link, "target": "_blank"});
	//}
	
}

class LeMondeController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}
	
	

