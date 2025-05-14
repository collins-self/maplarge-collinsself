type RouteHandler = (param?: string) => string | HTMLElement;

interface RouteEntry {
    path: string;
    handler: RouteHandler;
}