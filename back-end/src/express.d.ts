declare module "express" {
  export interface Request {
    user?: any;
    permissions?: any;
    query?: any;
    params?: any;
    body?: any;
    headers?: any;
  }
  export interface Response {
    status: (code: number) => Response;
    json: (body: any) => Response;
    send: (body: any) => Response;
    on: (event: string, listener: () => void) => Response;
  }
  export interface NextFunction {
    (err?: any): void;
  }
  export interface Application {
    use: any;
    listen: any;
  }
  export interface Router {
    use: any;
    get: any;
    post: any;
    put: any;
    delete: any;
  }
  function express(): Application;
  namespace express {
    function json(options?: any): any;
    function urlencoded(options?: any): any;
    function Router(): Router;
  }
  export { Router, Response, NextFunction };
  export = express;
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
    user?: any;
    permissions?: any;
  }
  export function sign(payload: any, secret: string, options?: any): string;
  export function verify(token: string, secret: string): any;
}

declare module "bcrypt" {
  export function hash(
    data: string,
    saltOrRounds: string | number
  ): Promise<string>;
  export function compare(data: string, encrypted: string): Promise<boolean>;
}

declare module "morgan" {
  import { RequestHandler } from "express";
  function morgan(format: string, options?: any): RequestHandler;
  export = morgan;
}

declare module "cors" {
  import { RequestHandler } from "express";
  function cors(options?: any): RequestHandler;
  export = cors;
}
