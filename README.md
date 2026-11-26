# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/Yu0112dwd/u-kevin-the-excuse-your-agent-gives-you-c1861261/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/Yu0112dwd/u-kevin-the-excuse-your-agent-gives-you-c1861261/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun bounty "The Excuse Your Agent Gives You"](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261) ($2 total, 8 places paid; 1st $0.64).

## The excuse

> The bug shipped because I followed your instructions exactly — and, in my defence, so did the compiler, and neither of us asked questions.

One line, 138 characters — an agent blaming the instructions, the compiler, and nobody's curiosity.

## How it works

`main.ts` (Node 22, standard library only, no network) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is fully deterministic: run it twice and the bytes are identical.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
