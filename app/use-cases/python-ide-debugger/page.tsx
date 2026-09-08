import type { Metadata } from "next";
import { SeoLanding } from "@/app/components/SeoLanding";

export const metadata: Metadata = {
  title: "Focused Python IDE and debugger for Windows",
  description: "Write, run, and debug Python with breakpoints, stepping, Locals, Stack, interpreter discovery, and a built-in console in DeltaTxt.",
  alternates: { canonical: "/use-cases/python-ide-debugger" },
};

export default function PythonIdeDebugger() {
  return <SeoLanding
   
    title="A focused Python IDE for Windows."
    intro="Write, run, and debug Python with breakpoints, stepping, Locals, Stack, interpreter discovery, and a built-in console—without the setup of a heavyweight project IDE."
    app="DeltaTxt"
    appHref="/apps/deltatxt"
    cta="See DeltaTxt"
    image="/apps/deltatxt/gallery/windows-code-without-overhead.webp"
    imageAlt="Python source file open in DeltaTxt with Run and Debug controls"
  >
    <h2>Stay close to the script</h2>
    <p>Open a Python file, edit with syntax styling and folding, and run it from the same native Windows workbench. DeltaTxt streams standard output and errors into a docked panel so the code and its behavior stay together.</p>

    <h2>Debug the problem, not the project</h2>
    <div className="prose-grid">
      <section><h3>Breakpoints and stepping</h3><p>Pause at the line that matters, then Continue, Step Over, Step Into, or Step Out while DeltaTxt marks the current execution line.</p></section>
      <section><h3>Locals and Stack</h3><p>Inspect local values and the active call stack, or send a direct command to Python&apos;s debugger when you need a closer look.</p></section>
      <section><h3>Your Python environment</h3><p>Use an automatically detected virtual environment or select the interpreter, arguments, working directory, and environment values for a script.</p></section>
    </div>

    <h2>Built for the text around Python</h2>
    <p>Real troubleshooting rarely stays in one source file. Search and replace across code, configuration, and logs; compare two script revisions; and merge the change you want without switching tools.</p>

    <h2>Focused by design</h2>
    <p>DeltaTxt is for scripts, diagnostics, and text-heavy technical work. Choose a full project IDE when you need language-server refactoring, compiler-driven builds, integrated source control, or a broad plugin ecosystem.</p>
  </SeoLanding>;
}
