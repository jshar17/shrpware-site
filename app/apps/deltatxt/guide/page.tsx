import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "DeltaTxt for Mac user guide",
  description: "How to use and configure DeltaTxt on Mac: editing, find and replace, comparison and merging, Python run and debug, the preference reference, and the deltatxt shell command for git.",
  alternates: { canonical: "/apps/deltatxt/guide" },
};

const generalSettings: [string, string, string][] = [
  ["Show toolbar", "On", "The same switch as View ▸ Show Toolbar, and unlike the system Hide Toolbar it survives a relaunch."],
  ["Enable tab document viewing", "On", "Off gives a separate window per document."],
  ["Open dropped files in a new window/tab", "Off", "Off means a drop replaces the document in the editor it lands on."],
  ["Reopen previous session on launch", "On", "Saved files from the last clean quit. Unsaved work is crash recovery’s job."],
  ["Warn before opening large files", "On", "Asks before loading a file over the threshold below."],
  ["Large-file warning", "64 MB", "1 to 16384 MB. Crash recovery has its own fixed 64 MB limit that does not follow this."],
];

const editorSettings: [string, string, string][] = [
  ["Appearance", "System", "System, Light or Dark. System follows macOS."],
  ["Plain-text font size", "13 pt", "10 to 32."],
  ["Wrap long lines", "Off", "Also View ▸ Word Wrap."],
  ["Show line numbers", "On", "The gutter carries breakpoints and change marks too."],
  ["Highlight current line", "On", ""],
  ["Show spaces and tabs", "Off", ""],
  ["Show indentation guides", "On", ""],
  ["Document map block opacity", "55%", "10 to 100, in fives."],
  ["Document map viewport opacity", "16%", "10 to 100, in fives."],
  ["Use tabs for indentation", "Off", "Off means Tab inserts spaces."],
  ["Trim trailing whitespace when saving", "Off", "Never applied to Markdown, patch or diff files, where trailing whitespace is content."],
  ["Highlight other occurrences of the selected word", "On", "On screen, not document-wide."],
  ["Detect indentation from file content", "On", "An .editorconfig still wins over it."],
  ["Close brackets and quotes automatically", "On", ""],
  ["Indentation width", "4 spaces", "2 to 8."],
];

const workspaceSettings: [string, string, string][] = [
  ["Show folder tree", "Off", "All five panel switches are also in the View menu."],
  ["Show Function List", "Off", ""],
  ["Show document map", "Off", ""],
  ["Show Clipboard History", "Off", ""],
  ["Show Character Panel", "Off", ""],
  ["Quick Open ignored directories", ".git, .idea, .vs, .venv, venv, __pycache__, node_modules, bin, obj", "Directory names, matched at any depth. An entry containing a slash is dropped."],
  ["Quick Open file limit", "8000 files", "250 to 50000. Raise it if a file you know exists is missing from Quick Open."],
];

const compareSettings: [string, string, string][] = [
  ["Ignore whitespace by default", "Off", ""],
  ["Ignore case by default", "Off", ""],
  ["Show low-priority differences", "On", ""],
  ["Automatically refresh compared files", "On", "Recomputes when either file changes on disk."],
  ["Refresh interval", "1.25 seconds", "0.5 to 10, in quarters. The field shows two significant figures, so the default reads as 1.2."],
];

const editorConfigKeys: [string, string, string][] = [
  ["indent_style", "Yes", "Overrides both the preference and content detection."],
  ["indent_size", "Yes", "A number, or tab to defer to tab_width."],
  ["tab_width", "Yes", "Used as the indent width when indent_size is absent."],
  ["max_line_length", "Yes", "Draws the page guide. off draws none."],
  ["end_of_line", "Empty documents only", "A document with content keeps its own line endings. Convert with Format ▸ Line Endings."],
  ["trim_trailing_whitespace", "No", "Use the preference of the same name instead."],
  ["insert_final_newline", "No", "Parsed and not applied."],
  ["charset", "No", "Encoding is detected from the file’s bytes."],
];

const stateFiles: [string, string][] = [
  ["settings.json", "Every preference, plus the recent-workspace and pinned-document lists. Unknown keys are tolerated and out-of-range numbers are clamped on load, so hand-editing is safe."],
  ["keybindings.json", "Shortcuts. Rewritten every launch with every command, so it doubles as a current list."],
  ["snippets.json", "Snippets. Seeded with seven on first use."],
  ["runners.json", "Script runner profiles, one per file extension."],
  ["python-run.json", "The default Python run configuration."],
  ["script-run-configurations.json", "Per-script Python overrides, keyed by path."],
  ["languages/profiles.json", "Imported syntax profiles."],
  ["session.json", "The Reopen Previous Session list."],
  ["recovery.json", "Crash-recovery snapshots. Cleared on a clean quit."],
  ["crash-*.log", "Crash reports, newest ten kept. Paths inside your home folder are redacted before they are written."],
];

/** Three columns in the site's own comparison-table grid. Deliberately not a
 * <table>: this design system has no styles for one, and `.comparison-table`
 * already gives the panel, the rules and the mono header row. `strong` is
 * avoided inside a row because the grid styles it as a highlighted cell. */
/** An annotated screenshot. `w`/`h` are the file's own pixel size so the browser
 * can reserve the space before it loads, and everything below the first figure
 * is lazy — the page carries eleven of them. */
const shots: Record<string, [number, number]> = {
  "main-window": [1600, 1229], "find-replace": [1150, 656], "find-in-workspace": [1440, 1104],
  "compare-files": [1600, 889], "compare-folders": [1520, 1144], "merge-conflicts": [1600, 1229],
  "run-debug": [1600, 1229], "python-config": [1414, 964], "preferences-general": [1360, 1424],
  "command-line-tool": [1305, 243], "follow-file": [1600, 1225],
};

function Shot({ name, alt, children, eager }: { name: string; alt: string; children: React.ReactNode; eager?: boolean }) {
  const [w, h] = shots[name];
  return <figure className="guide-figure">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={`/apps/deltatxt/guide/${name}.webp`} alt={alt} width={w} height={h} loading={eager ? "eager" : "lazy"} decoding="async" />
    <figcaption>{children}</figcaption>
  </figure>;
}

function SpecTable({ rows, columns }: { rows: [string, string, string][]; columns: [string, string, string] }) {
  return <div className="comparison-table">
    <div className="comparison-row comparison-head"><span>{columns[0]}</span><span>{columns[1]}</span><span>{columns[2]}</span></div>
    {rows.map(([a, b, c]) => <div className="comparison-row" key={a}><span>{a}</span><span>{b}</span><span>{c}</span></div>)}
  </div>;
}

export default function DeltaTxtGuide() {
  return <PageShell accent="deltatxt"><ArticleHero title="DeltaTxt for Mac: the guide." intro="Every area of the app, what each preference does, and how to drive DeltaTxt from Finder, Shortcuts, a link, or a shell." />
    <article className="article-body wrap"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp>
      <nav className="guide-toc" aria-label="On this page"><p>On this page</p><ol><li><a href="#editions">Two editions</a></li><li><a href="#window">The window</a></li><li><a href="#files">Opening files, encodings, and large files</a></li><li><a href="#editing">Editing</a></li><li><a href="#search">Finding and replacing</a></li><li><a href="#compare">Comparing and merging</a></li><li><a href="#run">Running and debugging Python</a></li><li><a href="#configure">Configuring DeltaTxt</a></li><li><a href="#integration">Driving DeltaTxt from outside</a></li><li><a href="#cli">The deltatxt command, and git</a></li><li><a href="#questions">Common questions</a></li></ol></nav>

      <h2 id="editions">Two editions</h2>
      <p>DeltaTxt ships as a direct download and on the Mac App Store. Editing, search, comparison and merging are identical. Three things exist only in the direct download: <strong>Run and Debug</strong> with the Python console and script runners, the <strong>deltatxt shell command</strong> with its git integration, and the <code>--diff</code>, <code>--merge</code> and <code>--run</code> command-line verbs.</p>
      <p>That is not a licensing choice. A sandboxed application can only reach a file you handed it through an open dialog, a drop, or Finder. A path typed at a shell has never been handed over, so those features cannot work in the App Store edition whatever permission is requested. If your copy has a <strong>Run</strong> menu, it is the direct download.</p>

      <h2 id="window">The window</h2>
      <p>Nothing in the window is compulsory. The toolbar, the line-number gutter, the workspace explorer, the document map and each sidebar panel are individually switchable from the <strong>View</strong> menu, and every one of those switches persists across launches — DeltaTxt replaces the system Hide Toolbar command, which forgets on quit, with one that remembers.</p>
      <p>The file name sits at the trailing end of the toolbar so the buttons can start at the leading edge. It still behaves like a document title: click it for the enclosing-folder chain, or drag it to hand the file to another application. Dragging offers a copy or a link and never a move, because the file is open in front of you.</p>
      <Shot name="main-window" eager alt="The DeltaTxt editor window with a Swift file open, the workspace explorer on the left, the line-number gutter, the status bar and the document map on the right edge">
        The editor window, with the workspace explorer and document map turned on. <strong>Every part of it is optional</strong> — the toolbar, the gutter, the explorer, the map and each sidebar panel are separate View-menu switches, and all of them persist.
      </Shot>

      <p>Documents open in tabs by default. <strong>Window ▸ Pinned Documents</strong> keeps up to twenty files you return to, independent of which windows are open, and puts Command-1 to Command-9 on the first nine. A pinned file that has moved stays listed and is marked as missing rather than disappearing.</p>

      <h2 id="files">Opening files, encodings, and large files</h2>
      <p>A file’s encoding, byte-order mark and line endings survive a load-and-save round trip unchanged unless you convert them deliberately. The status bar reports all three. Detection reads the byte-order mark, then looks for UTF-16 without one, then validates the file as UTF-8; a file that is not valid UTF-8 is read as Windows-1252 rather than ISO-8859-1, because real-world Windows text uses the range ISO-8859-1 leaves undefined for curly quotes, dashes and the euro sign.</p>
      <p><strong>Format ▸ Encoding</strong> converts on the next save, <strong>Format ▸ Reopen with Encoding</strong> re-reads the same bytes differently when detection guessed wrong, and <strong>Format ▸ Line Endings</strong> converts between LF, CRLF and CR. Saving in an encoding that cannot represent a character in the document names that character and offers UTF-8 instead of dropping it.</p>
      <p>Three size thresholds apply and are easy to confuse. Over <strong>16 MB</strong> a file loads behind a cancellable progress sheet so the window appears immediately. Over your <strong>warning threshold</strong>, 64 MB by default, DeltaTxt asks first and offers to search the file instead of loading it. Over <strong>64 MB</strong> crash recovery stops snapshotting the document, and the status bar says so. For files past comfortable editing, <strong>Search ▸ Find in Large File…</strong> and <strong>Compare ▸ Streaming Compare Two Files…</strong> both read from disk and have no size limit.</p>
      <p>Saving is atomic: content is written to a sibling file and swapped into place only after the write fully succeeds. There is no autosave and no Versions browser, deliberately — macOS ties Versions to autosaving in place, and a code editor must not write to a file a build, a script or git is watching. Unsaved work is protected by crash recovery instead.</p>

      <h2 id="editing">Editing</h2>
      <p><strong>Edit ▸ Line</strong> holds the twelve commands that treat lines as units: duplicate, move up and down, join, split, four sorts (ascending, descending, case-sensitive and numerically), reverse, remove empty lines and remove duplicates. The three trims are next door in <strong>Edit ▸ Whitespace</strong>. Sorting a file that ends in a newline leaves that newline at the end.</p>
      <p><strong>Edit ▸ Convert Case</strong> offers upper, lower, proper and invert; proper case knows about apostrophes, so <code>don&apos;t stop</code> becomes <code>Don&apos;t Stop</code>. <strong>Edit ▸ Whitespace</strong> converts between tabs and spaces column-aware rather than by search and replace, and converting spaces to tabs touches only leading whitespace.</p>
      <p>Three things decide how Tab behaves, in order: an <code>.editorconfig</code> that applies to the file, the indentation the file already uses if detection is on, then your preferences. Tab and Shift-Tab across a multi-line selection indent and outdent the block rather than replacing it.</p>
      <p><strong>Search ▸ Select Next Occurrence</strong> builds a real multi-range selection, and it is genuinely useful for delete, mark and copy. It is not multi-cursor editing: the Mac text system honours every range for painting and deletion but not for insertion, so typing replaces the first range and drops the rest. For repeated edits down a column use <strong>Edit ▸ Column Editor…</strong>, which is built for it.</p>
      <p><strong>Edit ▸ Macro</strong> — Start Recording, Play Macro, Play Macro Multiple Times — records editor commands rather than keystrokes, so a macro replays correctly against text that differs from where it was recorded. Snippets are edited as JSON from <strong>File ▸ Customize ▸ Snippets…</strong>, which opens the file as an ordinary document; <code>$0</code> marks where the caret lands.</p>

      <h2 id="search">Finding and replacing</h2>
      <Shot name="find-replace" alt="The DeltaTxt find and replace panel with a search term, a replacement, and the regular expression option turned on">
        Find and Replace. <strong>Count and Find All tell you what a replace would touch before you run it</strong>, and In Selection verifies each match against the selection rather than trusting the arithmetic.
      </Shot>

      <p><strong>Count</strong> and <strong>Find All in Document</strong> tell you what a replace would touch before you run it, and <strong>Find All in All Documents</strong> does the same across every open document including unsaved ones. <strong>In Selection</strong> verifies each match against the selection before replacing it, so a replace cannot leak past the end of a selection as the text shifts.</p>
      <p>A replace across a file writes to a sibling and swaps it atomically, and with backups on it keeps the previous contents as <code>.deltatxt.bak</code>. A replace that matches nothing changes nothing at all, including the backup.</p>
      <p><strong>Search ▸ Find in Workspace…</strong> searches every file under the open folder, taking file patterns such as <code>*.swift; *.md</code> and controls for subfolders, hidden files and ignored directories. <strong>Replace in Workspace…</strong> shows every proposed change for review before writing anything. A results list is a snapshot, so it is cleared after a replace rather than left pointing at line numbers that have moved.</p>

      <Shot name="find-in-workspace" alt="Workspace search results in DeltaTxt grouped by file, each match showing its line number and the matching text">
        Workspace search, grouped by file. The patterns are semicolon separated, and <strong>Replace in Workspace shows every proposed change before it writes anything</strong>.
      </Shot>

      <h2 id="compare">Comparing and merging</h2>
      <p><strong>Compare ▸ Compare Two Files…</strong>, <strong>Compare This Document With File…</strong> and <strong>Compare This Document With Clipboard</strong> cover most of what people want. In Finder, use <strong>Select for Compare</strong> and then <strong>Compare to Selected</strong> from the Services menu. The left pane is editable, individual changes can be applied across, and the whole comparison exports as a unified diff. A file with Windows line endings compared against its Unix twin reports as identical rather than as every line changed.</p>
      <Shot name="compare-files" alt="Two versions of a Swift file compared side by side in DeltaTxt, with changed lines highlighted on both sides">
        A side-by-side comparison. The left pane is editable, individual changes can be applied across, and the whole thing exports as a unified diff.
      </Shot>

      <p><strong>Compare ▸ Compare Two Folders…</strong> reports each file as identical, different, left-only, right-only, or unreadable. That last state matters: a directory DeltaTxt cannot read is reported rather than skipped, because skipping it would make every file beneath it look as though it existed on one side only. Folder sync shows the full list of what it will do and copies nothing until you confirm.</p>
      <Shot name="compare-folders" alt="Two folders compared in DeltaTxt, each row showing whether the file differs or exists on only one side, with its size on each side">
        Folder comparison. <strong>An unreadable directory is reported rather than skipped</strong> — skipping it would make every file beneath it look as though it existed on one side only.
      </Shot>

      <p><strong>Compare ▸ Three-Way Merge…</strong> produces a merged draft as an untitled document, so the inputs are never overwritten and you choose where the result goes. Conflicts stay in the text as markers, and <strong>Compare ▸ Resolve Conflicts</strong> steps through them.</p>

      <Shot name="merge-conflicts" alt="A three-way merge draft in DeltaTxt showing conflict markers around the two competing versions">
        A merge draft. Both sides are kept and marked, the inputs are never overwritten, and <strong>Resolve Conflicts steps through them</strong>.
      </Shot>

      <h2 id="run">Running and debugging Python</h2>
      <p>Direct download only. <strong>Run ▸ Run Script</strong> streams output into the panel below the editor, and the last of a process’s output is delivered before its exit is reported, so the final line of a script that fails immediately is never lost. When a run finishes while DeltaTxt is not the frontmost application, a notification reports the exit code.</p>
      <p>Click the gutter to set a breakpoint and use <strong>Run ▸ Debug Script</strong>. Continue is F8, Step Over F10, Step Into F11, Step Out Shift-F11, and the panel shows the console, Locals and the call Stack. The debugger is Python-first and speaks the standard <code>pdb</code> protocol; conditional breakpoints and watch expressions are not provided.</p>
      <Shot name="run-debug" alt="A Python script paused at a breakpoint in DeltaTxt, with the execution line highlighted and the debugger showing locals and the pdb prompt">
        A paused script. The breakpoint is in the gutter, the line about to run is highlighted, and the panel carries the stepping controls, Locals, Stack and <strong>pdb&apos;s own prompt</strong>.
      </Shot>

      <p><strong>Run ▸ Python Run Configuration…</strong>, or the gear beside Run, chooses the interpreter. <strong>Detect</strong> scans the project, virtual environments, Conda and <code>PATH</code>, and honours <code>VIRTUAL_ENV</code> and <code>CONDA_PREFIX</code>. The same window sets arguments, a working directory and environment variables as one <code>KEY=VALUE</code> per line, and can save that setup as the default or only for the script in front of you. A per-script configuration wins over the default.</p>
      <Shot name="python-config" alt="The Configure Python window in DeltaTxt showing the interpreter popup, script arguments, working directory and environment variables">
        Configure Python. <strong>A setup can be saved as the default or only for the script in front of you</strong>, and the per-script one wins.
      </Shot>

      <p><strong>Run ▸ Configure Script Runners…</strong> maps a file extension to a program and arguments, so Run works for anything you can invoke from a command line. <code>{"{path}"}</code> is replaced with the script’s path and is the default when arguments are left blank. Compiled languages that need a build step are not covered, though a runner can invoke your own build script.</p>
      <p><strong>View ▸ Preview Markdown</strong> renders a Markdown document beside itself and follows your edits live, with clickable links. Tables are the one thing it cannot draw — their rows arrive as plain paragraphs, because the renderer is the system’s CommonMark support rather than a GitHub-flavoured one.</p>
      <p><strong>View ▸ Follow File</strong> tails a growing log in place, and the document is read-only while it does. A status message confirms it when you start and then fades; the lasting indicator is the tick beside the menu item. A multi-byte character split across two writes is held until it is complete, and a rotated log is noticed: DeltaTxt keeps what it has, inserts a marker, and continues with the new file rather than stopping or duplicating everything.</p>

      <Shot name="follow-file" alt="A log file open in DeltaTxt with Follow File active, new lines appended at the bottom as the file grows">
        Follow File tailing a log. New lines arrive as they are written, and <strong>the reload prompt that would normally interrupt stays quiet</strong>.
      </Shot>

      <h2 id="configure">Configuring DeltaTxt</h2>
      <p><strong>DeltaTxt ▸ Preferences…</strong> has five sections. Every control takes effect immediately in every open document — there is no OK, Apply or Cancel, and no Reset, so the defaults below are the reference. The search field looks across all five sections at once. There is no colour picker: the Light and Dark themes are fixed, and syntax colours arrive with a language profile.</p>

      <h3>General</h3>
      <SpecTable rows={generalSettings} columns={["Setting", "Default", "Notes"]} />
      <Shot name="preferences-general" alt="The General section of DeltaTxt preferences, showing document behaviour, session recovery, the large-file warning, the default text editor card and the command line tool card">
        Preferences ▸ General. <strong>Every control takes effect immediately</strong> — there is no OK, Apply or Cancel, and no Reset, which is why the defaults are written out below.
      </Shot>

      <p>Two cards in this section are not stored preferences. <strong>Default text editor</strong> is a macOS setting, and its button claims plain text and logs only — asking a text editor to open your text files is not asking it to take <code>.json</code> from your IDE. <strong>Command line tool</strong> writes a file; see below.</p>

      <h3>Editor</h3>
      <p>Defaults for plain text. A rich-text document keeps its own formatting and ignores them.</p>
      <SpecTable rows={editorSettings} columns={["Setting", "Default", "Notes"]} />

      <h3>Workspace</h3>
      <SpecTable rows={workspaceSettings} columns={["Setting", "Default", "Notes"]} />

      <h3>Compare</h3>
      <p>Defaults for newly opened comparisons. Each window keeps its own controls.</p>
      <SpecTable rows={compareSettings} columns={["Setting", "Default", "Notes"]} />

      <h3>Run &amp; Debug</h3>
      <p>Two settings, both on: <strong>Clear output before run</strong> and <strong>Scroll output to the newest line</strong>. Turn the second off to read earlier output while a process is still writing. The interpreter and its environment are configured per script from Configure Python instead.</p>

      <h3>Keyboard shortcuts</h3>
      <p><strong>File ▸ Customize ▸ Keyboard Shortcuts…</strong> opens <code>keybindings.json</code> as a document — a flat map of command name to chord. The file is rewritten on every launch with every command the app has and the shortcut it ended up with, so it doubles as a complete current list. An empty string clears a shortcut, and a chord that cannot be parsed is reported by name at the next launch. If two commands end up on the same chord DeltaTxt says so, because one of them then has no working shortcut.</p>

      <h3>EditorConfig</h3>
      <p>DeltaTxt reads <code>.editorconfig</code> automatically, walking up from the file being opened; the nearest file wins and <code>root = true</code> stops the walk. Three keys are parsed but not applied, and are listed as unsupported rather than left for you to discover.</p>
      <SpecTable rows={editorConfigKeys} columns={["Key", "Honoured", "Notes"]} />
      <p><code>unset</code> works for every key, and an unrecognised value is ignored rather than treated as a reset, so a typo in a nearer file does not erase a deliberate setting further up. Numbers must be between 1 and 1000, the upward walk stops after 64 directories, a file over 1 MiB is ignored, and glob matching is case-insensitive with <code>**</code>, <code>*</code>, <code>?</code>, character classes, <code>{"{a,b}"}</code> and numeric ranges all supported. A malformed file counts as absent and never stops a file opening.</p>

      <h3>Where DeltaTxt keeps things</h3>
      <p>Everything is under <code>~/Library/Application Support/DeltaTxt/</code>, and inside the application container in the App Store edition. All of it is JSON.</p>
      <ul>{stateFiles.map(([file, holds]) => <li key={file}><code>{file}</code> — {holds}</li>)}</ul>

      <h2 id="integration">Driving DeltaTxt from outside</h2>
      <p>Finder offers DeltaTxt under <strong>Open With</strong>, plus <strong>Select for Compare</strong>, <strong>Compare to Selected</strong> and <strong>Run with DeltaTxt</strong> in the Services menu. These work in the App Store edition too, because a file reference handed over by Finder carries its own permission.</p>
      <p>Two Shortcuts actions are published, <strong>Open File in DeltaTxt</strong> and <strong>Compare Files in DeltaTxt</strong>, and both appear in Spotlight. Each accepts a file an earlier action produced in memory and never wrote to disk: such content opens as an untitled document. There is deliberately no Run action, because a Shortcut can be triggered by things you are not watching.</p>
      <p>For anything that has a URL and no shell — a Shortcut, an AppleScript, a Markdown link, a build tool’s “open the offending file”:</p>
      <pre><code>{`deltatxt://open?path=/abs/path.txt&line=42
deltatxt://compare?left=/abs/a.txt&right=/abs/b.txt
deltatxt://merge?base=/abs/b&left=/abs/l&right=/abs/r`}</code></pre>
      <p><code>path</code> may be repeated to open several files, and a link works whether or not DeltaTxt is already running. There is deliberately no <code>run</code> verb and a link cannot name a file to overwrite: a URL scheme is reachable from any web page with no prompt, so both would be drive-by primitives. The command line keeps them, because invoking a shell already means the caller can do anything.</p>

      <h2 id="cli">The deltatxt command, and git</h2>
      <p>Direct download only. Install it from <strong>Preferences ▸ General ▸ Command line tool</strong>. It goes to <code>/usr/local/bin</code> when you own that directory and <code>~/.local/bin</code> otherwise, never asks for a password, and then tells you whether your login shell will actually find it.</p>
      <pre><code>{`deltatxt [-w] [-n] [-l LINE] FILE...
deltatxt [-w] --diff LEFT RIGHT
deltatxt [-w] --merge BASE LEFT RIGHT --output MERGED`}</code></pre>
      <Shot name="command-line-tool" alt="The command line tool card in DeltaTxt preferences, with Install, Remove and Usage buttons">
        The card reports where the command went and <strong>whether your login shell will actually find it</strong>.
      </Shot>

      <p><code>-w</code> does not return until the file, comparison or merge is closed, which is the flag that makes git work. <code>-n</code> creates a file that is not there, <code>-l</code> puts the caret on a line, and <code>--help</code> prints the git configuration. <code>--diff</code>, <code>--merge</code> and <code>-n</code> come before their files; everything else can go anywhere.</p>
      <pre><code>{`git config --global diff.tool deltatxt
git config --global difftool.deltatxt.cmd 'deltatxt --wait --diff "$LOCAL" "$REMOTE"'
git config --global merge.tool deltatxt
git config --global mergetool.deltatxt.cmd 'deltatxt --wait --merge "$BASE" "$LOCAL" "$REMOTE" --output "$MERGED"'
git config --global core.editor 'deltatxt --wait'`}</code></pre>
      <p>With those set, <code>git difftool</code> opens a comparison and waits for you to close it, <code>git mergetool</code> hands you a conflict and picks up the file you saved, and <code>git commit</code> opens the message in DeltaTxt. It is a script rather than a symlink into the application, so moving or renaming DeltaTxt does not break it, and it is safe to delete.</p>

      <h2 id="questions">Common questions</h2>
      <div className="faq-list">
        <details open><summary>deltatxt: command not found</summary><p>The tool installed into a directory your shell does not search, usually <code>~/.local/bin</code>. Reopen Preferences ▸ General ▸ Command line tool: the card reports the path and gives you the line to add to your shell profile.</p></details>
        <details><summary>deltatxt --wait never returns</summary><p>The document, comparison or merge it is waiting on is still open. Close it. If DeltaTxt was force-quit, the command gives up on its own rather than blocking forever.</p></details>
        <details><summary>Typing into a multiple selection only changes one place</summary><p>Expected. The Mac text system does not honour multiple ranges for insertion. Use Edit ▸ Column Editor… for repeated edits down a column.</p></details>
        <details><summary>Find All results disappeared after a replace</summary><p>Expected. The list was a snapshot of text that has since moved, so it is cleared rather than left pointing at the wrong lines. Search again.</p></details>
        <details><summary>Curly quotes are appearing in source code</summary><p>Edit ▸ Substitutions ▸ Smart Quotes has been turned on for that document. Substitutions are all off in a new editor for exactly this reason.</p></details>
        <details><summary>A file opens as gibberish</summary><p>Detection read it as the wrong encoding. Format ▸ Reopen with Encoding re-reads the same bytes as something else.</p></details>
        <details><summary>Quick Open cannot find a file that exists</summary><p>Either its directory is in the ignore list or the workspace has more files than the Quick Open limit. Both are in Preferences ▸ Workspace.</p></details>
        <details><summary>There is no Run menu</summary><p>That is the Mac App Store edition. See Two editions at the top of this page.</p></details>
      </div>

      <h2 id="help">Still stuck?</h2>
      <p>Email <a href="mailto:support@shrpware.com">support@shrpware.com</a> with your macOS version, the DeltaTxt version from About DeltaTxt, and what happened. A crash report, if one exists, is in the folder listed above with home-directory paths already redacted.</p>
    </article>
  </PageShell>;
}
