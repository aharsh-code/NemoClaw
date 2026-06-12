#!/usr/bin/env bash
# SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
#
# Temporary smoke-test script used to validate the label-gated Greptile
# review workflow (.github/workflows/greptile-review-trigger.yaml).
# Not wired into any build or CI step. Safe to delete after testing.

set -euo pipefail

main() {
	echo "greptile-review-smoke: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
}

main "$@"
