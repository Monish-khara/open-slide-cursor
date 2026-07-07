#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# shellcheck source=op-account.sh
source "$ROOT/scripts/op-account.sh"
OP_ARGS=()
if [[ -n "${OP_ACCOUNT:-}" ]]; then
  OP_ARGS=(--account "$OP_ACCOUNT")
fi
exec op run "${OP_ARGS[@]}" --env-file="$ROOT/.env.op" -- open-slide preview "$@"
