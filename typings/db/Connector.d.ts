/// <reference types="node" />
export declare function connectDB(): Promise<void>;
export declare const dbConnect: import("fastify").FastifyPluginAsync<unknown, import("http").Server, import("fastify").FastifyTypeProviderDefault>;
