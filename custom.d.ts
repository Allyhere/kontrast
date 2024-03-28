import "react";

declare module "react" {
  interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined;
  }
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    flexible?: boolean;
  }
}
