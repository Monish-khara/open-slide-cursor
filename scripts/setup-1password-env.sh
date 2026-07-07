#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
# shellcheck source=op-account.sh
source "$ROOT/scripts/op-account.sh"

ITEM_TITLE="open-slide-gslides"
VAULT="Private"
FIELD="credential"
OP_REF="op://${VAULT}/${ITEM_TITLE}/${FIELD}"
OP_ARGS=()
if [[ -n "${OP_ACCOUNT:-}" ]]; then
  OP_ARGS=(--account "$OP_ACCOUNT")
fi

if ! command -v op >/dev/null 2>&1; then
  echo "1Password CLI (op) is not installed. Run: brew install 1password-cli"
  exit 1
fi

if ! op vault list "${OP_ARGS[@]}" >/dev/null 2>&1; then
  cat <<'EOF'
No 1Password account is available to the CLI.

Enable desktop app integration:
  1Password app → Settings → Developer → Integrate with 1Password CLI

Then retry: npm run setup:op
EOF
  exit 1
fi

CLIENT_ID="${VITE_GOOGLE_CLIENT_ID:-}"
if [[ -z "$CLIENT_ID" && -f .env ]]; then
  CLIENT_ID="$(grep -E '^VITE_GOOGLE_CLIENT_ID=' .env | head -1 | cut -d= -f2- | tr -d '"\r\n')"
fi

if [[ -z "$CLIENT_ID" ]]; then
  echo "Set VITE_GOOGLE_CLIENT_ID in .env or export it, then rerun npm run setup:op"
  exit 1
fi

if op item get "$ITEM_TITLE" --vault "$VAULT" "${OP_ARGS[@]}" >/dev/null 2>&1; then
  echo "Updating 1Password item: $ITEM_TITLE (account: ${OP_ACCOUNT:-default})"
  op item edit "$ITEM_TITLE" --vault "$VAULT" "${OP_ARGS[@]}" "${FIELD}=${CLIENT_ID}" >/dev/null
else
  echo "Creating 1Password item: $ITEM_TITLE (account: ${OP_ACCOUNT:-default})"
  op item create \
    "${OP_ARGS[@]}" \
    --category "API Credential" \
    --title "$ITEM_TITLE" \
    --vault "$VAULT" \
    "${FIELD}=${CLIENT_ID}" >/dev/null
fi

RESOLVED="$(op run "${OP_ARGS[@]}" --env-file=.env.op -- sh -c 'printf %s "$VITE_GOOGLE_CLIENT_ID"' | tr -d '\r\n')"
if [[ -z "$RESOLVED" ]]; then
  echo "op run did not resolve VITE_GOOGLE_CLIENT_ID. Check .env.op references: $OP_REF"
  exit 1
fi

if [[ "$RESOLVED" != "$CLIENT_ID" ]]; then
  echo "op run resolved an unexpected value. Check .env.op references: $OP_REF"
  exit 1
fi

echo "OK: $OP_REF (account: ${OP_ACCOUNT:-default})"
echo "Start dev with secrets from 1Password: npm run dev:op"
