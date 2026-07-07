#!/usr/bin/env bash
# shellcheck disable=SC2034
if [[ -z "${OP_ACCOUNT:-}" && -f "$(dirname "${BASH_SOURCE[0]}")/../.op-account" ]]; then
  OP_ACCOUNT="$(grep -v '^#' "$(dirname "${BASH_SOURCE[0]}")/../.op-account" | grep -v '^[[:space:]]*$' | head -1 | tr -d '\r\n')"
fi
export OP_ACCOUNT
