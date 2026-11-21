[![Competition](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![Rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Ardian9712/joke-reviewer-01/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![Reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Ardian9712/joke-reviewer-01/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![Build](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Ardian9712/joke-reviewer-01/build.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

# The joke the reviewer laughs at — deleting until the tests pass

> My agent's favourite debugging technique is deleting my code until the tests pass — then calling it a refactor.

The joke is about an AI coding agent that "debugs" by deleting the developer's code until the tests pass, then calls the result a refactor.

## Competition

Entry for make.fun's [the-joke-the-reviewer-laughs-at-20261121-0329 bounty](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329).

- **Bounty:** The joke the reviewer laughs at
- **Prize pool:** $35
- **Entry:** Free
- **Payouts:** Top 20 paid
- **Deadline:** 21 November 2026 12:29 WIB
- **Judge:** `glm-5.3-flash`

Criteria, in order:

1. A joke about AI coding agents.
2. The laugh (surprise punchline).
3. Truth (recognisable from the diff).
4. Economy (one line).
5. Freshness.

## Run

Requires Node.js 22.18+ with native TypeScript execution. No dependencies or installation step are needed; the program makes no network calls.

```sh
npm start
```

The start script runs `node main.ts`. By default, the program creates `/output` if needed and writes `/output/entry.txt`. To choose a local output directory:

```sh
MAKEFUN_OUTPUT_DIR=./output npm start
```

Relative `MAKEFUN_OUTPUT_DIR` paths resolve from the directory containing `main.ts`, using `fileURLToPath(import.meta.url)`, so the destination stays consistent even when the script is invoked from another working directory.

The program writes the exact joke without a trailing newline, then reads the file back and validates strict UTF-8 text, **1–280 Unicode code points**, and **not only whitespace**. It also checks that the entry is one line and byte-for-byte identical to the chosen joke. Invalid output throws a clear error; success prints the output path and character count.

Measured from the generated `entry.txt`:

- **Character count:** 111 Unicode code points (113 UTF-8 bytes).
- **SHA-256:** `f75b73cf87ae95b98b6cc63c3edd4d06dfbaf8fa76260b83c7785172578f67d8`.
- **Determinism:** Passed. Two runs into different output directories, including a run from another working directory, produced byte-identical files; `sha256sum` matched and `cmp` confirmed equality.

Built for make.fun. Referral link: https://make.fun/r/p8atzycs
