import * as express from "express";
import store from '../../universal/store';
import { renderToString } from 'react-dom/server';
declare var window: any;
import * as React from 'react';
import * as RenderHelper from '../helpers/RenderHelper';
import { match, RouterContext } from 'react-router';
import { Provider} from 'react-redux';

const initialState = {
    reducer : true
};

export default class CatchAllController {
    public static store = store(false, initialState);

    public static render(req: express.Request, res: express.Response, next: Function): void {
        match(RenderHelper.matchGenerator(req), CatchAllController.matchCallback(res));
    }

    public static matchCallback(res) {
        return (error, redirectLocation, renderProps: any) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                renderProps.createElement = React.createElement;
                res.status(200).send(RenderHelper.renderFullPage(renderToString(
                    <Provider store={CatchAllController.store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                ), initialState));
            } else {
                res.status(404).send('Not found');
            }
        };
    }
}