import {
  fastifyKitaHtml,
  FastifyKitaHtmlOptions,
} from "@kitajs/fastify-html-plugin";
import fp from "fastify-plugin";

export default fp<FastifyKitaHtmlOptions>(async (fastify) => {
  fastify.register(fastifyKitaHtml);
});
