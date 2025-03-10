import { ErrCls, ErrFromNative } from "./utils";

export abstract class Logger {
    public static debug(...args: any[]): void {
        console.debug(args.map(a => {
            if (a instanceof Error) {
                return a + ":: " + JSON.stringify(a)
            }
            return JSON.stringify(a)
        }).join(","));
    }

    public static info(msg: any): void {
        console.info(msg);
    }

    public static warn(msg: any): void {
        console.warn(msg);
    }

    public static err(msg: any): void {
        console.error(msg);
    }

    public static track(err: any, msg: string = "tracked"): void {
        if (!(err instanceof ErrCls)) {
            err = ErrFromNative(err);
        }
        let emsg = err.display();

        const stack = err.stack;
        if (stack !== undefined) {
          // do not attach stack to console - too long
          // emsg =
          //     emsg + "\n\t-> " + stack.trimEnd().replaceAll("\n", "\n\t-> ")
          // TODO: but attach stack to browser's db log storage
        }

        console.error(msg + "; " + emsg);
    }
}
