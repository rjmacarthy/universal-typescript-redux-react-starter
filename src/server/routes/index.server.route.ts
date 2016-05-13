import * as express from "express";
import IndexController from "../controllers/index.server.controller";

export default class CatchRoute {
	constructor(app: express.Express) {
		app.route("*")
			.get(IndexController.render);
	}
}