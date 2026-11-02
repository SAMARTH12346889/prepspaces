/**
 * Environment bindings and variables provided to Cloudflare Workers via Wrangler.
 */
export interface Env {
  /**
   * Current deployment environment (e.g. "development", "staging", "production")
   */
  ENVIRONMENT: string;

  /**
   * Future Cloudflare Bindings & API integration placeholders:
   * e.g.
   * DB?: D1Database;
   * CACHE?: KVNamespace;
   * AI?: Ai;
   */
}
