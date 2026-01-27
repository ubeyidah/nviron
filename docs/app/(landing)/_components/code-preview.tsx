import Container from "@/components/shared/container";
import * as motion from "motion/react-client";

export const CodePreview = () => {
  return (
    <Container className="py-24 relative overflow-hidden bg-gradient">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Zero config. <br />
            <span className="text-primary">Maximum safety.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Define your environment schema with Zod and get immediate type
            safety and runtime validation. No more debugging missing environment
            variables in production.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full max-w-xl"
        >
          <div className="relative rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#171717] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-2 text-xs text-muted-foreground font-mono">
                env.ts
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-gray-300">
                  <span className="text-purple-400">import</span> {"{"}{" "}
                  defineEnv, z {"}"}{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">&quot;nviron&quot;</span>;
                  {"\n\n"}
                  <span className="text-purple-400">const</span> env ={" "}
                  <span className="text-blue-400">defineEnv</span>({"{"}
                  {"\n"} PORT: z.<span className="text-blue-400">coerce</span>.
                  <span className="text-blue-400">number</span>().
                  <span className="text-blue-400">default</span>(
                  <span className="text-orange-400">3000</span>),
                  {"\n"} DATABASE_URL: z.
                  <span className="text-blue-400">string</span>().
                  <span className="text-blue-400">url</span>(),
                  {"\n"} NODE_ENV: z.<span className="text-blue-400">enum</span>
                  ([
                  <span className="text-green-400">
                    &quot;development&quot;
                  </span>
                  ,{" "}
                  <span className="text-green-400">&quot;production&quot;</span>
                  ]),
                  {"\n"}
                  {"}"});
                  {"\n\n"}
                  <span className="text-gray-500">{"// usage"}</span>
                  {"\n"}
                  <span className="text-blue-400">console</span>.
                  <span className="text-blue-400">log</span>(env.PORT);{" "}
                  <span className="text-gray-500">
                    {"// Typed & Validated!"}
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
