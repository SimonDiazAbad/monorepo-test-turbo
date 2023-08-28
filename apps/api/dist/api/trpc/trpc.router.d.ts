import { INestApplication } from '@nestjs/common';
import { TrpcService } from './trpc.service';
export declare class TrpcRouter {
    private readonly trpc;
    constructor(trpc: TrpcService);
    appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        hello: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
            };
            _input_out: {
                name?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            greeting: string;
        }>;
    }>;
    applyMiddleware(app: INestApplication): Promise<void>;
}
export type AppRouter = TrpcRouter[`appRouter`];
